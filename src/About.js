import React from 'react';
import { Button, Card } from 'react-bootstrap';

class About extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {

      card_title: 'title ',
      card_text: 'text ',
    };
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>
              {this.state.card_title}
            </Card.Title>
            <Card.Text>
              {this.state.card_text}

            </Card.Text>
            <Button
              onClick={() => {
                this.setState({ card_title: 'am schimbat' });
                this.setState({ card_text: 'am schimbat' });
              }}
              variant="primary"
            >

              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>

    );
  }
}
export default About;
