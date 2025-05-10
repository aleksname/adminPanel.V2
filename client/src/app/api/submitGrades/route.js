import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'assessment_db',
  password: '1234',
  port: 5432,
});

export async function POST(req) {
  try {
    const body = await req.json(); // [{ user_name, activity_score, ... }]
    const { lesson_id } = body;

    for (const entry of body.grades) {
      const userRes = await pool.query('SELECT id FROM users WHERE name = $1', [entry.user_name]);
      if (userRes.rows.length === 0) continue;

      const userId = userRes.rows[0].id;

      await pool.query(
        `INSERT INTO grades (user_id, lesson_id, attention_score, activity_score, kahoot_score)
         VALUES ($1, $2, $3, $4, $5)`,
        [userId, lesson_id, entry.attention_score, entry.activity_score, entry.kahoot_score]
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Error submitting grades:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
