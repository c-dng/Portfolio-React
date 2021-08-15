import React from 'react';
import { Header, Icon, Image, Form } from 'semantic-ui-react'
import './contact.scss';

const Contact = () => (
  <div className="contact">
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Contactez-moi</Header.Content>
    </Header>
    <Image
      centered
      size='large'
    />
     <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Nom' placeholder='Nom' />
          <Form.Input fluid label='Email' placeholder='Email' />
        </Form.Group>
        <Form.TextArea label='Message' placeholder='Votre message...' />
        <Form.Button className="contact_boutonValider">
          <Icon name='mail' size='large' />
          Envoyer
        </Form.Button>
    </Form>
  </div>
);

export default Contact;
