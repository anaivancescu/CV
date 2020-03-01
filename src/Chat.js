import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import MessageBubble from './MessageBubble';


const InputCss = styled.input`
position : fixed;
bottom: 5%;
right: 45%;
border-radius: 3px;

padding: 14px;
color : palevioletred;
background: transparent;
border: 2px solid palevioletred;
font-size: 14px;
transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const ButtonCss = styled.button`
position : fixed;
bottom: 5%;
right: 34%;
cursor: pointer;
background: transparent;
font-size: 20px;
border-radius: 3px;
color: palevioletred;
border: 2px solid palevioletred;
margin: 0 1em;
padding: 0.40em 1.5em;
transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
class Chat extends React.Component { // eslint-disable-line
  constructor (props) {
    super(props);
    this.state = {
      input_text: '',
      asteptNume: false,
      username: '',
      terminat: false,
      mesaje: [],
    };
    this.refchat = React.createRef();
    this.flow();
  }


  getTyping() {
    const { timestamp, sender } = this.props;
    const typing = (sender === 'bot' && timestamp > Date.now() - this.state.typingTime);
    return typing;
  }

  flow() {
    this.state.typing = this.getTyping();
    setTimeout(() => { this.addNewMessage('Salut', 'bot'); }, 500);

    setTimeout(() => { this.addNewMessage('Eu sunt Anca', 'bot'); }, 2000);

    setTimeout(() => { this.addNewMessage('Si caut internship', 'bot'); }, 4000);

    setTimeout(() => {
      this.addNewMessage('Cum te numesti?', 'bot');
      this.setState({
        asteptNume: true,
      });
    }, 6000);
  }

  addNewMessage(message, sender) {
    this.setState({
      mesaje: [...this.state.mesaje, { message, timestamp: Date.now(), sender }],
    });

    if (sender === 'user' && this.state.asteptNume) {
      this.setState({
        asteptNume: false,
        username: message,
        terminat: true,
      });
      setTimeout(() => { this.addNewMessage(`${this.state.username}, CV-ul meu il gasesti pe tab-ul de sus.`, 'bot'); }, 600);
    }

    if (sender === 'user' && this.state.terminat) {
      const items = ['Hei, gata, asta a fost', 'Hei, s-a terminat',
        'Gata DEMO-ul', 'Doar atat am fost programat sa fac...', 'lasa-ma in pace', 'termina, te rog'];

      setTimeout(() => { this.addNewMessage(items[Math.floor(Math.random() * items.length)], 'bot'); }, 500);
    }
  }

  componentDidUpdate() {
    this.scrolltoBottom();
  }

  scrolltoBottom() {
    if (this.refchat && this.state.mesaje.length > 0) {
      console.log('anca e tot smek');
      this.refchat.current.scrollIntoView({ behaviour: 'smooth' });
    }
  }

  renderMesaje() {
    return (
      <ul style={{ display: 'flex', 'flex-direction': 'column' }}>
        {this.state.mesaje.map((mesaj, i) => (
          <div ref={i === this.state.mesaje.length - 1 ? this.refchat : undefined}>
            <MessageBubble message={mesaj.message} sender={mesaj.sender} timestamp={mesaj.timestamp} />
          </div>
        ))}
      </ul>
    ); // pt fiecare mesaj si poz lui din vector face functia respectiva
  }

  render() {
    return (
      <div>
        {this.renderMesaje()}
        <InputCss
          type="text"
          id="id_input"
          value={this.state.input_text}
          onChange={(val) => {
            this.setState({ input_text: val.target.value });
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              this.addNewMessage(this.state.input_text, 'user');
              this.setState({ input_text: '' });
            }
          }}
        />

        <ButtonCss
          onClick={() => {
            this.addNewMessage(this.state.input_text, 'user');
            this.setState({ input_text: '' });
          }}
          // variant={this.state.button_change}
          variant="primary"
        >
          Trimite!

        </ButtonCss>


      </div>

    );
  }
}


export default Chat;
