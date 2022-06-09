const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Amp = require('../lib/models/Amp');

describe('amp routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/amps should return the list of amps and values', async () => {
    const res = await request(app).get('/amps');
    const amps = await Amp.getAll();
    const expected = amps.map((amp) => {
      return { id: amp.id, name: amp.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/amps/:id should return single amp detail', async () => {
    const res = await request(app).get('/amps/5');
    const traynor = {
      id: 5,
      name: 'YSR-1 Custom Reverb',
      manufacturer: 'Traynor',
      year_released: 1968,
      watts: 45,
      reissued: false,
    };
    expect(res.body).toEqual(traynor);
  });
  afterAll(() => {
    pool.end();
  });
});
