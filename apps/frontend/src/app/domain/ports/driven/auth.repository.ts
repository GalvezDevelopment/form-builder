import { ApiResponse } from "../../api/api-response.interface";
import { User, UserAuth } from "../../models/user.interface";

export type Token = string;

export interface RegisterUserRepository {
    register(newUser: User): Promise<ApiResponse<void>>;
    login(user: UserAuth): Promise<ApiResponse<Token>>;
}