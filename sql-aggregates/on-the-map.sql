SELECT "countries"."name" as "country",
      COUNT(*) as "cities"
  FROM "countries"
  JOIN "cities" USING ("countryId")
  GROUP BY "countries"."name";
