import express from 'express';
import HomeController from '~/controllers/home.controller';

export default express.Router().get('/', HomeController.sendHelloMessage);
