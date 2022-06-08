-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists amps; 

CREATE table amps (
  id INT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  manufacturer VARCHAR NOT NULL,
  year_released INT NOT NULL,
  watts INT NOT NULL,
  reissued BOOLEAN
);

INSERT INTO amps (name, manufacturer, year_released, watts, reissued) VALUES

('Twin Reverb', 'Fender', 1963, 85, true),

('Super Lead', 'Marshall', 1959, 100, true),

('OR120', 'Orange', 1972, 120, false),

('AC30', 'Vox', 1958, 30, true),

('YSR-1 Custom Reverb', 'Traynor', 1968, 45, false),

('JC50', 'Roland', 1980, 50, false);
