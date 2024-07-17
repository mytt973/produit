import React from 'react'
import "./Connection.css"
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
export default function Connection({onSub}) {
    function Validation(e){
        e.preventDefault();
        const data={
          nom:e.target[1].value,
          prenom:e.target[2].value,
          email:e.target[0].value,
          mdp:e.target[3].value,
        }
        onSub(data);
        
    }

  return (
    <Form onSubmit={Validation}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label> entre tes informations</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPahessword">
      <Form.Label></Form.Label>
      <Form.Control type="nom" placeholder="nom" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPrheassword">
      <Form.Label></Form.Label>
      <Form.Control type="prenom" placeholder="prenom" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label></Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
 

    <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
      
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}
