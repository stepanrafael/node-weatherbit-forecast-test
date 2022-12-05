import { Request, Response } from 'express';
import Joi from 'joi';
import WeatherService from '../services/weather.service';
import CacheService from '../services/cache.service';

export default function(req: Request, res: Response, next: any) {
  const schema = Joi.object({
    'city': Joi.string().alphanum().min(3).max(30).required(),
    'country': Joi.string().alphanum().min(2).max(2).required()
  });
  
  const { error, value } = schema.validate(req.query);

  if (error) {
    res.status(400).send(error.details);
  } else {
    new WeatherService().getForecastDaily(value.city, value.country).then((result) => {
      new CacheService().set(req.url, result);
      res.status(200).json(result);
    }, (error) => {
      next(error.message);
      res.status(400).json(error.message);
    });
  }

};