import React from 'react';
import { Table } from 'react-bootstrap';

const Table1 = () => {
  const stu = [
    {
      S_No: "1",
      Studentid: "2688",
      Roll_No: "22RUCSA001",
      Student_Name: "ABINAYA M",
      Section: "II Year III Sem A",
      DOB: "05-10-2005 (17)",
      Address: "17_4/1 SOUTH ANJUKUDIRUPPU, Thengamputhoor-629602",
      Blood_Group: "O+ve",
      Mobile_Number: "82206 47653"
    },
    {
      S_No: "2",
      Studentid: "2602",
      Roll_No: "22RUCSA002",
      Student_Name: "ABINAYA R",
      Section: "II Year III Sem A",
      DOB: "13-11-2004 (18)",
      Address: "80/76 RAMAMOORTHY NAGAR, DHARPPURAM, TIRUPUR-633661",
      Blood_Group: "B+ve",
      Mobile_Number: "8778636441"
    },
    {
      S_No: "3",
      Studentid: "2703",
      Roll_No: "22RUCSA003",
      Student_Name: "ABISH R",
      Blood_Group: "B+ve",
      Mobile_Number: "7092373996"
    },
    {
      S_No: "4",
      Studentid: "2714",
      Roll_No: "22RUCSA004",
      Student_Name: "ABISH S",
      Blood_Group: "O-ve",
      Mobile_Number: "93845 69903"
    }
  ];

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center mb-3 text-primary">Student Contact Details</h3>
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>S_No</th>
              <th>Stu ID</th>
              <th>Student Name</th>
              <th>Mobile Number</th>
              <th>Blood Group</th>
            </tr>
          </thead>
          <tbody>
            {stu.map((mem) => (
              <tr key={mem.S_No}>
                <td>{mem.S_No}</td>
                <td>{mem.Studentid}</td>
                <td>{mem.Student_Name}</td>
                <td>{mem.Mobile_Number}</td>
                <td>{mem.Blood_Group}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Table1;
