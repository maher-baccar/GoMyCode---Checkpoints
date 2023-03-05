import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/todoSlice/TodoSlice';

  
const EditItem = ({id}) => {
    const [show, setShow] = useState(false);
    const dispatch=useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setEdited] = useState(
    {
        title:"",
        description:"",
    }
  )
  return (
    <div> <Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body className='inputs'> 
    <input type="text" placeholder='enter title task' onChange={(e)=>{setEdited({...edited,title:e.target.value})}}/>
      <input type="text" placeholder='enter description task'onChange={(e)=>{setEdited({...edited,description:e.target.value})}}/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={()=>{handleClose();dispatch(editTask({id : id,edited}))}}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default EditItem