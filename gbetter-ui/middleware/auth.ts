import { useAuthStore } from "#imports";
const store = useAuthStore();

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    store.$state.token =
      JSON.parse(localStorage.getItem("token") as string) ?? "";
    const currentPath = to.fullPath;
    if (!store.$state.token && currentPath !== "/login") {
      return navigateTo("/hesabim");
    }
  }
});
