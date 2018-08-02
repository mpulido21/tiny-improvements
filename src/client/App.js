import React, { Component } from "react";
import { Col, Container, Row, Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";
import VoteForm from "./Component/VoteForm";
import AwardCard from "./Component/AwardCard";
import KudosForm from "./Component/KudosForm/KudosForm";
import axios from "axios";
// import PetCard from "./Component/PetCard";

class App extends Component {

  constructor() {
    super();
    this.state = {
      pets: [
        {
          name: 'Memphis',
          age: 12,
          type: 'Dog'
        },
        {
          name: 'Baby',
          age: 11,
          type: 'Panther'
        },
        {
          name: 'Peach',
          age: 3,
          type: 'Cat'
        },
        {
          name: 'Opal',
          age: 1,
          type: 'Kitten'
        }
      ],
      users: [],
      restaurants: [
        {
          name: 'Maialino',
          genre: 'Italian',
          score: 4.4
        },
        {
          name: 'Beyond Sushi',
          genre: 'Vegan',
          score: 4.7
        },
        {
          name: 'Abyssinia',
          genre: 'Ethiopian',
          score: 4.5
        },
        {
          name: 'La Roja de Todos',
          genre: 'Chilean',
          score: 4.5
        }
      ],
      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us.",
          sender: "Fabian",
          receiver: "Leon"
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Leslie makes it to work as often as she does.",
          sender: "Archit",
          receiver: "Laura"
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee.",
          sender: "Gobi",
          receiver: "Owen"
        }
      ]
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <KudosForm />
            <br />
            <VoteForm />
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map(award => <AwardCard title={award} />)}
          </Col>
        </Row >
        <br />
        <Row>
          <Col md="12">
            <Form>
              <FormGroup>
                <Label>Give Kudos to</Label>
                <Input type="select" />
                {this.state.users.map(award => <AwardCard title={award.title} comment={award.comment} />)}
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Kudos Title" />
              </FormGroup>
              <FormGroup>
                <Input type="textarea" placeholder="Kudos text" />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        {/*New Code Goes Below Here */}
        {/* {
          this.state.users.map(user => <NameCard name={user.name} age={user.userId} />)
        } */}
        {/* {
          this.state.pets.map(pet => <PetCard name={pet.name} age={pet.age} />)
        } */}

        {
          this.state.friends.map((friend, index) => <p key={index}> {friend.name} </p>)
        }

        axios.post("/api/awards", {
          id: '4',
      title: 'Loudest Easter Award',
      comment: 'Who chews carrots like that at work??'
        }).then(response => {
          this.setState({
            awards: response.data
          })
        })

 <Row><Col md="12">
          <Button onClick={this.postKudo}> click me </Button>
        </Col></Row>

      </Container>
    );
  }
}

export default App;