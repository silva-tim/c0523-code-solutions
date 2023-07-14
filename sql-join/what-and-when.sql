SELECT "films"."releaseYear",
       "genres"."name" as "genre"
  FROM "films"
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId")
  WHERE "films"."title" = 'Boogie Amelie';
