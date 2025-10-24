import React from "react";
const CardDetail = ({ stu }) => {
  return (
    <>
      <div>
        <div className="student-deta">Students Details</div>

        {stu.map((p) => (
          <div key={p.S_No}>
            <p>{p.Student_Name}</p>
            <p>{p.Roll_No}</p>
            <Link to={`/CardStudents/${p.S_No}`}>View Details</Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default CardDetail;