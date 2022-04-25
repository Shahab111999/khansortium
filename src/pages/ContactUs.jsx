import React, {  useRef, useState } from 'react'
import Layout from '../components/layout/Layout'
import emailjs from 'emailjs-com';
import { Redirect } from 'react-router';
import { Typography } from '@material-ui/core';

const ContactUs = () => {
    const [success,setSuccess] = useState(false)
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w3vtpjw', 'template_lk1f39f', form.current, 'user_vV2dxB6a5S2FlXrSZ23so')
        .then((result) => {
            setSuccess(true)
        //    return  <Redirect to='/thank-you'/>
        }, (error) => {
            
            console.log(error.text);
        });
    };
    
  


    const handleChange = e => {
        setState(() => {
            return {
                ...state,
                [e.target.id]: e.target.value
            }
        })
    }

    return (
        <Layout>
            <div className="Contact">
                <img src={require('../assets/logoLight.png').default} alt="" />
                <div className="Contact_Container">
                    <h1 className='Contact_Heading'>Contact Us Now</h1>
                    <div className='our_contact'>


                        <div className="Contact_Details">
                            <div>

                                <div className="Contact_Detail">
                                    <i className="fa fa-phone"></i>
                                    <span>
                                        (630) 674 8822
                                    </span>
                                </div>
                                <div className="Contact_Detail">
                                    <i className="fa fa-fax"></i>
                                    <span>
                                    (630) 925 8500
                                    </span>
                                </div>
                                <div className="Contact_Detail">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <span>
                                        2419 W Jefferson St, Joliet, <br />
                                        IL 60435, USA
                                    </span>
                                </div>
                                <div className="Contact_Detail">
                                    <i className="fa fa-envelope"></i>
                                    <span>
                                        contact@khansortium.com
                                    </span>
                                </div>
                                <div className="Contact_Detail Contact_Detail_Socials">
                                    <div className="Contact_Social_Container">
                                        <a target="_blank" href="https://www.facebook.com/Khansortium-111918071264923">

                                        <i className="fab fa-facebook"></i>
                                        </a>
                                    </div>
                                    <div className="Contact_Social_Container">
                                        <a target="_blank" href="https://twitter.com/khansortium">

                                        <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                    <div className="Contact_Social_Container">
                                        <a target="_blank" href="https://www.linkedin.com/company/khansortium/about/?viewAsMember=true">

                                        <i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                    <div className="Contact_Social_Container">
                                        <a target="_blank" href="https://www.instagram.com/khansortium/v">

                                        <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "100%" }}>
                                <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=2419%20W%20Jefferson%20St,%20Joliet,%20IL%2060435,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed">
                                </iframe>

                            </div>
                        </div>

                        <div className="Contact_Form">
                      {success ?
                         <Typography variant='body1' style={{textAlign:'center',marginBottom:'1rem',color:'green',fontWeight:'bold'}}>
                         Your Message is Successfully Sent Thank You.
                </Typography>
                      :
                      <form ref={form} onSubmit={sendEmail}>
                                <div className="Contact_Form_Input_Wrapper Contact_Form_Input_Wrapper_FName">
                                    <input type="text" value={state.firstName} onChange={handleChange} id='firstName'name="user_firstName" placeholder='First Name' />
                                </div>
                                <div className="Contact_Form_Input_Wrapper Contact_Form_Input_Wrapper_LName">
                                    <input type="text" value={state.lastName} onChange={handleChange} id='lastName'name="user_lastName" placeholder='Last Name' />
                                </div>
                                <div className="Contact_Form_Input_Wrapper Contact_Form_Input_Wrapper_Email">
                                    <input required type="email" value={state.email} onChange={handleChange}name="email" id='email' placeholder='Email' />
                                </div>
                                <div className="Contact_Form_Input_Wrapper Contact_Form_Input_Wrapper_Message">
                                    <textarea required name="message" id="message" cols="30" rows="10" value={state.message} name="msg" onChange={handleChange} placeholder="Your Message Here..."></textarea>
                                </div>
                                <div className="Contact_Form_Btn">
                                    <button>
                                        Submit
                                    </button>
                                </div>
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs
