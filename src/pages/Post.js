import React, { useEffect, useState } from 'react';
import PostReactions from '../components/posts/postPage/PostReactions';
import Navbar from '../components/navbar/Navbar';
import PostContent from '../components/posts/postPage/PostContent';
import PostUser from '../components/posts/postPage/PostUser';
import Axios from 'axios';

const Post = (props) => {
  const postId = props.match.params.post_id;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await Axios.get('https://dev.to/api/articles/' + postId).then((res) =>
        setPost(res.data)
      );
    };
    fetchData();
  }, [postId]);

  return (
    <>
      <Navbar />
      {post ? (
        <div className='container-fluid row mt-3'>
          <div className='col-1 d-md-block d-none'>
            <PostReactions post={post} />
          </div>
          <div className='col-lg-8 col-md-11'>
            <PostContent post={post} />
          </div>
          <div className='col-3 d-lg-block d-none'>
            <PostUser post={post} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Post;
