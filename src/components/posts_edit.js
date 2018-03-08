import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost, fetchPost } from '../actions'

class PostsEdit extends Component {

  componentWillMount () {
    const {id} = this.props.match.params
    this.props.fetchPost(id)
  }

  renderField (field) {
    const {value, textarea, meta: {touched, error}} = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    console.log(field);
    return (
      <div className={className}>
        <label>{field.label}</label>
        {
          textarea
            ? <textarea {...field.input} className="form-control post-edit-content"></textarea>
            : <input className="form-control" type="text" {...field.input} />
        }

        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit (values) {
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render () {

    const {handleSubmit, post} = this.props

    if (!post) {
      return <div></div>
    }

    this.props.initialize({title: post.title, content: post.content});

    console.log(post);
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <Field label="Tiêu đề bài viết" name="title" component={this.renderField}/>

        <Field
          label="Nội dung"
          name="content"
          textarea={true}
          component={this.renderField}
        />
        <button type="submit" className="btn fcc-btn btn-primary">Đăng bài</button>
        <Link to="/" className="btn fcc-btn btn-danger">Hủy</Link>
      </form>
    )
  }
}

function validate (values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {}

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = 'Tiêu đề không được trống'
  }
  if (!values.content) {
    errors.content = 'Nội dung không được trống'
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors
}

function mapStateToProps ({posts}, ownProps) {
  return {post: posts[ownProps.match.params.id]}
}

export default reduxForm({
  validate,
  form: 'PostsEditForm'
})(connect(mapStateToProps, {createPost, fetchPost})(PostsEdit))
