import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, deletePost } from '../actions'
import CommentsShow from './comments_show'
import CommentsNew from './comment_new'
import { Auth } from './auth'

class PostsShow extends Component {
  componentDidMount () {

    const {id} = this.props.match.params
    this.props.fetchPost(id)
  }

  onDeleteClick () {
    const {id} = this.props.match.params

    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render () {

    const {post} = this.props

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        { (post.user._id === Auth.id() ) ?
          <div className="d-block text-right">
          <Link
          className="btn fcc-btn btn-info btn-sm m-r-5"
          to={`/posts/${post._id}/edit`}>
          Edit Post
          </Link>
          <button
          className="btn fcc-btn btn-danger btn-sm"
          onClick={this.onDeleteClick.bind(this)}
          >
          Delete Post
          </button>
          </div>
          : null
        }

        <div className="">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>

        <div className="comment-new">
          <CommentsNew postID={post._id}/>
        </div>

        <div>
          <strong>Comments:</strong>
          <div>
            <CommentsShow post_id={post._id}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({posts}, ownProps) {
  return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow)
