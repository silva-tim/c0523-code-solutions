SELECT "customers"."firstName",
       "customers"."lastName"
  FROM "customers"
  JOIN "rentals" USING ("customerId")
  JOIN "inventory" USING ("inventoryId")
  JOIN "films" USING ("filmId")
  WHERE "films"."title" = 'Magic Mallrats';
