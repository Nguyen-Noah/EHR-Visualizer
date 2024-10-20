import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';

const FlaskDataComponent = () => {
    const [flaskData, setFlaskData] = useState(null);

    useEffect(() => {
        Meteor.call('fetchFlaskData', (error, result) => {
            if (error) {
                console.error('Error calling Flask API', error);
            } else {
                setFlaskData(result);
            }
        });
    }, [])

    return (
        <div>
            <h1>Flask API Data</h1>
            {flaskData ? <p>{flaskData.message}</p> : <p>Loading...</p>}
        </div>
    );
};

export default FlaskDataComponent;