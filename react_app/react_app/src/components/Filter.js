import React from 'react';

const Filter = ({ filterClass, setFilterClass, filterAge, setFilterAge }) => {
  return (
    <div>
      <select value={filterClass} onChange={(e) => setFilterClass(e.target.value)} style={{ padding: '10px', fontSize: '16px' }}>
        <option value="">All Classes</option>
        <option value="12th Grade">12th Grade</option>
        <option value="11th Grade">11th Grade</option>
        <option value="10th Grade">10th Grade</option>
        <option value="9th Grade">9th Grade</option>
        <option value="8th Grade">8th Grade</option>
        <option value="7th Grade">7th Grade</option>
        <option value="6th Grade">6th Grade</option>
        <option value="5th Grade">5th Grade</option>
        {/* Add more class options as needed */}
      </select>

      <select value={filterAge} onChange={(e) => setFilterAge(e.target.value)} style={{ padding: '10px', fontSize: '16px' }}>
        <option value="">All Ages</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        {/* Add more age options as needed */}
      </select>
    </div>
  );
};

export default Filter;
