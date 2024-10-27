// src/App.js
import React, { useState } from 'react';
import './App.css';  // Import the stylesheet
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';
import EditStudentForm from './components/EditStudentForm';
import ReactPaginate from 'react-paginate';
import studentData from './data/students.json';

const App = () => {
  const [students, setStudents] = useState(studentData);  // Initialize with JSON data
  const [searchQuery, setSearchQuery] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [filterAge, setFilterAge] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const studentsPerPage = 5;

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterClass ? student.class === filterClass : true) &&
      (filterAge ? student.age.toString() === filterAge : true)
    );
  });

  const paginatedStudents = filteredStudents.slice(
    currentPage * studentsPerPage,
    (currentPage + 1) * studentsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const editStudent = (updatedStudent) => {
    setStudents(
      students.map((student) => (student.id === updatedStudent.id ? updatedStudent : student))
    );
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const clearSelection = () => {
    setSelectedStudent(null);
  };

  return (
    <div>
      <h1>Student Management Portal</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filter
        filterClass={filterClass}
        setFilterClass={setFilterClass}
        filterAge={filterAge}
        setFilterAge={setFilterAge}
      />

      {selectedStudent ? (
        <EditStudentForm
          selectedStudent={selectedStudent}
          editStudent={editStudent}
          clearSelection={clearSelection}
        />
      ) : (
        <AddStudentForm addStudent={addStudent} />
      )}

      <StudentList
        students={paginatedStudents}
        onEdit={setSelectedStudent}
        onDelete={deleteStudent}
      />

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(filteredStudents.length / studentsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default App;
