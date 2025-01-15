<template>
  <div class="sign-in">
    <a-card style="align-items: center; justify-content: center; width: 399px">
      <template #title>
        <h5 class="font-semibold text-center">Register With</h5>
      </template>
      <div class="sign-up-gateways"></div>
      <p class="text-center my-25 font-semibold text-muted">Or</p>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit.prevent="handleSubmit"
      >
        <a-form-item class="mb-10">
          <a-input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: 'Please input your name!' }],
              },
            ]"
            placeholder="Name"
            v-model:value="formValues.username"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10">
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  { required: true, message: 'Please input your email!' },
                ],
              },
            ]"
            placeholder="Email"
            v-model:value="formValues.email"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-5">
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
            v-model:value="formValues.password"
          >
          </a-input>
        </a-form-item>
        <a-form-item class="mb-10">
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            I agree the
            <a href="#" class="font-bold text-dark">Terms and Conditions</a>
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            block
            html-type="submit"
            class="login-form-button"
          >
            SIGN UP
          </a-button>
        </a-form-item>
      </a-form>
      <p class="font-semibold text-muted text-center">
        Already have an account?
        <router-link to="/sign-in" class="font-bold text-dark"
          >Sign In</router-link
        >
      </p>
    </a-card>
    <!-- / Sign Up Form -->
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      formValues: {
        username: "",
        password: "",
        email: "",
      },
    };
  },

  methods: {
    // Handles input validation after submission.
    async handleSubmit() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API}/register`,
          {
            username: this.formValues.username, // ใช้ข้อมูลจาก formValues
            password: this.formValues.password,
            email: this.formValues.email,
          }
        );
        if (response.status === 200) {
          router.push("/login");
          await message.success("ลงทะเบียนสำเร็จ");
        }

        // Redirect or do something else after successful login
      } catch (error) {
        console.error(error);
        // Handle login error
      }
    },
  },
};
</script>

<style scoped>
.sign-in {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; /* ใช้เพื่อให้คอนเทนเนอร์สูงเต็มหน้าจอ */
  background-color: #f5f5f5; /* เพิ่มพื้นหลังเพื่อความชัดเจน */
}
</style>
