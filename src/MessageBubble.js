import React, { Component } from 'react';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';


const BubbleBot = styled.section`
background: #ffa8a8;
border-radius: .4em;
border: 20px solid transparent;
margin: 20px;


margin-left: 5;

align-self: flex-start;
left: 2;
margin: 2;
display: table;
`;


const BubbleUser = styled.section`

margin-right: 5;
align-self: flex-end;
flex-direction: row;
right: 5;
margin: 2;

float: right;
position: relative;
text-align:right;
background: #ffff9f;
border-radius: .4em;
border: 20px solid transparent;
margin: 20px;
display: table;
margin-right: 5;
`;

class MessageBubble extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typingTime: Math.min(80 * this.props.message.length, 1500), // message.length = cate caractere are
    };


    this.state.typing = this.getTyping(); // this.state.typing folosea getTyping si cand
    // intra in state folosea getTyping care folosea ceva din state care era
    // inca undifined
    setTimeout(() => { this.setState({ typing: this.getTyping() }); }, this.state.typingTime); // peste 5 sec schimbam typeing ul ca sa modifice state ul pt radare
  }

  getTyping() {
    const { timestamp, sender } = this.props;
    const typing = (sender === 'bot' && timestamp > Date.now() - this.state.typingTime);
    return typing;
  }

  render() {
    const { message, timestamp, sender } = this.props;


    if (this.state.typing) {
      return (
        <BubbleBot>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </BubbleBot>
      );
    }
    if (sender === 'bot') {
      return (

        <BubbleBot>
          {message}
        </BubbleBot>

      );
    }
    return (
      <BubbleUser>
        {message}
      </BubbleUser>
    );
  }
}

export default MessageBubble;
