import { Meteor } from 'meteor/meteor';
import fetch from 'node-fetch';

Meteor.methods({
    'fetchFlaskData'() {
        try {
            const resp = fetch('http://localhost:5000/api/data')
                        .then(res => res.json())
                        .then(data => {
                            return data;
                        });
            return resp;
        } catch (error) {
            throw new Meteor.Error('flask-api-error', 'Error fetching data from Flask API');
        }
    }
});
