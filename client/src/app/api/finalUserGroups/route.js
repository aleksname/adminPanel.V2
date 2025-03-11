import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',  
    database: 'assessment_db',
    password: '1234',
    port: 5432,
})

export async function GET() {
    try {
        const response = await pool.query('SELECT user_name, group_name from user_groups')
        return (JSON.stringify(response.rows), {status: 200, headers: {"content-Type": "application/json"}})
    } catch (err) {
        console.log(err)    
    }
    
}