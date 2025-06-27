import React from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1>
          Contact
      </h1>

      <form action="">
        <div className="formGroup">

          {/* name */}
          <lable htmlFor="name" hidden>
            Name
          </lable>
          <input type="text" name="name" id="name" placeholder="Name" required/>
        </div>

        {/* email */}
        <div className="formGroup">
          <lable htmlFor="email" hidden>
            Email
          </lable>
          <input type="text" name="email" id="email" placeholder="Email" required/>
        </div>

        {/* message */}
        <div className="formGroup">
          <lable htmlFor="message" hidden>
            Message
          </lable>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit"></input>
      </form>
    </section>
  )
}

export default Contact