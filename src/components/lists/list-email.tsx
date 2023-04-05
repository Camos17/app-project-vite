import React, {useState, useEffect} from 'react';

const ListEmail = () => {

    const [vector, setVector] = useState([]);

    const getApiData = async () => {
        
        const apiData = await fetch('https://jsonplaceholder.typicode.com/comments');
        const parsedData = await apiData.json();
        console.log('parsedData', parsedData);
        setVector(parsedData);
    };

    useEffect(() => {
        getApiData();
    });

    return(
        <div>
            <ul>
                {vector.map((obj: any) => <li>{obj.email}</li>)}
            </ul>
        </div>
    );


}

export default ListEmail;