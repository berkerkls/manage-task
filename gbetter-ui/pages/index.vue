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
          Start to achive your <span class="text-primary">goals</span> today!
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
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";

definePageMeta({
  layout: "landing",
});

const signupCommand = ref({ fullName: "", email: "", password: "" });

const signupFormInputs = [
  {
    icon: faUser,
    key: "fullName",
    value: "",
    placeholder: "* Name",
    labelName: "Name",
    type: "text",
    isRequired: true,
    isValid: false,
    class: "grow",
  },
  {
    icon: faEnvelope,
    key: "email",
    value: "",
    placeholder: "Email",
    labelName: "Email",
    type: "text",
    isRequired: true,
    isValid: false,
    class: "grow",
  },
  {
    icon: faKey,
    key: "password",
    value: "",
    placeholder: "Password",
    labelName: "Password",
    type: "password",
    isRequired: true,
    isValid: false,
    class: "grow",
  },
];

const signUp = () => {
  signupFormInputs.map((item) => {
    if (Object.keys(signupCommand.value).includes(item.key)) {
      console.log(item.value, "sss");
      signupCommand.value[item.key] = item.value;
    }
  });
  console.log(signupCommand.value, "command");
};
</script>
