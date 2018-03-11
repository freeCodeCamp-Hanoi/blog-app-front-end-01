import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersShow extends Component {
  componentWillMount() {

    this.props.fetchUsers();
  }


  render() {
    
    const { users } = this.props;
    console.log(users);

    if (!users.length) {
      return <div></div>;
    }

    return (
      <div>
            {users.data[0].username}
      </div>
    );
  }
}

// 

function mapStateToProps(state) {
  // console.log(state.users);
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UsersShow);
