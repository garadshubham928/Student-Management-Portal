import React, { useState } from 'react';

const AddStudentForm = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [studentClass, setStudentClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ id: Date.now(), name, age, class: studentClass });
    setName('');
    setAge('');
    setStudentClass('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Class"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
