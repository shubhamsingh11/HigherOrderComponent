import React from 'react';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data : []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => this.setState({data: data.slice(0,3)}))
    }

    render() {
        return (
        <div className="container">
        <h1>User Profile</h1> 
                {this.state.data.map(data => <div >
                    <h1> {data.name} </h1>
                    <h2> {data.email } </h2>
                </div>)
                }
        </div>
    )
}
}

export default UserProfile;