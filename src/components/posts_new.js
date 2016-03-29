import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { createPost } from '../actions/index';
import FieldComponent from './field';

class PostsNew extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    this.props.createPost(props)
      .then(() => {
        this.context.router.push("/");
      });
  }


  render(){
    const { fields: {title, categories, content}, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <h3>Create A new Post</h3>
      <FieldComponent type={title} />
      <FieldComponent type={categories} />
      <FieldComponent type={content} />

      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.categories) {
    errors.categories = "Enter a categories";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

