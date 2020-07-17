import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {
    // let state = props.store.getState();

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // };
    //
    // let onPostChange = (text) => {
    //     let action = updateNewPostTextActionCreator(text);
    //     props.store.dispatch(action);
    // }
    return (
        <StoreContext.Consumer>
            {(store) => {
                // <MyPosts updateNewPostText={onPostChange}
                //          addPost={addPost}
                //          posts={state.profilePage.posts}
                //          newPostText={state.profilePage.newPostText}/>)
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return (<MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}/>)
            }
            }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer;