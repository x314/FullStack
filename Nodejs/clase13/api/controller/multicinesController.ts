
import { Request, Response, NextFunction } from 'express'
import { multicinesModel } from '../model/multicinesModel'

const controller = {
  listar: async (req: Request, res: Response) => {
    const registros = await multicinesModel.find()
      .catch(error => {
        console.log(error)
        res.send('Ocurrió un error')
      })
    res.render('listadoMulticines', { registros })

    // multicinesModel.find()
    //   .then(registros => {
    //     console.log(registros)
    //     res.render('listadoMulticines', { registros })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     res.send('Ocurrió un error')
    //   })
  }, 
  formulario: (req: Request, res: Response) => {
    res.render('editarMulticines', { titulo: 'Insertar' })
  }, 
  editar:  (req: Request, res: Response) => {
    multicinesModel.findOne({ _id: req.params.id })
      .then(registro => {
        res.render('editarMulticines', { titulo: 'Editar', registro })
      })
      .catch(error => {
        console.log('Ocurrió un error')
      })
  }, 
  insertar: (req: Request, res: Response) => {
    // console.log(req.body)
    // res.send('No implementado')
    const registro = new multicinesModel(req.body)
    registro.save()
      .then(() => {
        res.redirect('/multicines')
      })
      .catch(error => {
        console.log(error)
        res.send(error)
      })
  }, 
  actualizar: (req: Request, res: Response) => {
    // res.send('No implementado')
    multicinesModel.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect('/multicines')
      })
      .catch(error => {
        console.log(error)
        res.send(error)
      })
  }, 
  eliminar: (req: Request, res: Response) => {
    // res.send('No implementado')
    multicinesModel.findByIdAndRemove({ _id: req.params.id })
      .then(() => {
        res.redirect('/multicines')
      })
      .catch(error => {
        console.log(error)
        res.send(error)
      })  }, 
  detallar: (req: Request, res: Response) => {
    res.send('No implementado')
  }
}

export { controller }
