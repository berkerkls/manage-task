<template>
  <div class="flex justify-center items-center">
    <div class="card flex-1 shrink-0 shadow-2xl bg-base-100 max-w-3xl">
      <div class="w-full flex justify-between items-center">
        <label class="card-title text-primary p-8">Login to your account</label>
        <span class="text-primary text-center p-10"
          >You don't have any ? Let's
          <LinkItem
            class="btn btn-primary text-white w-24 h-4 ml-3"
            label="Sign up"
            href="/"
        /></span>
      </div>
      <div class="card shrink-0 max-w-3xl shadow-1xl bg-base-100">
        <form @submit.prevent="login" class="card-body">
          <div class="form-control" v-for="(item, index) in loginFormInputs">
            <SharedTextInput
              :key="index"
              v-model="item.value"
              :icon="item.icon"
              :class="item.class"
              :is-required="item.isRequired"
              :is-valid="item.isValid"
              :label-name="item.labelName"
              :placeholder="item.placeholder"
              :type="item.type"
              @isInputValid="
                (value) => (loginFormInputs[index].isValid = value)
              "
            />
          </div>
          <label class="label">
            <a href="#" class="label-text-alt text-primary link link-hover"
              >Forgot password?</a
            >
          </label>
          <div class="form-control mt-4">
            <button type="submit" class="btn btn-primary text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { loginFormInputs } from "~/data/contants";
import LinkItem from "~/components/shared/LinkItem.vue";
import { AuthService } from "~/services/auth-service";
import { useAuthStore } from "../../stores/authStore";
definePageMeta({
  layout: "landing",
});

const loginCommand = ref({ email: "", password: "" });
const authService = new AuthService();
const authStore = new useAuthStore();
const router = useRouter();

const login = () => {
  loginFormInputs.map((item) => {
    if (Object.keys(loginCommand.value).includes(item.key)) {
      loginCommand.value[item.key] = item.value;
    }
  });

  if (loginFormInputs.every((item) => item.isValid && item.value)) {
    authService.Login(loginCommand.value).then((res) => {
      if (res.success) {
        authStore.setToken(res.token);
        router.push({ name: "dashboard" });
      }
    });
  } else {
    console.log("not valid");
  }
};
</script>
