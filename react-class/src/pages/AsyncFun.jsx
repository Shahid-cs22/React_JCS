import React, { useEffect, useState } from 'react'
import { Row, Col, Table } from 'react-bootstrap';

const AsyncFun = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');

            const json = await res.json()
            setData(json)
        } catch (error) {
            console.error("Error Fetching:", error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    if (loading) return <p className='text-center pt-5 font-bold'>Loading...</p>

    return (
        <>
            <div className="p-10">
                <h1 className="text-xl font-bold mb-5">post</h1>
                <ul className='space-y-2'>
                    {data.map((post) => (
                        <li key={post.id} className='p-2 border rounded-2xl'>
                            <div className="">
                                <Table>
                                    <Row>
                                        <Col>
                                            {post.title}
                                        </Col>
                                    </Row>
                                </Table>
                            </div>
                        </li>
                    ))}


                </ul>
            </div>
        </>
    )
}

export default AsyncFun