export interface UserData {
    user: string
    password: string
}

export const userEntityFactory = () => {
    
    return async function userEntity({ user, password }: any) {
        
        if(!user) {
            throw new Error('user is needed')
        }
        if(!password) {
            throw new Error('password is needed')
        }

        return Object.freeze({
            getUser: () => user,
            getPassword: () => password
        })
    }
}