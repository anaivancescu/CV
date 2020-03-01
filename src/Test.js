import React from 'react';
import { ChatFeed, Message } from 'react-chat-ui';

// import { ListGroup } from 'react-bootstrap';

const mockMesaje = [{
  sender: 'string', // bot sau vizitator
  text: 'string', // salut
  timestamp: 5, // timpul la care s-a trimis
}, {

}];
class test extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
  }


  render() {
    const { valoare } = this.props;
    return (
      <ChatFeed
        messages={this.props.valoare}
        isTyping={false}
        hasInputField={false}
        showSenderName
        bubblesCentered={false}
        bubbleStyles={
          {
            text: {
              fontSize: 30,
            },
            chatbubble: {
              borderRadius: 70,
              padding: 40,
            },
          }
        }
      />
    );
  }
}

export default test;
