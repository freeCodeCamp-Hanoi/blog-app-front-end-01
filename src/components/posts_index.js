import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }
  
  renderPosts () {

    function cutString(text) {
      return text.substring(0, 100) + ' ...';
    }

    function convertDate(d) {
      const date = new Date(Date.parse(d));
      const localStyleDate = date.toLocaleDateString();
      return localStyleDate; 
    }

    return _.map(this.props.posts, post => {

      const postPreview = cutString(post.content);
      const postCreatedAt = convertDate(post.createdAt);

      return (
        <div className="row" key={post._id}>
          <div className="col-md-12">
            <div className="article">
              <h2><Link to={`/posts/${post._id}`} className="title">{post.title}</Link></h2>
              <div className="description">
                <p> {postPreview}</p>
              </div>
              <div className="meta">
              {/* Written by <a href="" className="author">{post.author.name}</a> */}
              <span>Viết ngày {postCreatedAt}</span>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render () {

    
    return (
      <div>
          <div className='text-xs-right'>
            <Link className='btn btn-primary fcc-btn' to='/posts/new'>
              Viết bài
            </Link>
          </div>

          <div className="article-list">
            {this.renderPosts()}
          </div>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
