import React from 'react'
import '../styles/contact.scss'

function Contact() {
  return (
    <div className='contact' id="Contact">
      <main>
      <h1>Contact Form</h1>
      <form >
        <div>
          <label>Name</label>
          <input type="text" required placeholder='abc'/>
        </div>
        <div>
          <label>Email</label>
          <input type="text" required placeholder='abc'/>
        </div>
        <div>
          <label>Message</label>
          <input type="text" required placeholder='your query...'/>
        </div>
        <button type='submit'>Send</button>
      </form>

      </main>



    </div>
  );
}

export default Contact;
