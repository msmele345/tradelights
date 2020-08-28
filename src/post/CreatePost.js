import React, {useState} from "react";

export default function CreatePost ( {user, posts, dispatch} ) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value)
    };

    const handleContent = (e) => {
        setContent(e.target.value)
    };


    // const handleCreate = () => {
    //     const newPost = {title, content, author: user}
    //     setPosts([newPost, ...posts])
    // };

    const handleCreate = () => {
        dispatch({ type: 'CREATE_POST', title, content, author: user })
    }

    return (
        <form onSubmit={e => { e.preventDefault(); handleCreate() }}>
            <div>Trader: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
            </div>
            <textarea value={content} onChange={handleContent} />
            <input type="submit" value="Create" />
        </form>
    )
}
