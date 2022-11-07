import React from "react";
import { Container, Form, Button, Row,Col } from "react-bootstrap";
import './login.css'

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        usuario: '',
        pass: ' ',
    };
  }
  //creo metodo, capturo datos, con comilla invertida
  iniciarSesion(){
    //para ver que el metodo funciona
    alert('Boton de iniciar sesion');

  }
  render() {
    return (
    <Container id="login-container" >
        <Row>
            <Col> 
            <Row>
                <h2>Iniciar sesión</h2>
            </Row>
            <Row>

            <Col sm="12" 
            xs="12" 
            md = {{span: 4,offset: 4}}
            lg = {{span: 4,offset: 4}}
            xl = {{span: 4,offset: 4}}>
            
        <Form>
          <Form.Group >
            <Form.Label className= "Form-Label" >Usuario</Form.Label>
            <Form.Control 
                onChange ={(e)=> 
                this.setState({usuario: e.target.value})}/>

          </Form.Group>
          <Form.Group >
            <Form.Label className= "Form-Label">Contraseña</Form.Label>
            <Form.Control type="password"
                onChange ={(e)=> 
                this.setState({pass: e.target.value})}/>
          </Form.Group>

          <Button 
          variant="primary" 
          onClick ={()=>{
            this.iniciarSesion();
          }}
          >

            Iniciar sesion
          </Button>
        </Form>
        
                </Col>

            </Row>
              </Col>
        </Row>
    </Container>
    );
  }
}
