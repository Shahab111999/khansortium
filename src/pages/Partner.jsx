import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Box, Button, FormControl, InputLabel, makeStyles, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import cardsContent from '../assets/data/vericalcards'
import axios from 'axios'
import emailjs from 'emailjs-com';

const companies = [];
cardsContent.map(card=>companies.push({value: card.id ,label:card.heading }))
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const PartnerApplication = () => {
    const classes= useStyles()
    const [sent,setSent] = useState(false)
    const [state,setState] = useState(
  
        {
            company:'Whole Cell Accessories',
            firstName:'',
            lastName:'',
            phone_number:'',
            email:'',
            address1:'',
            address2:'',
            city:'',
            state:'',
            isAgree:false

        }
    )

    const sendEmail = (e) => {
        e.preventDefault();
         
        emailjs.send('service_jqzoko8', 'template_604po25', state,'user_5n3jfYDQRfKW0bX7gtzxv')
          .then((result) => {
              setSent(true)
          }, (error) => {
              console.log(error.text);
          });
      };
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        if(state.isAgree){
            resetForm()
        setSent(true)
            try{
                await axios.post('http://localhost:2525/send_mail',{
                    text:state
                })
            } 
            catch (error){
                   console.log(error)
            }

        } 
    }
    const resetForm =()=>{
     
        setState(()=>{
            return {

                company:'Whole Cell Accessories',
                firstName:'',
                lastName:'',
                phone_number:'',
                email:'',
                address1:'',
                address2:'',
                city:'',
                state:'',
                isAgree:false
    
            }}
        )
    }




    const handleChange = (event) => {
        if(event.target.id === 'isAgree'){
          
            setState(()=>{
                return{
                    ...state,
                    isAgree: !state.isAgree
                }
            })    
        }
        else{
            setState(()=>{
           
                return{
                    ...state,
                    [event.target.id]: event.target.value
                }
            })

        }
    };
      
    return (
        <Layout>
            <div className="JobApplicationForm">
                <img src={require('../assets/logoLight.png').default} alt="" />
                <div className="JobApplicationContainer">
                <form onSubmit={sendEmail}> 
                <Typography style={{marginBottom:'2rem',textTransform:'uppercase'}} align={'center'} variant="h4" >
                Be A Managing Partner 
                </Typography>
         {    sent ?   <Typography variant='body1' style={{textAlign:'center',marginBottom:'1rem',color:'green',fontWeight:'bold'}}>
                         Your Application is Successfully Submitted Thank You.
                </Typography>
:<>
                <TextField
                style={{margin:'auto',display:'flex',justifyContent:'center' ,maxWidth:'450px' ,marginBottom:"1rem"}}
                    id="company"
                    select
                    placeholder='kl'
                    label="Company"
                    value={state.company}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select company you want to Be A Managing Partner  with."
                    >
                {/* {companies.map((option) => (
                    <option key={opti } value={option.label}>
                    {option.label}
                    </option>
          ))} */}
          <option value="Whole Cell Accessories">Whole Cell Accessories</option>
          <option value="We Fix Phones">We Fix Phones</option>
          <option value="We Are Wireless Boost 4.0">We Are Wireless Boost 4.0</option>
          <option value="Gamma VR">Gamma VR</option>
        </TextField>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            onChange={handleChange} 
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            onChange={handleChange} 
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            onChange={handleChange} 
                            label="Email"
                            fullWidth
                            // autoComplete="shipping postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="phone_number"
                            name="phone_number"
                            onChange={handleChange} 
                            label="Phone Number"
                            fullWidth
                            // autoComplete="shipping country"
                        />
                    </Grid>
                   
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            onChange={handleChange} 
                            label="Address line 1"
                            fullWidth
                            autoComplete="shipping address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            onChange={handleChange} 
                            label="Address line 2"
                            fullWidth
                            autoComplete="shipping address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            onChange={handleChange} 
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" 
                        onChange={handleChange} label="State/Province/Region" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="primary" name="isAgree" onClick={handleChange} value={state.isAgree} id='isAgree'  />}
                            label="Agree with Terms & Conditions"
                        />
                    </Grid>
                </Grid>
                 <Box style={{
                     marginTop:"1rem",
                    
                 }} display='flex' justifyContent="center"  >
                     <Button  type='submit' fullWidth style={{backgroundColor:'#aaa72d',color:'#fff',maxWidth:'500px',padding:"1rem"}}  variant='contained' >
                         Submit Form
                     </Button>
                 </Box>
                 </>

                }
              </form>
                </div>
            </div>
        </Layout>
    )
}

export default PartnerApplication
