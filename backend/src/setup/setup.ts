import { sql } from "../connections/sql";

async function setup() {
  await sql`
    create table if not exists orders(
      id      serial   primary key,
      flavor  text,
      price numeric,
      quantity integer,
      pizzaType text,
      pagamentMethod text,
      address text,
      order_date timestamp default current_timestamp
    )
  `

  await sql.end()
}

setup()