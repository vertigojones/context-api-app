import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Owen Liversidge",
        email: "owen@gmail.com",
        phone: "111-111-1111"
      },
      {
        id: 2,
        name: "Sweety James",
        email: "sweety@gmail.com",
        phone: "222-222-2222"
      },
      {
        id: 3,
        name: "Ruby Liversidge",
        email: "ruby@gmail.com",
        phone: "333-333-3333"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
