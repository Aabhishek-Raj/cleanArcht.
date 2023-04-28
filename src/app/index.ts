import { signupUserControllerFactory } from "./userController"
import { signupUserUsecase } from "../usecase"

const signupUserContoller = signupUserControllerFactory({signupUserUsecase})

export { signupUserContoller }