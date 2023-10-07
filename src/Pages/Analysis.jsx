import React from 'react';
import '../App.css';
const TableExample = () => {
  // Sample data for the table
  const tableData = [
    { id: 1, topic: 'Correct Answers :', number: 9 },
    { id: 2, topic: 'Wrong Answers :', number: 1 },
    { id: 3, topic: 'Unanswered :', number: 1 },
    { id: 4, topic: 'Skipped:', number: 0 },
    { id: 4, topic: 'Out of time:', number: 0 },
    { id: 4, topic: 'Time used: ', number: '2:30' },
  ];
  const tableStyle = {
    border: '1px solid #D9D9D9', // Add a border to the table
    borderCollapse: 'collapse', // Collapse borders for a consistent look
    width: '90%', // Optionally set a width for the table
    marginInline: 'auto',
    marginLeft: '2rem',
    marginRight: '2rem',
    marginBottom : '2rem',
    fontFamily : 'Poppins'
    
  };

  const thStyle = {
    border: '1px solid #D9D9D9', // Add borders to table headers
    padding: '8px',
  };

  const tdStyle = {
    border: '1px solid #D9D9D9', // Add borders to table cells
    padding: '8px',
  };
  thStyle.borderRight = 'none';
  tdStyle.borderRight = 'none';
  tdStyle.borderLeft = 'none';
  return (
    <div>
      <table style={tableStyle}>
        <thead className='T-head'>
          <tr>
            <th style={thStyle}>Analysis</th>
          </tr>
        </thead>
        <tbody className='T-Body'>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td style={tdStyle}>{row.topic}</td>
              <td style={tdStyle}>{row.number}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableExample;