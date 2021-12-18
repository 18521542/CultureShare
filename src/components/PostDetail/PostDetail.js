import { Divider } from "antd";
import { AddCommentForm } from "../Comment/AddCommentForm";
import "./PostDetail.css"

export const PostDetail = (props) => {
    const { username, comment, avatar } = props;
    return(
        <div className="detail-container">
            <div className="user-container">
                <img src={avatar} className="image-of-post-detail"/>
                <div className="username">{username}</div>
                <Divider className="divider"></Divider>
            </div>
            <div className="content-container">
                {comment}
            </div>
        </div>
    )
}