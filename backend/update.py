import pandas as pd
import sqlite3

CSV_PATH = "./data.csv"
SQL_TABLE = "api_produto"

df = pd.read_csv(CSV_PATH)

df.reset_index(inplace=True)
df.rename(columns={"index": "id"}, inplace=True)
df["id"] += 1

with sqlite3.connect("db.sqlite3") as conn:
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        price REAL
    )
    """)

    print("Populando tabela...")
    df.to_sql(SQL_TABLE, conn, if_exists="replace", index=False)
    print("Tabela populada com sucesso.")