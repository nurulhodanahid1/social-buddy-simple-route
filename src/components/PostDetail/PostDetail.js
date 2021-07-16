import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    }, [id]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data));
    }, [id])
    return (
        <div>
            <h1>This is Post Detail: {id}</h1>
            <h2>User Posted: {postDetail.id}</h2>
            <h2>Title: {postDetail.title}</h2>
            <p><strong>Post body: {postDetail.body}</strong></p>
            {
                comment.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;