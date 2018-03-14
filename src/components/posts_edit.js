import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { editPost, fetchPost } from '../actions'
import { Auth } from './auth'

class PostsEdit extends Component {

  constructor (props) {
    super(props)

    this.state = {
      initForm: false
    }

    const {id} = this.props.match.params
    this.props.fetchPost(id, () => this.props.initialize({title: this.props.post.title, content: this.props.post.content}))
  }

  componentDidMount () {


  }

  componentWillReceiveProps (nextProps) {
    if (!this.state.initForm) {
      this.setState({initForm: true})
      this.props.initialize({title: nextProps.post.title, content: nextProps.post.content})
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
            ? <textarea className="form-control post-edit-content" {...field.input} ></textarea>
            : <input className="form-control" type="text" {...field.input} />
        }

        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit (values) {
    values.user_id = Auth.id()
    values.id = this.props.post._id
    this.props.editPost(values, () => {
      this.props.history.push('/')
    })
  }

  render () {

    const {handleSubmit, post} = this.props

    if (!post) {
      return <div></div>
    }

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <Field label="Tiêu đề bài viết" name="title" component={this.renderField} defaultValue={this.props.post.title} />

        <Field
          label="Nội dung"
          name="content"
          textarea={true}
          defaultValue={this.props.post.content}
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
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default reduxForm({
  validate,
  form: 'PostsEditForm'
})(connect(mapStateToProps, {editPost, fetchPost})(PostsEdit))
