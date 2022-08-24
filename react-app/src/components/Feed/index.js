import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsThunk } from '../../store/post'
import "./Feed.css"
const Feed = () => {

  const posts = useSelector(state => Object.values(state.posts))

  const [commentContent, setCommentContent] = useState('');

  const updateComment = (e) => setCommentContent(e.target.value)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsThunk())
  }, [dispatch])

  const commentSubmit = (e, postId) => {
    e.preventDefault();
    console.log(postId)
    console.log('sdfjuohsdkjfhsjlkdhf')
    console.log('sdfjuohsdkjfhsjlkdhf')
    console.log('sdfjuohsdkjfhsjlkdhf')
    console.log('sdfjuohsdkjfhsjlkdhf')
    const data = {
      content: commentContent,
    }

  }
  return (
    <div className='feed'>
      {posts.map(post => (
        <div id={post.id} className='post-container'>
          <div className="post-top">
            <div className="user-post-info">
              {post.user.profile_image_url ? (
                <img className='user-post-image' src={post.user.profile_image_url} alt="" />

              ) : (
                <img src="https://img.icons8.com/plumpy/24/000000/user-male-circle.png" alt="Profile"/>

              )
            }
              <div>{post.user.username}</div>
            </div>
            <div className="user-post-options">
              <img src="https://img.icons8.com/fluency-systems-filled/24/000000/dots-loading.png" alt=""/>
            </div>
          </div>
          <div>
            <img className="post-image" src={post.image_url} alt="" />
          </div>
          <div className="post-mid">
            <div className="like-button">

            </div>
            <div className="comment-button">

            </div>
          </div>
          <div className="posts-likes">

          </div>
          <div className="post-user-caption">
            <div className='post-user-username'>{post.user.username}</div>
            <div>{post.caption}</div>
          </div>
          <div className="posts-comments">View all {post?.comments?.length} comment(s)</div>
          <div className="post-lower">
            <form action="" className="comment-form" onSubmit={(e) => commentSubmit(e, post.id)}>
              <input type="text"
                     value={commentContent}
                     onChange={updateComment}
                     placeholder='Add a comment' />
              <button type="submit">Post</button>
            </form>
          </div>
        </div>

      ))}
    </div>
  )
}

export default Feed
