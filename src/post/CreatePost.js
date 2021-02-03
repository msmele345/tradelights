import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {createPost} from "../components/ApiService"
import {useHistory} from 'react-router-dom';

const CreatePost = ({ props, user} ) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    let history = useHistory();

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        setTitle(data.title)
        setContent(data.post)
        const response = await createPost(user, data.title, data.post);

        if (response.error) {
            setErrorMessage(response.error || response.message)
        } else {
            history.goBack();
        }

    };

    const handleUsername = (user) => {
        if (user && user !== '') {
            return (<h3>WHATS YOUR PLAY OF THE DAY, {user.toUpperCase()}?</h3>);
        }
        return (<h3>WHATS YOUR PLAY OF THE DAY?</h3>);
    }

    return (
        <div className={"create-post"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {handleUsername(user)}
                <section>
                    <label htmlFor="create-title">Title:</label>
                    <input name="title" ref={register({required: true})}/>
                    {errors.title && "A Post Title Is Required"}
                </section>
                <section>
                    <label htmlFor="post-content">Post:</label>
                    <input name="post" ref={register({required: true})}/>
                    {errors.post && "Content is required"}
                </section>
                <input type="submit" value="Create Post"/>
            </form>
        </div>
    )
};

export default CreatePost;