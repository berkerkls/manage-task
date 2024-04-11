export class HttpClient {
  //   store = useAuthStore();

  Get(url: string) {
    return $fetch(url, {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json",
        // Authorization: "Bearer " + this.store.getUserToken() ?? "",
      }),
    });
  }
  Post(url: string, data: any) {
    return $fetch(url, {
      method: "POST",
      body: data,
      headers: new Headers({
        "Content-type": "application/json",
        // Authorization: "Bearer " + this.store.getUserToken() ?? "",
      }),
    });
  }
  Put(url: string, data: any) {
    return $fetch(url, {
      method: "PUT",
      body: data,
      headers: new Headers({
        "Content-type": "application/json",
        // Authorization: "Bearer " + this.store.getUserToken() ?? "",
      }),
    });
  }
  Delete(url: string) {
    return $fetch(url, {
      method: "DELETE",
      headers: new Headers({
        "Content-type": "application/json",
        // Authorization: "Bearer " + this.store.getUserToken() ?? "",
      }),
    });
  }
}
