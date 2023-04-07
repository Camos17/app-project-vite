import React, {useState, useEffect} from 'react';

const ListEmail = () => {

    const [vector, setVector] = useState([]);

    const getApiData = async () => {
        
        const apiData = await fetch('https://jsonplaceholder.typicode.com/comments');
        let parsedData = await apiData.json();
        console.log('parsedData', parsedData);
        parsedData = parsedData.map((obj: any) => <li>{obj.email}</li>);
        setVector(parsedData);
    };

    useEffect(() => {
        getApiData();
    });

    return(
        <div>
            <ul>
                {/* {vector.map((obj: any) => <li>{obj.email}</li>)} */}
                {vector}
            </ul>
        </div>
    );


}

export default ListEmail;