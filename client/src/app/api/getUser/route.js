// import { Pool } from 'pg';

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'assessment_db',
//   password: '1234',
//   port: 5432,
// });

// export  async function handler(req, res) {
//     const result = await pool.query('SELECT email FROM users WHERE id=1');
//     res.status(200).json(result.rows);

//   } 
  
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'assessment_db',
  password: '1234',
  port: 5432,
});

export async function GET() {
  try {
    const result = await pool.query('SELECT id,name FROM users');
    return Response.json(result.rows, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Database error', details: error.message }, { status: 500 });
  }
}
