import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {  CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export class ShoppingList extends Component {
  state = {
      items: [
          {id: uuid(), name: 'ali'},
          {id: uuid(), name: 'amgad'},
          {id: uuid(), name: 'nour'},
      ]
  }
  
  render() {
      const { items } = this.state;
    return (
      <div>
          <Container>
              <Button 
                color='dark'
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter an item');
                    if(name) {
                        this.setState({
                            items: [...items, { id: uuid(), name }]
                        });
                    }
                }}
              >
                  Add
              </Button>
              <ListGroup>
                  <TransitionGroup className="shopping-list">
                    {
                        items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                <ListGroupItem> {name} </ListGroupItem>
                            </CSSTransition>
                        ))
                    }
                  </TransitionGroup>
              </ListGroup>
          </Container>
      </div>
    )
  }
}

export default ShoppingList;
