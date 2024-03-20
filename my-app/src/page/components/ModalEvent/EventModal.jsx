import React,{useState} from 'react';
import {Modal, Button, Form, Collapse} from 'react-bootstrap'

const EventModal = ({evento, onClose, onDelete, onUpdate}) =>{
    const [editedEvent, setEditedEvent] = useState({...evento});
    const [collapsed, setCollapsed] = useState(true);

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setEditedEvent({...editedEvent, [name]:value});
    }

    const handleColorChange = (e)=>{
        setEditedEvent({...editedEvent, color:e.target.value});
    }

    const handleStartDateChange = (e)=>{
        const startDate = new Date(e.target.value);
        if(startDate <= editedEvent.end){
            setEditedEvent({...editedEvent, start:startDate});
        }
    }

    const handleEndDateChange = (e)=>{
        const endDate = new Date(e.target.value);
        if(endDate >= editedEvent.start){
            setEditedEvent({...editedEvent, end:endDate});
        }
    }
    const handleDelete = () =>{
        onDelete(evento.id);
    }
    const handleUpdate = () =>{
        onUpdate(editedEvent);
        onClose();
    }

    const adjustDate = (date) =>{
        const adjustedDate = new Date(date);
        adjustedDate.setHours(adjustedDate.getHours() - 3);
        return adjustedDate.toISOString().slice(0,-8);
    };


    return(
        <Modal show={true} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>{editedEvent.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" name='title' value={editedEvent.title} onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="formDesc">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textarea" rows={3} name='desc' value={editedEvent.desc} onChange={handleInputChange}/>
                    </Form.Group>

                    <Collapse in={!collapsed}>
                        <div>
                        <Form.Group controlId="formInicio">
                            <Form.Label>Início</Form.Label>
                            <Form.Control type="datetime-local" name='start' value={adjustDate(editedEvent.start)} onChange={handleStartDateChange}/>
                        </Form.Group>
                        
                        <Form.Group controlId="formEnd">
                            <Form.Label>Fim</Form.Label>
                            <Form.Control type="datetime-local" name='end' value={adjustDate(editedEvent.end)} onChange={handleEndDateChange}/>
                        </Form.Group>
                        
                        <Form.Group controlId="formColor">
                            <Form.Label>Cor</Form.Label>
                            <Form.Control type="color" name='color' value={editedEvent.color} onChange={handleColorChange}/>
                        </Form.Group>

                        <Form.Group controlId="formTipo">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type="text" name='tipo' value={editedEvent.tipo} onChange={handleInputChange}/>
                        </Form.Group>
                        </div>
                    </Collapse>
                </Form>
            </Modal.Body>
            <Modal.Footer className='justify-content-between'>
                <Button variant='secondary' onClick={()=> setCollapsed(!collapsed)}>
                    {!collapsed ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
                </Button>
                <Button variant='danger' onClick={handleDelete}>
                    Apagar
                </Button>
                <Button variant='primary' onClick={handleUpdate}>
                    Salvar Alterações
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EventModal;