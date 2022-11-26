import React from "react";
import { Container, Row } from "react-bootstrap";
import "./empleados.css";
import DataGrid from '../grid/grid';

const columns=[
    {dataField: '_id',
    text: 'Product ID',
    hidden:true
    },
    {dataField: 'nombre',
    text: 'Nombre'
    },
    {dataField: 'apellidos',
    text: 'Apellidos'
    },
    {dataField: 'email',
    text: 'Email'
    },
    {dataField: 'telefono',
    text: 'Telefono'
    },
    {dataField: 'experiencia',
    text: 'Experiencia'
    },
    
    {dataField: 'servicio',
    text: 'Servicio'
    },
    {dataField: 'ubicacion',
    text: 'Ubicacion'
    },

]


export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
      
    }
  
    render() {
      return (
        <Container id="empleados-buscar-container">
          <Row>
            <h1>Buscar empleados</h1>
          </Row>
          <Row>
            <DataGrid url="/empleados" columns={columns}/>
          </Row>
        </Container>
      );
    }
  }
  
 