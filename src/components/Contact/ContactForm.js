import React from 'react';
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log(data);
    alert(JSON.stringify(data));
  };

    return (
        <div className="contact-form">
              <div className="m-2">
              <h2 className="p-3 mb-5">Feel free to contact me anytime</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="row">
                   <div className="col-md-6">                    
                        <input name="firstName" placeholder="First Name" ref={register} />
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
                            name="massage"
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