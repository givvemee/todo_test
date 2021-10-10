import React from 'react';

const Templates = ({ children }) => {
    return (
        <div className="templates">
            <div className="app-title">To do</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default Templates;