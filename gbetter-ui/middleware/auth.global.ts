import { useAuthStore } from "#imports";

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const store = useAuthStore();
    store.$state.token =
      JSON.parse(localStorage.getItem("token") as string) ?? "";
    const authRoutes = ["/dashboard", "/single-tasks", "/roadmaps"];
    if (!store.$state.token && authRoutes.includes(to.fullPath)) {
      return navigateTo("/");
    }
    if (store.$state.token && !authRoutes.includes(to.fullPath)) {
      return navigateTo("/dashboard");
    }
  }
});
