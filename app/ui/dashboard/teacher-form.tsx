'use client';

import { useState } from 'react';

export default function TeacherForm() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    grade: '',
    address: '',
    birthday: '',
    status: 'active',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí puedes agregar la lógica para enviar los datos al backend o actualizar el estado global
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-gray-50 p-6 shadow-md">
      <h2 className="text-lg font-semibold">Add New Teacher</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleChange}
          className="rounded-md border-gray-300 p-2"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="rounded-md border-gray-300 p-2"
          required
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          className="rounded-md border-gray-300 p-2"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          className="rounded-md border-gray-300 p-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="rounded-md border-gray-300 p-2"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="rounded-md border-gray-300 p-2"
          required
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
          className="rounded-md border-gray-300 p-2"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="rounded-md border-gray-300 p-2"
          required
        />
        <input
          type="date"
          name="birthday"
          placeholder="Birthday"
          value={formData.birthday}
          onChange={handleChange}
          className="rounded-md border-gray-300 p-2"
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="rounded-md border-gray-300 p-2"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}