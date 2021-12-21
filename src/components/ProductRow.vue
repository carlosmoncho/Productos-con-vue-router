<template>
  <tr>
    <td>{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.units }}</td>
    <td>{{ product.price }}</td>
    <td>{{ (product.units * product.price).toFixed(2) }} €</td>
    <td>
      <button class="btn btn-secondary up" @click="upUnidades">
        <span class="material-icons">arrow_drop_up</span>
      </button>
      <button
        class="btn btn-secondary down"
        @click="downUnidades"
        :disabled="!product.units"
      >
        <span class="material-icons">arrow_drop_down</span>
      </button>
      <button class="btn btn-secondary edit" @click="edit" >
        <span class="material-icons">edit</span>
      </button>
      <button class="btn btn-secondary delete" @click="eliminarProduct">
        <span class="material-icons">delete</span>
      </button>
    </td>
  </tr>
</template>

<script>
import API from "../services/API";
export default {
  props: ["product"],
  methods: {
    eliminarProduct() {
      API.products.delete(this.product.id);
    },
    upUnidades() {
      let newProduct = {
        id: this.product.id,
        name: this.product.name,
        units: this.product.units + 1,
        price: this.product.price,
      };
      API.products.modify(newProduct);
    },
    downUnidades() {
      let newProduct = {
        id: this.product.id,
        name: this.product.name,
        units: this.product.units - 1,
        price: this.product.price,
      };
      API.products.modify(newProduct);
    },
    edit(){
      this.$router.push({ name: 'FormEdit', params: { id: this.product.id }})
    }
  },
};
</script>