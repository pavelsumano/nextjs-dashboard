import { db } from "@vercel/postgres";

const client = await db.connect();

// Función para insertar un nuevo profesor en la base de datos
async function createTeacher(teacher: {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  grade: string;
  address: string;
  birthday: string;
  status: string;
  schoolar_id: string;
}) {
  const query = `INSERT INTO teachers (id, name, first_name, last_name, email, phone, grade, address, birthday, status, schoolar_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;`;

  const values = [
    teacher.id,
    teacher.name,
    teacher.first_name,
    teacher.last_name,
    teacher.email,
    teacher.phone,
    teacher.grade,
    teacher.address,
    teacher.birthday,
    teacher.status,
    teacher.schoolar_id,
  ];

  const result = await client.sql`
    INSERT INTO teachers (id, name, first_name, last_name, email, phone, grade, address, birthday, status, schoolar_id)
    VALUES (${teacher.id}, ${teacher.name}, ${teacher.first_name}, ${teacher.last_name}, ${teacher.email}, ${teacher.phone}, ${teacher.grade}, ${teacher.address}, ${teacher.birthday}, ${teacher.status}, ${teacher.schoolar_id})
    RETURNING *;
  `;
  return result.rows[0];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newTeacher = await createTeacher(body);

    return new Response(JSON.stringify(newTeacher), { status: 201 });
  } catch (error) {
    console.error("Error creating teacher:", error);
    return new Response(JSON.stringify({ error: "Failed to create teacher" }), { status: 500 });
  }
}