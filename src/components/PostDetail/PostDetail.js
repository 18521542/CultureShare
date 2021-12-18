import { Divider } from "antd";
import { AddCommentForm } from "../Comment/AddCommentForm";
import "./PostDetail.css";

export const PostDetail = (props) => {
  const { user, content, title } = props;
  return (
    <div className="detail-container">
      <div className="user-container">
        <img src={user.avatar} className="image-of-post-detail" />
        <div className="username">{user.name}</div>
        <Divider className="divider"></Divider>
      </div>

      <div className="content-container">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};
