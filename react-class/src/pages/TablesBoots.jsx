import React from 'react'
import { Table } from 'react-bootstrap'
import { stu } from '../../SMCE-CSE-2022'

const TablesBoots = () => {
  return (
    <>
      <Table bordered striped hover responsive variant="dark" className="text-center align-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student ID</th>
            <th>Reg No</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Phone No</th>
            <th>Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {stu.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.Studentid}</td>
              <td>{student.Roll_No}</td>
              <td>{student.Student_Name}</td>
              <td>{student.DOB}</td>             
              <td>{student.Mobile_Number}</td>
              <td>{student.Blood_Group}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default TablesBoots
