import { UserData } from "../entity/userEntity"

export const signupUserUsecaseFactory = ({ userEntity }: any) => {

    return async function signupUserUsecase({ body }: any) {

        const user = await userEntity(body)
        
        return {
            user: user.getUser(),
            password: user.getPassword()
        }
    }
}