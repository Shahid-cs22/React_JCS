import React from 'react'
import { Table } from 'react-bootstrap'

const Tables = () => {

    const students = [
        {
            id: '4001',
            name: 'Shahid',
            age: '21'
        },
        {
            id: '4002',
            name: 'Kumar',
            age: '22'
        },
        {
            id: '4003',
            name: 'Dinesh',
            age: '20'
        }
    ];


    return (
        <>
            <div className="">
                <Table bordered>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>

                    {
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                            </tr>
                        ))
                    }
                </Table>
            </div>

        </>
    )
}

export default Tables