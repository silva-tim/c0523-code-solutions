SELECT "addresses"."line1",
       "cities"."name",
       "addresses"."district",
       "countries"."name"
  FROM "addresses"
  JOIN "cities" USING ("cityId")
  JOIN "countries" USING ("countryId");
