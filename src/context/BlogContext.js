import React, { useReducer } from 'react';

// The pipe, moves the data
const BlogContext = React.createContext(); 

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
};

// This is a component that can accept another component as
// an argument. That argument will be shown inside BlogProvider
export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost'});
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;