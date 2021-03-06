import React, { Component } from 'react';
import Flashcard from "../components/Card/Card";
import DrawButton from "../components/DrawButton/DrawButton";
import API from "../utils/API";

import Quiz from '../components/Quiz/Quiz'


import { Container, Row, Col } from "../components/Grid";


class Cards extends Component {
  constructor(props) {
    super(props);

    // this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    }
  }



  componentDidMount() {
    console.log("get flashcard")
    API.userFlashcards().then((result) => {
      let flashcards = result.data;

      this.setState({ cards: flashcards })


    })
  }


  getRandomCard(currentCards) {
    var randomIndex = [Math.floor(Math.random() * currentCards.length)];
    var card = currentCards[randomIndex];
    if (card === this.state.currentCard) {
      this.getRandomCard(currentCards)
    }

    return (card);
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    console.log("cards", this.state.cards)
    return (
      <>
        <h1 className="card-heading">Click on a card to see translation</h1>
        <Container>

          <Row>

            {this.state.cards.map((e, i) => <Flashcard phrase={e.phrase} translation={e.translation} key={i} />)}


          </Row>

        </Container>

      </>
    )
  }
}

export default Cards