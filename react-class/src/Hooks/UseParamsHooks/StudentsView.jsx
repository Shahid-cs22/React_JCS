import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { stu } from '../../../SMCE-CSE-2022'
import { Button, Table } from 'react-bootstrap'

const StudentsView = () => {
  const { id } = useParams();
  const naviParams = useNavigate();

  const goToUseParams = () => {
    naviParams('/useparams');
  };


  const toPrint = () => {
    window.print();
  };

  const stud = stu.find((data) => data.id === Number(id));

  if (!stud) {
    return <h2 className='text-center mt-4'>Student not found ❌</h2>;
  }

  return (
    <div className="container mt-5">
      <h2 className='text-center mb-4 text-primary'>Student Details</h2>

      <Table bordered striped hover responsive variant="dark" className="shadow-lg">
        <tbody>
          <tr>
            <th>Student ID</th>
            <td>{stud.Studentid}</td>
          </tr>
          <tr>
            <th>Roll No</th>
            <td>{stud.Roll_No}</td>
          </tr>
          <tr>
            <th>Student Name</th>
            <td>{stud.Student_Name}</td>
          </tr>
          <tr>
            <th>Date Of Birth</th>
            <td>{stud.DOB}</td>
          </tr>
          <tr>
            <th>Blood Group</th>
            <td>{stud.Blood_Group}</td>
          </tr>
          <tr>
            <th>Mobile Number</th>
            <td>{stud.Mobile_Number}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{stud.Address}</td>
          </tr>
        </tbody>
      </Table>

      
      <div className="text-center mt-3">
        <Button
          variant="warning"
          onClick={goToUseParams}
          className="px-4 fw-bold shadow"
        >
          Back to Students List
        </Button>
        <Button
          variant="success"
          onClick={toPrint} 
          className="px-4 mx-2 fw-bold shadow"
        >
          Print it
        </Button>
      </div>
    </div>
  );
};

export default StudentsView;
