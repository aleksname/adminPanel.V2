import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "assessment_db",
  password: "1234",
  port: 5432,
});

export async function GET() {
  try {
    const res = await pool.query('SELECT id, name FROM groups'); 
    return new Response(JSON.stringify(res.rows), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error fetching groups:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch groups" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
