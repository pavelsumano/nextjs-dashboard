// app/teachers/new/page.tsx
import TeacherForm from '@/app/ui/dashboard/teacher-form';

export default function TeacherPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Agregar Nuevo Profesor</h1>
      <TeacherForm />
    </div>
  );
}
