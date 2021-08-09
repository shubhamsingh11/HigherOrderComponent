import React from 'react';

import WithData from '../with-data/with-data';

const UserList = ({data}) => (
        <div className="container user-list">
        <h1> User Posts </h1>
                {data.map(data => <div className="post">
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                </div>)
                }
        </div>
    )

export default WithData(UserList);