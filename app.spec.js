const app = require('./app');
const request = require('supertest');

describe('route root', ()=> {
  test('should return Hello message', async ()=>{
    const response = await request(app.callback()).get('/');
    expect(response.status).toEqual(200);
    expect(response.text.toLowerCase()).toEqual('hello koa!');
  });
});
