import React from 'react'
import { useParams } from 'react-router-dom'

const CardStudents = ({ stu }) => {
  const { S_No } = useParams(); // Extracts the "S_No" value from the URL
  const student = stu.find((s) => s.S_No === S_No); // Finds that student

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <>
    <div style={{border:"1px solid red", width:"400px", height:"200px", margin:"auto",textAlign:"center", alignContent:"center", justifyContent:"center"}}>
      <h2>Student Details</h2>
      <p><strong>Student Name:</strong> {student.Student_Name}</p>
      <p><strong>Roll No:</strong> {student.Roll_No}</p>
      <p><strong>Roll No:</strong> {student.Blood_Group}</p>                                                 
      <p><strong>Roll No:</strong> {student.Mobile_Number}</p>                                                 
    </div>
    </> 
  );
};

export default CardStudents;
