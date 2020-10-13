import React from 'react';
import Message from '../components/Message'

// Stateless-Component
// Managing the data.

const Welcome = ({messages}) => {
    return (
        <div>
            {messages.map(message => (
                <Message key={message.id} message={message}/>
            ))}
        </div>

    )
}

export default Welcome;