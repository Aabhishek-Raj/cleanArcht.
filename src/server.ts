import express, { json } from 'express'
import { router } from './routes/router'

const app: express.Application = express()

app.use(json())

app.get('/api/users', (req, res) => {
    res.send('Hello World')
}) 
 
app.use('/', router) 

app.listen(4000, () => {
    console.log('** Listening at Port 4000 **')
})

