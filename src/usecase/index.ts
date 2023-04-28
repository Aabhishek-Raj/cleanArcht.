import { signupUserUsecaseFactory } from "./signupUserUsecase"
import { userEntity } from "../entity"




const signupUserUsecase = signupUserUsecaseFactory({ userEntity })

export { signupUserUsecase }