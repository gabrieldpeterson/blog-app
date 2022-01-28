import React from 'react';

// The pipe, moves the data
const BlogContext = React.createContext(); 

// This is a component that can accept another component as
// an argument. That argument will be shown inside BlogProvider
export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider>
        {children}
    </BlogContext.Provider>;
};