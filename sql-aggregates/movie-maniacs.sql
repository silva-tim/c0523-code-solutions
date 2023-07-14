SELECT "customers"."firstName",
       "customers"."lastName",
       sum("payments"."amount") as "totalSpent"
  FROM "customers"
  JOIN "payments" USING ("customerId")
  GROUP BY "customers"."customerId"
  ORDER BY "totalSpent" desc;
