import express from 'express'
import { makeController } from '../libs/adapter'
import { signupUserContoller } from '../app'

const router = express()

router.post('/api/users/signup', makeController(signupUserContoller))
    
export { router }  