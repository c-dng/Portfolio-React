import React from 'react';
import { Header, Icon, Image, Form } from 'semantic-ui-react'
import ContactMe from './contact.jpg';
import './contact.scss';

const Contact = () => (
  <div className="contact">
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content><img className="contact_image" src={ContactMe} alt="projet1" /></Header.Content>
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
        <Form.Button>
          <Icon name='mail' size='large' />
          Envoyer
        </Form.Button>
    </Form>
  </div>
);

export default Contact;
