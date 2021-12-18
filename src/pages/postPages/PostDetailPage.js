import { Divider } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddCommentForm } from "../../components/Comment/AddCommentForm";
import { PostDetail } from "../../components/PostDetail/PostDetail";
import "./PostDetailPage.css";
import { threads } from "../../dummydata/posts";

const PostDetailPage = (props) => {
  const { country, postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const thread = threads.filter((item) => item.threadId == country);
    const posts = thread[0].posts;
    const tpost = posts.filter((item) => item.id == postId);
    setPost(tpost[0]);
  }, []);

  return (
    <div
      style={{
        padding: "10px"
      }}>
      {post && (
        <PostDetail
          {...post}
          content={post.description}
        />
      )}
      <Divider>BÌNH LUẬN</Divider>
      <AddCommentForm />
    </div>
  );
};
export default PostDetailPage;
