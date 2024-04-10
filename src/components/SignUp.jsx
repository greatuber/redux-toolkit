import React from 'react';
import {useNavigate} from 'react-router-dom'

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}


from 'mdb-react-ui-kit';

function SignUp() {

  const navigate = useNavigate()

  

  return (
    <MDBContainer fluid className='my-5' style={{width:"100%", display:"flex", justifyContent:"center"}}>

      <MDBRow className='g-0 align-items-center' style={{width:"80%"}}>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'white', borderRadius:"100px 0 0 100px"}}>
            <MDBCardBody className='p-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <button style={{width:"100%", border:"none", background:"none"}} onClick={() => navigate('/signup')}>

              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
              </button>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6' style={{borderRadius:"0 100px 100px 0"}}>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="w-100 rounded-4 shadow-4"
            alt="" fluid style={{background:"white", height:"36rem"}}/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default SignUp;