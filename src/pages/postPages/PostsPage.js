import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../components/Post/Post";
import './PostsPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { ToggleButton } from "react-bootstrap";
import { threads } from "../../dummydata/posts";

function PostsPage() {
    const { country } = useParams();

    const [name, setName] = useState(null);
    const [posts, setPosts] = useState(null);

    const [PostStyleOption, setPostStyleOption] = useState("List")
    const state = "List";

    useEffect(() =>{
        const thread = threads.filter(item => item.threadId == country);
        setPosts(thread[0].posts);
        setName(thread[0].title);
    },[])

    const renderListPosts = posts && posts.map((item, idx) => (
        <Post
            styleOption={PostStyleOption}
            title={item.title}
            user={item.user}
            description={item.description}
            country={country}
            postId={item.id}
            key={idx}
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
                <span className="title culture-font">{`${name}`}</span>
            </div>
                
            {/* 2 btn */}
            <div className="action-container">
                {renderTwoButton()}
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