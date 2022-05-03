import request from 'supertest';
import app from '../app';

const appRequest = request(app);

afterEach(() => {
  app.removeAllListeners();
});
test('GET for home route returns right message', async () => {
  const response = await appRequest.get('/');
  expect(response.body).toEqual({ message: 'OK' });
});
