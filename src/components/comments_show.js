import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../actions";

class CommentsShow extends Component {
  componentWillMount() {

    this.props.fetchComments(this.props.post_id);
  }


  render() {
    
    const { comments } = this.props;

    if (!comments.length) {
      return <div></div>;
    }

    return (

      <div>
          {
            comments.map(comment => (
              <div key={comment._id}>- {comment.content}</div>
            ))
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps, { fetchComments })(CommentsShow);
