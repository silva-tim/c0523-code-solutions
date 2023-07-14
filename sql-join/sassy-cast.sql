SELECT "actors"."firstName",
       "actors"."lastName"
  FROM "actors"
  JOIN "castMembers" USING ("actorId")
  JOIN "films" USING ("filmId")
  WHERE "films"."title" = 'Jersey Sassy';
