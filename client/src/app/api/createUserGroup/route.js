// pages/api/createUserGroup.js
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
    const { group_name,  user_name} = body
  
    await pool.query(
      'INSERT INTO user_groups ( user_name, group_name) VALUES ($1, $2)',
      [user_name, group_name]
    );

    return new Response(JSON.stringify({ success: true, message: 'User group saved successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error saving user group:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}