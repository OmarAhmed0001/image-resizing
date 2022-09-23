import app from '../index';
import supertest from 'supertest';
import fs from 'fs';
const req = supertest(app);

describe('validations', () => {
  it('should detect negative dimentions', async () => {
    const res = await req.get('/resize/encenadaport.jpg/200/-300');
    expect(res.status).toBe(400);
  });

  it('should detect invalid dimentions', async () => {
    const res = await req.get('/resize/encenadaport.jpg/20a0/300');
    expect(res.status).toBe(400);
  });

  it('should detect invalid name', async () => {
    const res = await req.get('/resize/enceport.jpg/200/300');
    expect(res.status).toBe(400);
  });
});

describe('results and cash', () => {
  it('should test the resize endpoints response', async () => {
    const res = await req.get('/resize/encenadaport.jpg/200/300');
    expect(res.status).toBe(200);
  });

  it('should send image thumbnail', async () => {
    const res2 = await req.get('/resize/encenadaport.jpg/200/300');

    expect(res2.status).toBe(300);
  });
});

describe('Resize Function', () => {
  it('should detect the resized image in thumbnail folder', async () => {
    const res = await req.get('/resize/encenadaport.jpg/500/500');
    const check = fs.existsSync(`thumbnails/encenadaport-500-500.jpg`);
    expect(res).toBeTruthy();
    expect(check).toBeTruthy();
  });
});
