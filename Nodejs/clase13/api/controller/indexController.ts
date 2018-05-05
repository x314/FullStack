
import { Request, Response, NextFunction } from 'express'

const controller = {
  home: (req: Request, res: Response) => {
    res.render('home')
  }
}

export { controller }
