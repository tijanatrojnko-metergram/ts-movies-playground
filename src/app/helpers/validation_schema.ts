const Joi = require("joi");

export const valSchema = Joi.object({
  Title: Joi.string(),

  Year: Joi.number().min(1900).max(2022),
  
  Released: Joi.date(),

  imdbID: Joi.string().pattern(
    new RegExp("/evd{7}/d{4}(-d)?|(ch|co|ev|nm|tt)d{7}/")
  ),

  runtime: Joi.number(),
        
  imdbRating: Joi.number().min(1).max(10),
        
  imdbVotes: Joi.number(),
});

