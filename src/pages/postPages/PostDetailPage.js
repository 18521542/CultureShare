import { Divider } from "antd";
import React from "react"
import { AddCommentForm } from "../../components/Comment/AddCommentForm";
import { PostDetail } from "../../components/PostDetail/PostDetail";
import './PostDetailPage.css'


export const PostDetailPage = (props) => {
    const { users } = props;

    const Info = users || [
        {
            username:"Tiki",
            comment:"Bài viết này hay quá khá là cuốn hút tôi muốn có thêm tư liệu về nó",
            avatar:"https://cdn-icons-png.flaticon.com/512/147/147144.png"
        }
    ]

    const renderInfo = Info.map(item => {
        console.log("item")
        return(
            <PostDetail
                {...item}
            />
        )
    })
    return(
        <div style={{
            padding: "10px",
        }}>
            {renderInfo}
            <Divider>BÌNH LUẬN</Divider>
            <AddCommentForm/>
        </div>
    )
}