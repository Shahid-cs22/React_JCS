import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const AsyncFun = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);



    const fetchData = async () => {
        setLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await res.json();
            setData(json.slice(0, 11));
        } catch (error) {
            console.error("Error Fetching:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <p className="text-center pt-60 font-bold ">Loading...</p>;


    return (
        <div className="p-10">
            <h1 className="text-xl font-bold mb-5 space-x-2">Posts</h1> 

            <Table striped bordered hover >
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pas) => (
                        <tr key={pas.id}>
                            <td >{pas.id}</td>
                            <td>{pas.title}</td>
                            <td>{pas.body}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AsyncFun;
