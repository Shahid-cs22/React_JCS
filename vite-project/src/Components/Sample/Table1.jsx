import React from 'react';
import { Table } from 'react-bootstrap';

const Table1 = () => {
  const stu = [
  
  {
    S_No: "20",
    Studentid: "2693",
    Roll_No: "22RUCSA020",
    Student_Name: "BENNYHINN SAM  T",
    Section: "II Year III Sem  A",
    DOB: "18-04-2005 (18)",
    Address: "17/91c1\npunnavilai\nKALLUKOOTAM-629802",
    Blood_Group: "B+ve",
    Mobile_Number: "89038 33649"
  },
  {
    S_No: "21",
    Studentid: "2673",
    Roll_No: "22RUCSA021",
    Student_Name: "BHARATH KANTH  R.N",
    Section: "II Year III Sem  A",
    DOB: "23-09-2004 (19)",
    Address: "9/118B\nEEEZHAMANYANKUZHI\nmonday market-629802",
    Blood_Group: "B+ve",
    Mobile_Number: "85258 62283"
  },
  {
    S_No: "22",
    Studentid: "2689",
    Roll_No: "22RUCSA022",
    Student_Name: "BIJO ANNAN  B",
    Section: "II Year III Sem  A",
    DOB: "09-12-2004 (18)",
    Address: "1022\nCHETTIVILAI\nTHOZHICODE-629157",
    Blood_Group: "A+ve",
    Mobile_Number: "8778109684"
  },
  {
    S_No: "23",
    Studentid: "2715",
    Roll_No: "22RUCSA023",
    Student_Name: "CHRISTOBHA  T",
    Section: "II Year III Sem  A",
    DOB: "01-01-2005 (18)",
    Address: "13-22\nr.c.street\nMEKKAMANDAPAM-629166",
    Blood_Group: "B+ve",
    Mobile_Number: "99523 14034"
  },
  {
    S_No: "24",
    Studentid: "2690",
    Roll_No: "22RUCSA024",
    Student_Name: "FRANCINA RAJ   J",
    Section: "II Year III Sem  A",
    DOB: "24-01-2005 (18)",
    Address: "2/43 D\nanbiyam -5\nramanthurai-629193",
    Blood_Group: "B+ve",
    Mobile_Number: "97912 55410"
  },
  {
    S_No: "25",
    Studentid: "2686",
    Roll_No: "22RUCSA025",
    Student_Name: "FREEDA JOSE  B",
    Section: "II Year III Sem  A",
    DOB: "04-06-2004 (19)",
    Address: "6_10/53\nvictor colony\nmelmidalam-629178",
    Blood_Group: "O+ve",
    Mobile_Number: "95851 44709"
  },
  {
    S_No: "33",
    Studentid: "2702",
    Roll_No: "22RUCSA034",
    Student_Name: "LIBIN RAJ  F",
    Section: "II Year III Sem  A",
    DOB: "02-10-2004 (19)",
    Address: "9-22-5\nezhuthinavilai\nalanchi-629158",
    Blood_Group: "B+ve",
    Mobile_Number: "95787 85064"
  },
  {
    S_No: "34",
    Studentid: "2696",
    Roll_No: "22RUCSA035",
    Student_Name: "LIGIN  M",
    Section: "II Year III Sem  A",
    DOB: "25-11-2004 (18)",
    Address: "14/49-1\nKANNAKURICHI\nkeezhavoor-629502",
    Blood_Group: "O+ve",
    Mobile_Number: "77089 27228"
  },
  {
    S_No: "35",
    Studentid: "2675",
    Roll_No: "22RUCSA036",
    Student_Name: "LUXICA BENCY  G.K",
    Section: "II Year III Sem  A",
    DOB: "01-07-2005 (18)",
    Address: "7/96 A\nBency garden\nMylacode-629802",
    Blood_Group: "A1+ve",
    Mobile_Number: "99942 46665"
  },
  {
    S_No: "36",
    Studentid: "2687",
    Roll_No: "22RUCSA037",
    Student_Name: "MAHA LAKSHMI  G",
    Section: "II Year III Sem  A",
    DOB: "31-01-2005 (18)",
    Address: "13/95\nPANIKANKUDIERUPPU\nThengamputhoor-629602",
    Blood_Group: "B+ve",
    Mobile_Number: "96886 14837"
  },
  {
    S_No: "37",
    Studentid: "2671",
    Roll_No: "22RUCSA038",
    Student_Name: "MARIA BENSIYA  S",
    Section: "II Year III Sem  A",
    DOB: "25-12-2003 (19)",
    Address: "69\nPATTARIYAR LONG STREET\nNAGERCOIL-629002",
    Blood_Group: "B+ve",
    Mobile_Number: "99946 15011"
  },
  {
    S_No: "38",
    Studentid: "2667",
    Roll_No: "22RUCSA039",
    Student_Name: "MAXWELL RUBERT  B",
    Section: "II Year III Sem  A",
    DOB: "10-07-2004 (19)",
    Address: "3-61\nFATHIMA STREET\nKadiapattanam, Kanyakumari District-629253",
    Blood_Group: "B+ve",
    Mobile_Number: "93444 54248"
  },
  {
    S_No: "39",
    Studentid: "2725",
    Roll_No: "22RUCSA040",
    Student_Name: "MICHAL NITHESH  S",
    Section: "II Year III Sem  A",
    DOB: "14-11-2004 (18)",
    Address: "106 A\nCHURCH STREET\nVETHA NAGER-629002",
    Blood_Group: "AB+ve",
    Mobile_Number: "7540024044"
  },
  {
    S_No: "40",
    Studentid: "2700",
    Roll_No: "22RUCSA041",
    Student_Name: "MUHAMED FATEEN  M",
    Section: "II Year III Sem  A",
    DOB: "21-07-2004 (19)",
    Address: "19/23H-2\nAATHIKATHAVILAI\nCHETTIYARMADAM-629802",
    Blood_Group: "A+ve",
    Mobile_Number: "98946 67174"
  },
  {
    S_No: "41",
    Studentid: "2669",
    Roll_No: "22RUCSA042",
    Student_Name: "NAVEENA  S",
    Section: "II Year III Sem  A",
    DOB: "04-03-2005 (18)",
    Address: "8/5\nAANDIVILLAI\nsouth thamaraikulam p/o-629704",
    Blood_Group: "B+ve",
    Mobile_Number: "93859 61571"
  },
  {
    S_No: "42",
    Studentid: "2713",
    Roll_No: "22RUCSA043",
    Student_Name: "NISHMI VINISHA  A.J",
    Section: "II Year III Sem  A",
    DOB: "13-10-2004 (18)",
    Address: "3/58 A\neast street\nnagercoil-629809",
    Blood_Group: "A1+ve",
    Mobile_Number: "8825697569"
  },
  {
    S_No: "43",
    Studentid: "2694",
    Roll_No: "22RUCSA044",
    Student_Name: "PRAVEEN  T.S",
    Section: "II Year III Sem  A",
    DOB: "12-07-2005 (18)",
    Address: "15/14 A\nNAINAPUTHOOR\nPALLAM POST-629601",
    Blood_Group: "O-ve",
    Mobile_Number: "99408 46946"
  },
  {
    S_No: "44",
    Studentid: "2722",
    Roll_No: "22RUCSA045",
    Student_Name: "PRIM SAJUN  P",
    Section: "II Year III Sem  A",
    DOB: "26-05-2004 (19)",
    Address: "10/132\nJEEVA JOTHI\nMIDALAM-629178",
    Blood_Group: "B+ve",
    Mobile_Number: "95003 52168"
  },
  {
    S_No: "45",
    Studentid: "2723",
    Roll_No: "22RUCSA046",
    Student_Name: "PRIYA DHARSHINI  S.A",
    Section: "II Year III Sem  A",
    DOB: "16-08-2004 (19)",
    Address: "25/54 A\nAMMANDIVILAI SOUTH\nAMMANDIVILAI-629204",
    Blood_Group: "A2+ve",
    Mobile_Number: "94865 60293"
  },
  {
    S_No: "46",
    Studentid: "2683",
    Roll_No: "22RUCSA047",
    Student_Name: "RAHUL  M",
    Section: "II Year III Sem  A",
    DOB: "14-03-2005 (18)",
    Address: "2/127\nkaruparai,keela street\nkalpady post-629204",
    Blood_Group: "O-ve",
    Mobile_Number: "89253 63875"
  },
  {
    S_No: "47",
    Studentid: "2724",
    Roll_No: "22RUCSA048",
    Student_Name: "RAJASARATHI  K",
    Section: "II Year III Sem  A",
    DOB: "30-11-2004 (18)",
    Address: "2/115\nOLD WELL STREET\nAYYANKOTTAI-624211",
    Blood_Group: "B+ve",
    Mobile_Number: "63859 46718"
  },
  {
    S_No: "48",
    Studentid: "2692",
    Roll_No: "22RUCSA049",
    Student_Name: "RESHMA  R",
    Section: "II Year III Sem  A",
    DOB: "31-05-2005 (18)",
    Address: "17/92 d\nkuruppuvilai\nKALLUKOOTTAM-629802",
    Blood_Group: "O+ve",
    Mobile_Number: "91509 46608"
  }
  ];

  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center mb-3 text-primary">Student Contact Details</h3>
        <Table striped bordered hover responsive >
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
