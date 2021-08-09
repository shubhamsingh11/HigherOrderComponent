import React from 'react';

import WithData from '../with-data/with-data';

const UserProfile = ({data , name , email}) => (
        <div className="container">
            <h1>User Profile</h1>
            {data.map(data => <div >
                <h1> {data.name} </h1>
                <h2> {data.email} </h2>
            </div>)
            }
        </div>
    )

export default WithData(UserProfile , 'https://jsonplaceholder.typicode.com/users') ;