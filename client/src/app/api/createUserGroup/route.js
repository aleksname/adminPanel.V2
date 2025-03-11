// pages/api/createUserGroup.js
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'assessment_db',
  password: '1234',
  port: 5432,
});

// export async function POST(request) {
//   try {
//     const { userId, groupId } = await request.json();
//     const result = await pool.query(
//       'INSERT INTO user_groups (user_id, group_id) VALUES ($1, $2) RETURNING *',
//       [userId, groupId]
//     );
//     return new Response(JSON.stringify(result.rows[0]), { status: 200 });
//   } catch (error) {
//     console.error('Error inserting data:', error);
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }


export async function POST(request) {
  try {
    const { userId, groupId } = await request.json();
    
    const userResult = await pool.query('SELECT name FROM users WHERE id = $1', [userId]);
    const groupResult = await pool.query('SELECT name FROM groups WHERE id = $1', [groupId]);

    if (!userResult.rows.length || !groupResult.rows.length) {
      return new Response(JSON.stringify({ error: 'User or group not found' }), { status: 400 });
    }

    const userName = userResult.rows[0].name;
    const groupName = groupResult.rows[0].name;

    await pool.query(
      'INSERT INTO user_groups (user_id, group_id, user_name, group_name) VALUES ($1, $2, $3, $4)',
      [userId, groupId, userName, groupName]
    );

    return new Response(JSON.stringify({ success: true, message: 'User group saved successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error saving user group:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}