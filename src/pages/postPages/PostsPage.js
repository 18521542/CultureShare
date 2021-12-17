import React, { useEffect } from "react";
import { Post } from "../../components/Post/Post";
import './PostsPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { ToggleButton } from "react-bootstrap";
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
    const state = "List";

    const renderListPosts = posts.map(item => (
        <Post
            styleOption={PostStyleOption}
            title={item.title}
        />
    ))
    const handleClick=(e) => {
        setPostStyleOption(e.target.value)
    }

    const widthToApplyResponsive = 1200;
    const [isMobile, setIsMobile] = useState(window.innerWidth < widthToApplyResponsive);

    {/* Performs similarly to componentDidMount in classes */}
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < widthToApplyResponsive;
            if (ismobile !== isMobile) {
                setIsMobile(ismobile)
                // setPostStyleOption("Detail")
            }
        }, false);
    }, [isMobile]);

    useEffect(() => {
        if(PostStyleOption==="List" && isMobile){
            setPostStyleOption("Detail")
        }
    }, [PostStyleOption, isMobile])   

    const radios = [
        { name: 'Detail', value: 'Detail' },
        { name: 'List', value: 'List' },
    ];
    const renderTwoButton = () => (            
        <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={PostStyleOption === radio.value}
            onChange={(e) => setPostStyleOption(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
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