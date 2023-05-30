import React from "react";

import Card from "./card";
import contacts from "../contacts";

function App() {
  const allcontacts = contacts.map((contact) => {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        imgURL={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
    );
  });
  return (
    <div>
      <h1 className="heading"> My Contacts</h1>
      {allcontacts}
      {/* <Card
    name={contacts.map(contact=>contact.name)}
    imgURL= "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    phone="+123 456 789"
    email="b@beyonce.com"
    />
     <Card
    name={contacts.map(contact=>contact.name)}
    imgURL={contacts.map(contact=>contact.imgURL)}
    phone="+123 456 789"
    email="b@beyonce.com"
    /> */}
    </div>
  );
}

export default App;
