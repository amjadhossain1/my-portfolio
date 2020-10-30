import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {   
    emailjs.send('amjad1233','template_tjeua8g', data, 'user_JWuxrUCS5o8InKExgxmRF')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       alert('Thank you');
    }, (err) => {
       console.log('FAILED...', err);
    });
  };

    return (
        <div className="contact-form">
              <div className="m-2">
              <h2 className="p-3 mb-5">Feel free to contact me anytime</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="row">
                   <div className="col-md-6">                    
                        <input name="name" placeholder="First Name" ref={register} />
                    </div>
                    <br/>
                    <div className="col-md-6">                   
                        <input name="email" placeholder="Email" ref={register} />
                    </div>
                   </div>
                    <br/>
                    <div>                   
                        <input name="subject" placeholder="subject" ref={register} />
                    </div>
                    <br/>
                    <div>                  
                        <textarea                         
                            name="message"
                            placeholder="Massage me"
                            type="text"
                            ref={register}
                        />
                    </div>
                        <input type="submit" value="Send Massage"/>
                </form>
                </div>
        </div>
    );
};

export default ContactForm;