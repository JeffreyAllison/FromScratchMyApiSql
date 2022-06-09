const pool = require('../utils/pool');
module.exports = class Amp {
  id;
  name;
  manufacturer;
  year_released;
  watts;
  reissued;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.manufacturer = row.manufacturer;
    this.year_released = row.year_released;
    this.watts = row.watts;
    this.reissued = row.reissued;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM amps;');
    return rows.map((row) => new Amp(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM amps WHERE id=$5;', [id]);
    if (!rows[0]) return null;

    return new Amp(rows[0]);
  }
};
