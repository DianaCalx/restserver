import express from "express"
import cors from "cors"
import { router } from "../routes/usuarios.js"

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.usuariosPath = '/api/usuarios';

    //Middlewares
    this.middlewares();

    //Rutas
    this.routes();
  }

  middlewares() {

    //cors
    this.app.use(cors())

    // Lectura y Parseo del Body
    this.app.use(express.json())

    //Directorio publico
    this.app.use(express.static('public'))
  }

  routes() {

    this.app.use(this.usuariosPath, router)

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port)
    })
  }

}
