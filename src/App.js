import React from 'react';
import { Nav } from 'react-bootstrap';

import Chat from './Chat';
import About from './About';

const pdf = require('./res/cv.pdf');

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
            onClick={() => window.open(pdf, '_blank')}
          >
            <Nav.Link style={{
              bold: 'true', 'font-size': 34, padding: '50px', color: 'palevioletred',
            }}
            >
              CV
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {page}
      </div>
    );
  }
}
export default App;
