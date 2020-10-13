import React from 'react';

// Stateless-Component.
// Assembling the message.

const Message = ({message: {content, id}}) => {
    return (
        <h1 className="welcome">Hello {content}</h1>
    );
}

export default Message;