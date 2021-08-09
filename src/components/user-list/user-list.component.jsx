import React from 'react';

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data : []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({data: data.slice(0,3)}))
    }

    render() {
        return (
        <div className="container user-list">
        <h1> User Posts </h1>
                {this.state.data.map(data => <div className="post">
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                </div>)
                }
        </div>
    )
}
}

export default UserList;