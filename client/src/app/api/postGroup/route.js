import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "assessment_db",
  password: "1234",
  port: 5432,
});

export async function POST(req) {
  try {
    const body = await req.json(); 
    const { name } = body;

    const result = await pool.query(
      "INSERT INTO groups (name) VALUES($1) RETURNING *",
      [name]
    );

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
  }
}
