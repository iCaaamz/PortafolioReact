import React from "react";
import "./styles/contact.css"
 const Contact = () => {
     return(
         <>
         <div className="supercontainer">
         <div className="containercontact">
             <h1 className="h1contact">CONTACT TO <span>ME</span></h1>
             <div className="contact-wrapper">
                 <div className="contact-form">
                     <h2>Alvaro Camacho</h2>
                     <form action="">
                         <p>
                             <label for="fullname">FullName</label>
                             <input type="text" name="FullName" id="fullname"/>
                         </p>
                         <p>
                             <label for="email">Email</label>
                             <input type="email" name="email" id="email"/> 
                         </p>
                         <p>
                             <label for="affair">Affair</label>
                             <input type="text" name="affair" id="affair"/>
                         </p>
                         <p className="block">
                             <label for="message">Message</label>
                             <textarea name="message" id="message" rows="3"></textarea>
                         </p>
                         <p className="block">
                             <button type="submit">
                                 Send
                             </button>
                         </p>
                     </form>
                 </div>
                 <div className="contact-info">
                     <h4>More info</h4>
                     <ul>
                         <li>Bogotá</li>
                         <li>+57 3208849070</li>
                         <li>camachodevelop@gmail.com</li>
                     </ul>
                     <p>
                         Contact me through this form or directly by a message on my LinkedIn, I will read you as soon as possible
                     </p>
                     <p> 
                         My LinkedIn <a href="https://www.linkedin.com/in/camacho-alvaro">Alvaro Camacho</a>
                     </p>
                 </div>
             </div>
         </div>
         </div>
         </>
     )
 }

 export default Contact;