import { UserData } from "../entity/userEntity"

interface Dependency {
    signupUserUsecase: Function
}

export const signupUserControllerFactory = ({ signupUserUsecase }: Dependency ) => {
    return async function signupUserController({body, ...source}: any) {

        const newUser = await signupUserUsecase({body}) 
        console.log(newUser)
  
        return {
            statusCode: 201,
            body: newUser 
        }
    }  
}