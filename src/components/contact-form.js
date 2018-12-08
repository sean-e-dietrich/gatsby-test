import React from 'react'

const ContactForm = (props) => (
  <div>
    <form name="contact" method="POST" netlify>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <div data-netlify-recaptcha></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
)

export default ContactForm