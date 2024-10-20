import React, { useEffect, useState } from 'react';
import { Meteor } from 'meteor/meteor';

const App = () => {
  const [flaskData, setFlaskData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Meteor.call('fetchFlaskData', (error, result) => {
      if (error) {
        console.error("Error calling Flask API:", error);
        setLoading(false);
      } else {
        setFlaskData(result);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div>
      <h1>Welcome to the Meteor App</h1>

      {loading ? <p>Loading Flask API data...</p> : null}
      {flaskData ? (
        <div>
          <h2>Data from Flask API:</h2>
          <p>{flaskData.message}</p>
        </div>
      ) : (
        !loading && <p>No data received from Flask API</p>
      )}
    </div>
  );
};

export default App;
