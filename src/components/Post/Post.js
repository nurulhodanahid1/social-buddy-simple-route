import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComments = (id) => {
        const url = `/post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h1>This is Post</h1>
            <h2>Title: {title}</h2>
            <p>Post: {body}</p>
            <button onClick={() => showComments(id)}>Show comments</button>
        </div>
    );
};

export default Post;