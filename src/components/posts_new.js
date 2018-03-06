import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
            <label>Tiêu đề bài viết: </label>
            <div>
                <Field name="title" component={this.renderField} />
            </div>
        </div>
        
        <Field
          label="Nội dung"
          name="content"
          component={this.renderField}
        />

        <Field
          label="ID của người dùng"
          name="user_id"
          value="5a71d47f50c7ca4ca878ba43"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Đăng bài</button>
        <Link to="/" className="btn btn-danger">Hủy</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Tiêu đề không được trống";
  }
  if (!values.content) {
    errors.content = "Nội dung không được trống";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
