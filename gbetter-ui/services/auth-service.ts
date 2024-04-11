import { BaseService } from "./common/base-service";

export class UserService extends BaseService {
  constructor() {
    super("auth");
  }
  Login(data: any) {
    return this.client.Post(`${this.baseUrl}/login`, data);
  }
  Register(data: any) {
    return this.client.Post(`${this.baseUrl}/register`, data);
  }
  GetLoggedInUser() {
    return this.client.Get(`${this.baseUrl}/loggedInUser`);
  }
}
