
import { Request, Response, NextFunction } from 'express'

const controller = {
	index: (req: Request, res: Response) => {
		res
			.type('text/html')
			.send('<h1>prueba</h1>')
	}, 
	home: (req: Request, res: Response) => {
		res
			// .sendFile(`${__dirname}/home.html`)
			.render('home', {
				tituloPagina: 'Home'
			})
	}, 
	about: (req: Request, res: Response) => {
		res
			.render('about', {
				tituloPagina: req.query.titulo
			})
	}
}

export { controller }
