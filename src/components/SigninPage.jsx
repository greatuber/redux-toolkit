/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Signin() {
  return (
   
    <MDBContainer fluid className="p-3 my-5 " style={{height:"80vh", display:"flex", justifyContent:"center", alignItems:"center"}} >

      <MDBRow style={{background:"white", borderRadius:"20px", padding:"20px", boxShadow:" 2px 2px 20px 8px black"}}>

        <MDBCol col='5' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>


     
        <MDBCol col='1' md='6' style={{display:"grid", marginTop:"2rem"}} >

        
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            Continue with Sign up
          </MDBBtn>

          {/* <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn> */}

        </MDBCol>
     
      </MDBRow>

    </MDBContainer>
  );
}

export default Signin;