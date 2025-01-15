<template>
  <div class="form-input">
    <div class="inputs">
      <div style="background: #ececec; padding: 30px">
        <a-card title="Create Page" :bordered="false" style="width: 500px">
          <a-form
            :model="fromdata"
            @submit.prevent="createData"
    
          >
            <a-form-item label="Name">
              <a-input
                v-model:value="fromdata.product_name"
                placeholder="Enter product name"
              />
            </a-form-item>
            <a-form-item label="Product Image">
              <a-input
                v-model:value="fromdata.product_img"
                placeholder="Enter product image URL"
              />
            </a-form-item>
            <a-form-item label="Price">
              <a-input
                v-model:value="fromdata.price"
                type="number"
                placeholder="Enter product price"
              />
            </a-form-item>
            <a-form-item label="Description">
              <a-input
                v-model:value="fromdata.description"
                placeholder="Enter product description"
              />
            </a-form-item>
            <a-form-item label="Product Type">
              <a-input
                v-model:value="fromdata.product_type"
                placeholder="Enter product type"
              />
            </a-form-item>
          </a-form>
        </a-card>
      </div>
      <!-- Display image preview if exists -->
      <div v-if="preview_img" class="image-preview">
        <img :src="preview_img" alt="Selected Image" width="100" />
      </div>
      <a-button
        type="primary"
        @click="createData"
        class="submit"
      >
        Submit
      </a-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  name: "create",

  data() {
    return {
      fromdata: {
        product_name: "",
        product_img: "",
        price: "",
        description: "",
        product_type: "",
      },
      preview_img: "",
    };
  },
  methods: {
    createData() {
      const token = localStorage.getItem("authtoken");
      const formData = new FormData();
      formData.append("product_name", this.fromdata.product_name || "");
      formData.append("product_img", this.fromdata.product_img || "");
      formData.append("price", this.fromdata.price || "");
      formData.append("description", this.fromdata.description || "");
      formData.append("product_type", this.fromdata.product_type || "");

      axios
        .post(`${import.meta.env.VITE_API}/product`, formData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            router.push("/about");
          }
          console.log(res.status);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onFileChanged(e) {
      const files = e.target.files;
      if (files.length > 0) {
        const selectFile = files[0];
        this.fromdata.Profile = selectFile;
        this.preview_img = URL.createObjectURL(selectFile);
      }
    },
  },
};
</script>

<style scoped>
.form-input {
  width: 50%;
  background: #505050;
  padding: 40px;
  position: relative;
  color: black;
  border-radius: 4px;
}

.inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.submit {
  margin-top: 20px;
  width: 150px;
}

.image-preview {
  margin-top: 20px;
  text-align: center;
}
</style>
