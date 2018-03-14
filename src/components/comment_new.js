import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createComment } from '../actions'
import { Auth } from './auth'

class CommentsNew extends Component {

  constructor (props) {
    super(props)
    this.state = {
      submitted: false
    }
  }

  renderField (field) {
    const {textarea, meta: {touched, error}} = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

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
    values.comment_authorID = Auth.id()
    values.comment_postID = this.props.postID
    console.log(this.props.history)
    this.props.createComment(values, () => {
      window.location.href = `/posts/${this.props.postID}`
    })

    this.setState({submitted: true})
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
