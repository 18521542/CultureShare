import React from "react";
import { Post } from "../../components/Post/Post";
import './PostsPage.css'

const data =[ {
    title: "Các vấn đề hiện đại của phương Tây",
    user:{
        name:"MrBlack",
        avatarLink:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" 
    }
},
{
    title: "Các vấn đề hiện đại của phương Tây",
    user:{
        name:"MrBlack",
        avatarLink:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" 
    }
},
{
    title: "Các vấn đề hiện đại của phương Tây",
    user:{
        name:"MrBlack",
        avatarLink:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" 
    }
},
{
    title: "Các vấn đề hiện đại của phương Tây",
    user:{
        name:"MrBlack",
        avatarLink:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" 
    }
},]

function PostsPage(props) {
    const { threadName, threadPosts } = props;
    const pageName = threadName || "FORUM 1";
    const posts = threadPosts || data;

    const renderListPost = () => {
        return (
            <div>
                <Post/>
            </div>
        )
    }
        
    return (
        <div className="thread-container">

            <div className="header-container">
                <span className="title">{`${pageName}`}</span>
            </div>
                
            <div className="action-container">
                <span className="btn-change-style">change style</span>
                <span className="btn-add">add</span>
            </div>

            <div className="post-list-container">
                {renderListPost()}
            </div>
        </div>    
    );
}

export default PostsPage;