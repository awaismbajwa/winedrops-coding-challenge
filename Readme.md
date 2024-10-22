# Winedrops Best selling wine

## Technical details

- To run the backend just do `cd backend && yarn dev`
  - The backend is using `fastify`
- The frontend is React
  - To run the frontend do `cd frontend && yarn dev`
- To start complete project backend and frontend working together, go to backend and run 'yarn start'

## Database schema

- A few important things about the data model
- The same wine can be sold at different prices
  - For example, `Château Montclair` is sold both at £40.26 and £40.76
- That's why we have two separate tables `master_wine` and `wine_product`
  - `master_wine` contains the basic information about the wine - its name and vintage
  - and `wine_product` is `master_wine` plus a price we sell it at
  - `wine_product` does have the `name` field, but its for our own convenince rather than for showing it to the user

```sql
create table master_wine (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  vintage NUMBER
);

create table wine_product (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  master_wine_id INTEGER,
  name TEXT,
  price DECIMAL,
  FOREIGN KEY (master_wine_id) REFERENCES master_wine (id)
);

create table customer_order (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  wine_product_id INTEGER,
  quantity INTEGER,
  total_amount DECIMAL,
  status TEXT,
  FOREIGN KEY (wine_product_id) REFERENCES wine_product (id)
);
```
