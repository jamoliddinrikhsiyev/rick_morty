DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
    id SERIAL PRIMARY KEY NOT NULL,
    name text NOT NULL,
    data jsonb NOT NULL
);

INSERT INTO characters (name, data) VALUES(
    'Toxic Rick',
    '{
        "id": 361,
        "name": "Toxic Rick",
        "status": "Dead",
        "species": "Humanoid",
        "type": "Ricks Toxic Side",
        "gender": "Male"
    }'
);