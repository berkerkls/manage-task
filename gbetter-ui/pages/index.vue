<template>
  <div class="hero flex justify-center items-center h-full">
    <div class="hero-content flex-col-reverse lg:flex-row-reverse">
      <div class="card flex-1 shrink-0 shadow-2xl bg-base-100">
        <div class="card shrink-0 shadow-1xl bg-base-100">
          <form @submit.prevent="signUp" class="card-body">
            <div class="form-control" v-for="(item, index) in signupFormInputs">
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
              />
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary text-white">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex-1 text-center lg:text-left">
        <h1 class="text-5xl font-bold">
          Be organized and plan your
          <span class="text-primary">tasks</span>.
        </h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { signupFormInputs } from "~/data/contants";
import { AuthService } from "../services/auth-service";
import { useAuthStore } from "../stores/authStore";

definePageMeta({
  layout: "landing",
});

const signupCommand = ref({ fullName: "", email: "", password: "" });
const authService = new AuthService();
const authStore = new useAuthStore();
const router = useRouter();

const signUp = () => {
  signupFormInputs.map((item) => {
    if (Object.keys(signupCommand.value).includes(item.key)) {
      signupCommand.value[item.key] = item.value;
    }
  });
  authService
    .Register(signupCommand)
    .then((res) => {
      if (res.success) {
        authStore.setToken(res.token);
        router.push({ name: "dasboard" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
