import { Request, Response, NextFunction } from 'express'
import passwordComplexity from 'joi-password-complexity'

function passwordMiddleware (request: Request, response: Response, next: NextFunction): void {
  const complexityOptions = {
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 2
  }

  const passValidate = passwordComplexity(complexityOptions, 'Senha').validate(request.body.password)

  if (passValidate.error) {
    response.status(402).json(passValidate.error.details)
  }

  next()
}

export default passwordMiddleware
