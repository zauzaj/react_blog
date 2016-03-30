import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component{
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  onDeleteClick(){
    this.props.deletePost(this.props.params.id).
      then(() => {
        this.content.router.push("/");
      });
  }

  render(){
    const {post} = this.props;
    if (!post) {
      return <div>Loading...</div>
    }
    return(
      <div>
        <button className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>

        <p>{post.content}</p>
        <br/>
        <Link to='/' className="btn btn-primary">Back to the list</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post }
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
