import React from 'react';
import Welcome from "./components/Welcome";

class App extends React.Component{

    state = {
        applicationName: 'First Look at React!',
        messages: [
            {
                id: 1,
                content: 'Java Group 29'
            },
            {
                id: 2,
                content: 'Java Group 30'
            },
            {
                id: 3,
                content: 'Java Group 31'
            },
            {
                id: 4,
                content: '.Net Group 32'
            },
        ]
    }

    render() {
        return (
            <div>

                {/* Sending the messages from state to "Welcome" component. */}
                <Welcome messages={this.state.messages}/>
            </div>
        )
    }

}

export default App;