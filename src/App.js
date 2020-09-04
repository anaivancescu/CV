import React from 'react';
import { Button, Card, Nav } from 'react-bootstrap';

import Chat from './Chat';
import About from './About';
import Chess from './Chess';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // button_change: 'primary'
      current_page: 'chat',
    };
  }


  render() {
    let page = null;
    if (this.state.current_page === 'chat') {
      page = (<Chat />);
    } else if (this.state.current_page === 'chess') {
      page = (<Chess />);
    } else {
      page = (<About />);
    }

    return (
      <div>
        <Nav variant="tabs">
          <Nav.Item
            style={{ margin: 'auto' }}
            onClick={() => {
              this.setState({ current_page: 'chat' });
            }}
          >
            <Nav.Link style={{
              bold: 'true', 'font-size': 34, padding: '50px', color: 'palevioletred',
            }}
            >
              Chat
            </Nav.Link>
          </Nav.Item>
          <Nav.Item
            style={{ margin: 'auto' }}
            onClick={() => {
              this.setState({ current_page: 'about' });
            }}
          >
            <Nav.Link style={{
              bold: 'true', 'font-size': 34, padding: '50px', color: 'palevioletred',
            }}
            >
              CV
            </Nav.Link>
          </Nav.Item>
          <Nav.Item
            style={{ margin: 'auto' }}
            onClick={() => {
              this.setState({ current_page: 'chess' });
            }}
          >
            <Nav.Link style={{
              bold: 'true', 'font-size': 34, padding: '50px', color: 'palevioletred',
            }}
            >
              Chess
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {page}
      </div>
    );
  }
}
export default App;
