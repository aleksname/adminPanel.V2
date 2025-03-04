import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'assessment_db',
  password: '1234',
  port: 5432,
});

export default async function handler(req, res) {
  // if (req.method !== 'POST') {
  //   return res.status(405).json({ error: "Метод не дозволений" });
  // }

  const { userId, groupIds } = req.body;
  if (!userId || !groupIds || !groupIds.length) {
    return res.status(400).json({ error: "Неправильні дані" });
  }

  try {
    const insertQuery = `
      INSERT INTO user_groups (user_id, group_id)
      VALUES ${groupIds.map((_, i) => `($1, $${i + 2})`).join(", ")}
      ON CONFLICT DO NOTHING;
    `;

    await pool.query(insertQuery, [userId, ...groupIds]);

    res.status(200).json({ message: "Користувача додано у групи!" });
  } catch (error) {
    console.error("Помилка БД:", error);
    res.status(500).json({ error: "Не вдалося зберегти в БД" });
  }
}
