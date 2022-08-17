import express from 'express';
import { paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes,
    paginaDetalleViaje
 } from '../controller/paginasController.js';
 import {guardarTestimonial} from '../controller/testimonialController.js';
 

const router = express.Router();



router.get('/', paginaInicio);
router.get('/viajes',paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales',guardarTestimonial);
router.get('/nosotros', paginaNosotros );

export default router;