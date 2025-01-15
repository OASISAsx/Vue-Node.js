<template>
  <div class="sign-in">
    <!-- Sign In Form Column -->
    <a-card style="align-items: center; justify-content: center; width: 499px">
      <template #title> <h1 class="font-bold text-2xl">Sign In</h1></template>

      <h5 class="font-regular text-muted">
        Enter your email and password to sign in
      </h5>

      <!-- Sign In Form -->
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit.prevent="login"
        :hideRequiredMark="true"
      >
        <a-form-item class="mb-10" :colon="false">
          <b>username</b>
          <a-input
            v-decorator="[
              'Username',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="username"
            v-model:value="formValues.username"
          />
        </a-form-item>
        <a-form-item class="mb-5" :colon="false">
          <b>Password</b>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
            v-model:value="formValues.password"
          />
        </a-form-item>
        <a-form-item class="mb-10">
          <a-switch v-model="rememberMe" /> Remember Me
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            block
            html-type="submit"
            class="login-form-button"
          >
            SIGN IN
          </a-button>
        </a-form-item>
      </a-form>
      <!-- / Sign In Form -->

      <p class="font-semibold text-muted">
        Don't have an account?
        <router-link :to="{ name: 'sign-up' }">Sign Up</router-link>
      </p>
    </a-card>
  </div>
</template>

<script>
import router from "@/router";
import { message } from "ant-design-vue";
import axios from "axios";

export default {
  data() {
    return {
      formValues: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API}/login`, {
          username: this.formValues.username, // ใช้ข้อมูลจาก formValues
          password: this.formValues.password,
        });
        const token = response.data.token;
        const user = response.data.user;
        // Save token to localStorage
        localStorage.setItem("authtoken", token);
        // Convert user object to string before saving it in localStorage
        localStorage.setItem("user", JSON.stringify(user));
        if (response.status === 200) {
          router.push("/login");
        window.location.reload();
       await message.success("ล็อกอินสำเร็จ")
        }
       
        // Redirect after successful login
       
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
  height: 930px; /* ใช้เพื่อให้คอนเทนเนอร์สูงเต็มหน้าจอ */
  background-color: #f5f5f5; /* เพิ่มพื้นหลังเพื่อความชัดเจน */
}
</style>
