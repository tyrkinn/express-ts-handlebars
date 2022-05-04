import { Response, Request } from 'express';

export default class HomeController {
  static sendHelloMessage(_: Request, res: Response) {
    res.render('index');
  }
}
