import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],    // Array to hold student data
  selectedStudent: null,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(student => student.id === action.payload.id);
      if (index >= 0) {
        state.students[index] = action.payload;
      }
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
    setSelectedStudent: (state, action) => {
      state.selectedStudent = action.payload;
    },
  },
});

export const { addStudent, updateStudent, deleteStudent, setSelectedStudent } = studentSlice.actions;
export default studentSlice.reducer;
