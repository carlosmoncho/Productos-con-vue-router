<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-4">
      <form
        id="new-prod"
        class="hide"
        @submit.prevent="productInsert"
        @reset="reset2"
      >
        <fieldset>
          <legend>{{ this.tipoForm() }}</legend>
          <div class="form-group">
            <label for="newprod-name">id: </label>
            <input
              type="text"
              class="form-control"
              id="newprod-id"
              disabled
              v-model="newProduct.id"
            />
          </div>
          <div class="form-group">
            <label for="newprod-name">Nombre: </label>
            <input
              type="text"
              class="form-control"
              id="newprod-name"
              v-model="newProduct.name"
              required
            />
          </div>
          <div class="form-group">
            <label for="newprod-price">Price: </label>
            <input
              type="number"
              class="form-control"
              id="newprod-price"
              v-model.number="newProduct.price"
              required
              min="1"
            />
          </div>
          <div class="form-group">
            <label for="newprod-price">units: </label>
            <input
              type="number"
              class="form-control"
              id="newprod-units"
              v-model.number="newProduct.units"
              required
              min="1"
            />
          </div>
          <button type="submit" class="btn btn-default btn-primary">
            Añadir
          </button>
          <button type="reset" class="btn btn-secondary">Reset</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import API from "../services/API";
export default {
  name: "form",
  data() {
    return {
      newProduct: {},
      edit: false,
    };
  },
  methods: {
    productInsert() {
      if (this.edit) {
        try {
          API.products.modify(this.newProduct);
          this.$router.push("/");
        } catch (error) {
          console.error(error);
        }
      }else{
        API.products.create(this.newProduct);
        this.$router.push("/");
      }
    },
    tipoForm() {
      if (this.edit) {
        return "Edit Form";
      } else {
        return "Edit Porduct";
      }
    },
    async reset2() {
      if (this.edit) {
        let response = await API.products.getOne(this.$route.params.id);
        this.newProduct = response.data;
      }
    }
  },
  async mounted() {
    if (this.$route.params.id) {
      this.edit = true;
      let response = await API.products.getOne(this.$route.params.id);
      this.newProduct = response.data;
    }
  },
};
</script>