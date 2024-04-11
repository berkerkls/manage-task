import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => {
    return {
      token: "",
    };
  },
  getters: {
    getToken(state) {
      return state.token
        ? state.token
        : process.client && JSON.parse(localStorage.getItem("token") as string);
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      localStorage.setItem("token", JSON.stringify(token));
    },
    logout() {
      this.token = "";
      localStorage.removeItem("token");
    },
  },
});
