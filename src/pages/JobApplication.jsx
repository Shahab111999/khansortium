import React, { useRef, useState } from 'react'
import Layout from '../components/layout/Layout'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Box, Button,Input } from '@material-ui/core';
import AttachFile from '@material-ui/icons/AttachFile';
import Check from '@material-ui/icons/Check';
import cardsContent from '../assets/data/vericalcards'
import emailjs from 'emailjs-com';

let companies = []
cardsContent.map(card=>companies.push(card.heading))

const JobApplication = () => {
    const [uploaded,setUploaded] = useState(false)
    const [success,setSuccess] = useState(false)
    const form = useRef()
    const handleUploadChange =(e)=>{
      setUploaded(e.target.files[0].name)
    }
    const [state,setState] = useState({
        company:'',
        post:'',
        firstName:'',
        lastName:'',
        exp:'',
        skills:'',
        address1:'',
        address2:'',
        city:'',
        state:'',
        isAgreed:false,
        isUploaded:false,
        my_file:''

    })
    const sendEmail = (e) => {
        e.preventDefault();
         
        emailjs.send('service_w3vtpjw', 'template_6s6tfuf', state,'user_vV2dxB6a5S2FlXrSZ23so')
          .then((result) => {
              setSuccess(true)
          }, (error) => {
              console.log(error.text);
          });
      };
    
    const handleChange = (event) => {
       /*  console.log(event.target.value)
       setCompany(event.target.value); */
       setState(()=>{
       if(event.target.id !== 'isAgreed') {
        return {  ...state,
           [event.target.id]:   event.target.value}
       }else{
           setState({
               ...state,
               isAgreed:!state.isAgreed
           })
       }
    }
       )
    
    };
    console.log(state)
    return (
        <Layout>
            <div className="JobApplicationForm">
                <img src={require('../assets/logoLight.png').default} alt="" />
                <div className="JobApplicationContainer">
            { success?
            
            <Typography variant='body1' style={{textAlign:'center',marginBottom:'1rem',color:'green',fontWeight:'bold'}}>
                         Your Application is Successfully Submitted Thank You.
                </Typography>
            :  <>
                <Typography style={{marginBottom:'2rem'}} align={'center'} variant="h4" >
                    Join Us Now
                </Typography>
                {/* <Typography variant="h6" gutterBottom>
                    Apply for Front-End Developer
                </Typography> */}
                <form ref={form} onSubmit={sendEmail}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                    id="company"
                    select
                    fullWidth
                    name='company'
                    label="Company"
                    value={state.company}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select company you want to join."
                    >
                {companies.map((option) => (
                    <option key={option } value={option}>
                    {option}
                    </option>
          ))}
        
        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="post"
                            name="post"
                            label="The Post You Are Applying For..."
                            fullWidth
                            name='post'
                            onChange={handleChange}
                            // autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            
                            name="firstName"
                            label="First name"
                            fullWidth
                            onChange={handleChange}
                            value={state.firstName}
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            value={state.lastName}
                            fullWidth
                            onChange={handleChange}
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="exp"
                            name="exp"
                            value={state.exp}
                            label="Years of experience"
                            fullWidth
                            onChange={handleChange}
                            // autoComplete="shipping postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="skills"
                            name="skills"
                            label="Your  Skills"
                            value={state.skills}
                            fullWidth
                            onChange={handleChange}
                            // autoComplete="shipping country"
                        />
                    </Grid>
                   
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            onChange={handleChange}
                            value={state.address1}
                            autoComplete="shipping address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            onChange={handleChange}
                            value={state.address2}
                            autoComplete="shipping address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            value={state.city}
                            fullWidth
                            onChange={handleChange}
                            autoComplete="shipping address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state"
                        value={state.state}
                        label="State/Province/Region" fullWidth
                        onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                        size="small"
                            control={<Checkbox color="primary" name="isAgreed" id='isAgreed' value={state.isAgreed}
                            onChange={handleChange} />}
                            label="Agree with Terms & Conditions"
                        />
                    </Grid>
               
                   <Grid   item xs={6}>
                      <label className='upload_label'   htmlFor="isUploaded">
                        <Input  className='upload_input' onChange={handleUploadChange} accept="image/*"  name='isUploaded' id="isUploaded"
                        onChange={handleChange} multiple type="file" />
                        {
                            
                            uploaded?
                            <Button variant="contained" component="span">
                            Attached
                            <Check/>
                        </Button>
                        
                    :
                    <Button variant="contained" component="span">
                    Attach Resume
                    <AttachFile/>
                </Button>
                    }
                     </label>
                   </Grid>
                </Grid>
                 <Box style={{
                     marginTop:"1rem",
                    
                 }} display='flex' justifyContent="center"  >
                     <Button  type='submit' fullWidth style={{backgroundColor:'#aaa72d',color:'#fff',maxWidth:'500px',padding:"1rem"}}  variant='contained' >
                         Submit Form
                     </Button>
                 </Box>
                 </form>
                 </>
                }
                </div>
            </div>
        </Layout>
    )
}

export default JobApplication
