import { Teacher } from './definitions';

// Simulación de una base de datos en memoria
let teachers: Teacher[] = [];

// Create: Agregar un nuevo profesor
export function createTeacher(teacher: Teacher): Teacher {
  teachers.push(teacher);
  return teacher;
}

// Read: Obtener todos los profesores
export function getAllTeachers(): Teacher[] {
  return teachers;
}

// Read: Obtener un profesor por ID
export function getTeacherById(id: string): Teacher | undefined {
  return teachers.find((teacher) => teacher.id === id);
}

// Update: Actualizar un profesor por ID
export function updateTeacher(id: string, updatedData: Partial<Teacher>): Teacher | undefined {
  const teacherIndex = teachers.findIndex((teacher) => teacher.id === id);
  if (teacherIndex === -1) return undefined;

  teachers[teacherIndex] = { ...teachers[teacherIndex], ...updatedData };
  return teachers[teacherIndex];
}

// Delete: Eliminar un profesor por ID
export function deleteTeacher(id: string): boolean {
  const initialLength = teachers.length;
  teachers = teachers.filter((teacher) => teacher.id !== id);
  return teachers.length < initialLength;
}