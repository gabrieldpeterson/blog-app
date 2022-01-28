import React from 'react';

// The pipe, moves the data
const BlogContext = React.createContext(); 

// This is a component that can accept another component as
// an argument. That argument will be shown inside BlogProvider
export const BlogProvider = ({ children }) => {
    const blogPosts = [
        { title: 'Blog Post #1' },
        { title: 'Blog Post #2 '}
    ];
    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>;
};

export default BlogContext;