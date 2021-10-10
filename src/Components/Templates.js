import React from 'react';

const Templates = ({ children }) => {
    return (
        <div className="templates">
            <div className="app-title">To dos</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default Templates;