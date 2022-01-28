import React, { useState } from 'react';

// The pipe, moves the data
const BlogContext = React.createContext(); 

// This is a component that can accept another component as
// an argument. That argument will be shown inside BlogProvider
export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
    }

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;