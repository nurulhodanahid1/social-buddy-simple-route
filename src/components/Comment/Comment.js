import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div>
            <h2>This is Comment</h2>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>Comment:{body}</h3>
        </div>
    );
};

export default Comment;