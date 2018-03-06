import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchComments } from "../actions";

class CommentsShow extends Component {
  componentDidMount() {

    this.props.fetchComments(this.props.post_id);
  }


  render() {
    
    const { comments } = this.props;

    // console.log(comments);

    if (!comments) {
      return <div></div>;
    }


    return (
      <div>
        <p>{comments.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { comments: state };
}

export default connect(mapStateToProps, { fetchComments })(CommentsShow);
