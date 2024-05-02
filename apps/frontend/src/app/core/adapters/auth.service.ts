import { Injectable } from "@angular/core";
import { AuthRepository } from "../../domain/ports/driven/auth.repository";
import { ApiResponse } from "../../domain/api/api-response.interface";
import { User, UserAuth } from "../../domain/models/user.interface";

@Injectable()
export class AuthenticationService implements AuthRepository {
    register(newUser: User): Promise<ApiResponse<void>> {
        throw new Error("Method not implemented.");
    }
    login(user: UserAuth): Promise<ApiResponse<string>> {
        throw new Error("Method not implemented.");
    }
}