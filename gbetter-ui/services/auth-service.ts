import { BaseService } from "./common/base-service";

export class UserService extends BaseService {
  constructor() {
    super("auth");
  }
  Login(data: any) {
    return this.client.Add(`${this.baseUrl}/login`, data);
  }
}
