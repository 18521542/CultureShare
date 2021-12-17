import React from "react";
import { Post } from "../../components/Post/Post";
import './PostsPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
const data =[ 
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
    },
    {
        title: "Các vấn đề hiện đại của phương Tây",
        user:{
            name:"MrBlack",
            avatarLink:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" 
        }
    },
]

function PostsPage(props) {
    const { threadName, threadPosts } = props;
    const pageName = threadName || "FORUM 1";
    const posts = threadPosts || data;

    const [PostStyleOption, setPostStyleOption] = useState("List")

    const renderListPosts = posts.map(item => (
        <Post
            styleOption={PostStyleOption}
            title={item.title}
        />
    ))
    const handleClick=(e)=>{
        setPostStyleOption(e.target.value)
    }

    const renderTwoButton = () => (            
        <ButtonGroup onClick={handleClick}>
            <Button variant="primary" value={"Detail"}>Detail</Button>
            <Button variant="danger" value={"List"}>List</Button>
        </ButtonGroup>
    )
        
    return (
        <div className="thread-container">
            {/* Thread name */}
            <div className="header-container">
                <span className="title">{`${pageName}`}</span>
            </div>
                
            {/* 2 btn */}
            <div className="action-container">
                {renderTwoButton()}
                <span className="btn-add"><Button variant="success">Add</Button>{' '}</span>
            </div>

            {/* List */}
            <div className="posts-list-container">
                <div className={`${PostStyleOption}-container`}>
                    {renderListPosts}
                </div>
            </div>

        </div>    
    );
}

export default PostsPage;