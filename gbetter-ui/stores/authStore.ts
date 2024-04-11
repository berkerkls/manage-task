import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => {
    return {
      token: "",
    };
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
    getToken() {
      return this.token
        ? this.token
        : process.client && JSON.parse(localStorage.getItem("token") as string);
    },
  },
});
