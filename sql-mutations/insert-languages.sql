INSERT INTO "languages" ("name")
VALUES ('HTML'),
       ('JavaScript'),
       ('CSS')
RETURNING *;
