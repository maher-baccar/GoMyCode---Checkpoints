import React from 'react'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
function Profile(props) {
  return (
    <MDBCard>
    <MDBRipple rippleColor='light' className='bg-image hover-overlay'>
    <div> {props.children}</div>

    </MDBRipple>
    <MDBCardBody>
      <MDBCardTitle>{props.fullname}</MDBCardTitle>
      <MDBCardText>
      {props.bio}
      </MDBCardText>
      <MDBCardText>

      {props.profession}
    </MDBCardText>
      <MDBBtn onClick={()=>props.handleAlert(props.fullname)}>click here to show name</MDBBtn>
    </MDBCardBody>
  </MDBCard>

  )
}

export default Profile