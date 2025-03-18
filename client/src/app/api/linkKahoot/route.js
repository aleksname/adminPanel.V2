import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',  
    database: 'assessment_db',
    password: '1234',
    port: 5432,
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return new Response(
        JSON.stringify({ message: 'Посилання не передано' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const queryText = `
      INSERT INTO global_Links (id, url)
      VALUES (1, $1)
      ON CONFLICT (id) DO UPDATE 
      SET url = EXCLUDED.url,
          created_at = CURRENT_TIMESTAMP;
    `;
    await pool.query(queryText, [url]);

    return new Response(
      JSON.stringify({ message: 'Посилання збережено', url }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Помилка при оновленні посилання:', error);
    return new Response(
      JSON.stringify({ message: 'Помилка сервера' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}