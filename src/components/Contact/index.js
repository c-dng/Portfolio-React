import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import './contact.scss';

const Contact = () => (
  <div className="contact">
    <Form>
      <Form.Field>
        <label>Nom</label>
        <input placeholder='Name' />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input placeholder='Email' />
      </Form.Field>
      <Button type='submit'>Envoyer</Button>
  </Form>
  </div>
);

export default Contact;
