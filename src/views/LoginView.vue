<template>
  <div class="sign-in">
    <a-row type="flex" :gutter="[24, 24]" justify="space-around" align="middle">
      <!-- Sign In Form Column -->
      <a-col
        :span="24"
        :md="12"
        :lg="{ span: 12, offset: 0 }"
        :xl="{ span: 6, offset: 2 }"
        class="justify-center items-center"
      >
        <h1 class="mb-15 font-bold text-4xl">Sign In</h1>
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
          <router-link to="/sign-in" class="font-bold text-dark"
            >Sign Up</router-link
          >
        </p>
      </a-col>
      <!-- / Sign In Form Column -->

      <!-- Sign In Image Column -->
      <!-- <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
				<img src="images/img-signin.jpg" alt="">
			</a-col> -->
    </a-row>
  </div>
</template>

<script>
import router from "@/router";
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
        // Save token to localStorage
        localStorage.setItem("authtoken", token);
        router.push("/");
        window.location.reload();
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
  margin-top: 200px;
}
</style>
