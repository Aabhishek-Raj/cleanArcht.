import { Request, Response } from "express"

export function makeController(controller: Function) {
    return async (req: Request, res: Response) => {

        try {   
         
            const httpRequest = await {
                body: req.body, 
                query: req.query,
                params: req.params,
                method: req.method,
                path: req.path,
                headers: {
                    'Content-Type': req.get('Content-Type'),
                    Referer: req.get('referer'),
                    'User-Agent': req.get('User-Agent')
                }
            }
 
            const httpResponse = await controller(httpRequest)

            console.log('httpResponse ==>')
            console.log(httpResponse)

            if(httpResponse.headers) {
                res.set(httpResponse.headers) 
            }

            res.status(httpResponse.statusCode).send(httpResponse.body)

        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'An error has occured'})   
        }
    }
}