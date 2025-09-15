 const Joi = require("joi");

module.exports.listingSchema = Joi.object({
   listing: Joi.object({
     title: Joi.string().trim().required().messages({
       "string.empty": "Title is required",
     }),
     description: Joi.string().trim().required().messages({
       "string.empty": "Description is required",
     }),
     location: Joi.string().trim().required().messages({
       "string.empty": "Location is required",
     }),
     country: Joi.string().trim().required().min(1).messages({
       "string.empty": "Country is required",
       "string.min": "Country must not be empty",
     }),
     price: Joi.number().positive().required().messages({
       "number.base": "Price must be a number",
       "number.positive": "Price must be greater than zero",
       "any.required": "Price is required",
     }),
     image: Joi.string().uri().allow("", null).messages({
       "string.uri": "Image must be a valid URL",
     }),
   }).required().messages({
     "any.required": "Listing object is required",
   }),
 });
 
module.exports.reviewSchema  = Joi.object( {
  review : Joi.object({
    rating : Joi.number().required().min(0).max(5),
    comment : Joi.string().required()
  }).required()
})