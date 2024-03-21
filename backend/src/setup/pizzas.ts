import { sql } from "../connections/sql";

async function setup() {
  await sql`
    create table if not exists pizzas(
      id      serial   primary key,
      flavor  text,
      price numeric,
      quantity integer,
      pizzaType text
    )
  `

  await sql.end()
}

setup()