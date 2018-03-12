import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createComment } from '../actions'

class CommentsNew extends Component {

  renderField (field) {
    const {textarea, meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        {
          textarea
            ? <textarea {...field.input} className="form-control post-edit-content"></textarea>
            : <input className="form-control" type="text" {...field.input} />
        }

      </div>
    )
  }

  onSubmit (values) {
      values.comment_authorID = '5a7823c2f89e483df52dcac9';
      values.comment_postID = this.props.postID;
      console.log(this.props.history);
    this.props.createComment(values, () => {
      window.location.href = `/posts/${this.props.postID}`
    })
  }

  render () {
    const {handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <Field
          label="Write your comment:"
          name="comment_content"
          textarea={true}
          component={this.renderField}
        />

        <button type="submit" className="btn fcc-btn btn-primary">Submit</button>
        <Link to="/" className="btn fcc-btn btn-danger">Cancel</Link>
      </form>
    )
  }
}


export default reduxForm({
  form: 'CommentsNewForm'
})(connect(null, {createComment})(CommentsNew))
