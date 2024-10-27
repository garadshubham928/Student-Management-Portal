import React, { useState } from 'react';
import studentsData from '../studentsData';

const StudentPortal = () => {
    const [students, setStudents] = useState(studentsData);

    return (
        <div>
            <h1>Student Management Portal</h1>
            {/* Render Student Data */}
            {students.map(student => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <p>Email: {student.email}</p>
                    <p>Class: {student.class}</p>
                    <p>Phone: {student.phone}</p>
                    {/* Add more fields as needed */}
                </div>
            ))}
        </div>
    );
};

export default StudentPortal;
