import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import { avatarSrc } from '../../dummydata/user';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

export const RenderComment = (comment) =>{
  return (
    <Comment
      author={<a>{comment.Author}</a>}
      avatar={<Avatar src={avatarSrc} />}
      content={
        <p>
          {comment.Detail}
        </p>
      }
      datetime={
        <Tooltip title={comment.Time}>
          <span>{comment.Time}</span>
        </Tooltip>
      }
    />
  );
}
/*
//this comment have useState -> cannot call in a loop 
--> cannot use
--> on searching to FIX!!

export const RenderComment = (comment) =>{
const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <Comment
      actions={actions}
      author={<a>{comment.Author}</a>}
      avatar={<Avatar src={avatarSrc} />}
      content={
        <p>
          {comment.Detail}
        </p>
      }
      datetime={
        <Tooltip title={comment.Time}>
          <span>{comment.Time}</span>
        </Tooltip>
      }
    />
  );
} */