import { ApiResponse } from "../api/api-response.interface";
import { UserRegistration } from "../models/user.interface";
import { Token } from "../ports/driven/auth.repository";

export class RegisterUserUseCase {
    constructor(private _authRepository: RegisterUserUseCase) {}
    
    async registerUser(user: UserRegistration): Promise<ApiResponse<boolean>> {
        return this._authRepository.registerUser(user);
    }

    async login(email: string, pwd: string): Promise<ApiResponse<Token>> {
        return this._authRepository.login(email, pwd);
    }
}