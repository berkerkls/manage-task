import { API_BASE } from "~/config/settings";
export class HttpClient {
  store = useAuthStore();

  Get(url: string) {
    return $fetch(`${API_BASE}${url}`, {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: `Bearer ${this.store.getToken() ?? ""}`,
      }),
    });
  }
  Post(url: string, data: any) {
    console.log("data", data);
    return $fetch(`${API_BASE}${url}`, {
      method: "POST",
      body: data,
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: `Bearer ${this.store.getToken() ?? ""}`,
      }),
    });
  }
  Put(url: string, data: any) {
    return $fetch(`${API_BASE}${url}`, {
      method: "PUT",
      body: data,
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: `Bearer ${this.store.getToken() ?? ""}`,
      }),
    });
  }
  Delete(url: string) {
    return $fetch(`${API_BASE}${url}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: `Bearer ${this.store.getToken() ?? ""}`,
      }),
    });
  }
}
