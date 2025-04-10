import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',  
    database: 'assessment_db',
    password: '1234',
    port: 5432,
});

export async function PUT(request) {
  try { 
    const body = await request.json();
    const { url } = body;

    const result = await pool.query('UPDATE global_links SET url = $1', [url])
      return new Response(JSON.stringify({ message: 'Посилання оновлено', rows: result.rows }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  catch (err) {
    console.error(err)
  }
}