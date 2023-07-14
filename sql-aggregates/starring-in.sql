SELECT "genres"."name" as "genre",
       count(*)
  FROM "films"
  JOIN "filmGenre" USING ("filmId")
  JOIN "genres" USING ("genreId")
  JOIN "castMembers" USING ("filmId")
  JOIN "actors" USING ("actorId")
  WHERE ("actors"."firstName" = 'Lisa') AND ("actors"."lastName" = 'Monroe')
  GROUP BY ("genres"."name");
