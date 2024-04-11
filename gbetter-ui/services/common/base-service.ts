import { HttpClient } from "./http-client";

export class BaseService {
  baseUrl = "/";
  public client: HttpClient;
  constructor(baseUrl = "") {
    this.baseUrl += baseUrl;
    this.client = new HttpClient();
  }
}
