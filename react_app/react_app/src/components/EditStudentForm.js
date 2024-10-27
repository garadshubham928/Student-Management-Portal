import React, { useState, useEffect } from 'react';

const EditStudentForm = ({ selectedStudent, editStudent, clearSelection }) => {
  const [name, setName] = useState(selectedStudent.name);
  const [age, setAge] = useState(selectedStudent.age);
  const [studentClass, setStudentClass] = useState(selectedStudent.class);

  const handleSubmit = (e) => {
    e.preventDefault();
    editStudent({ ...selectedStudent, name, age, class: studentClass });
    clearSelection();
  };

  useEffect(() => {
    setName(selectedStudent.name);
    setAge(selectedStudent.age);
    setStudentClass(selectedStudent.class);
  }, [selectedStudent]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Class" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={clearSelection}>Cancel</button>
    </form>
  );
};

export default EditStudentForm;
