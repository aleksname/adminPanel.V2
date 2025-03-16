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
        const result = await pool.query('SELECT user_name, group_name FROM user_groups');
        // console.log(result.rows);
        return new Response(JSON.stringify(result.rows), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        console.log('Error:', err);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
