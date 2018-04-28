
import { Request, Response, NextFunction } from 'express'

const listProducts = [
	{
		id: 1, 
		nombre: 'Jabón'
	}, 
	{
		id: 2, 
		nombre: 'Detergente'
	}, 
	{
		id: 3, 
		nombre: 'Shampoo'
	}, 
	{
		id: 1, 
		nombre: 'Acondicionador'
	}, 
	{
		id: 1, 
		nombre: 'PH'
	}
]

const controller = {
	listar: (req: Request, res: Response) => {
		res.render('products', {
			tituloPagina: 'List Products', 
			lista: listProducts
		})
	}, 
	agregar: (req: Request, res: Response) => {
		// res.json(req.body)
		const producto = {
			id: listProducts[listProducts.length - 1].id + 1, 
			nombre: req.body.nombre
		}
	
		listProducts.push(producto)
		res.redirect('/products')
	}
}

export { controller }
