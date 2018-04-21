
import * as http from 'http'
import * as fs from 'fs'

const servidor = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    const metodo = req.method
    
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end(metodo)
  }
)

servidor.listen(4000, () => console.log('Server ready!'))
