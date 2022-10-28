//import { render } from 'node-sass';
import React from 'react';
import { Button, Container, FormGroup, ModalBody, ModalFooter, ModalHeader, Modal } from 'reactstrap';
import { Table } from 'reactstrap';
//import './Documento.json';
//import Componente from './components/Componente';

const data=[
  {
    Id: 1, 
    Productos: "Celular Samsung Galaxy A52",
    Nombre: "Celular Samsung",
    Descripcion: "Aparato electronico de 6.5 pulgadas ",
    Stock: 15
  },

  {
    Id: 2, 
    Productos: "Computador Lenovo",
    Nombre: "Computador Lenovo",
    Descripcion: "Color negro",
    Stock: 10
  },

  {
    Id: 3, 
    Productos: "Audifonos",
    Nombre: "Audifonos",
    Descripcion: "Inalambricos, color blanco",
    Stock: 9
  },

  {
    Id: 4, 
    Productos: "Combo Gamer",
    Nombre: "Combo Gamer",
    Descripcion: "Color negro, mouse y teclado",
    Stock: 18
  }
]

class CrudAdmin extends React.Component{
  state={
    data: data,
    form:{
      Id:'',
      Productos:'',
      Nombre:'',
      Descripcion:'',
      Stock:''
    },
   modalInsertar: false,
  }

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  MostrarModalInsertar=()=>{
    this.setState({modalInsertar: true});
  }

  OcultarModalInsertar=()=>{
    this.setState({modalInsertar: false});
  }

  //Metodo Para Registrar Productos

  Registar=()=>{
    var valorNuevo={...this.state.form};
    valorNuevo.Id=this.state.data.length+1;
    var lista=this.state.data;
    lista.push(valorNuevo);
    this.setState({data: lista, modalInsertar: false});
  }

  //-------------------------------------------------------------
  render(){
    return(
      <>
      <Container>
        <br></br>
        <button color='black' onClick={()=>this.MostrarModalInsertar()}>Registrar Productos</button>
        <br></br>
        <Table>
          <thead><tr><th>Id</th>
          <th>Productos</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Stock</th>
          <th>Acciones</th></tr></thead>
          <tbody>
            {this.state.data.map((elemento)=>(
              <tr>
                <td>{elemento.Id}</td>
                <td>{elemento.Productos}</td>
                <td>{elemento.Nombre}</td>
                <td>{elemento.Descripcion}</td>
                <td>{elemento.Stock}</td>
                <td><button color='primary'>Editar</button>{"     "}
                <button color='danger'>Eliminar</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={this.state.modalInsertar}>
        <ModalHeader>
          <div>
              <h3>Insertar producto</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input classname="form-control" readOnly type="text" value={this.state.data.lenght+1}/>
          </FormGroup>

          <FormGroup>
            <label>Productos:</label>
            <input classname="form-control" name="Productos" onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input classname="form-control" name="Nombre" onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup>
            <label>Descripcion:</label>
            <input classname="form-control" name="Descripcion" onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup>
            <label>Stock:</label>
            <input classname="form-control" name="Stock" onChange={this.handleChange}/>
          </FormGroup>

          <ModalFooter>
            <button color='primary' onClick={()=>this.Registar()}>Registrar</button>
            <button color='blue' onClick={()=>this.OcultarModalInsertar()}>Cancelar</button>
          </ModalFooter>


        </ModalBody>
      </Modal>







     </>
    )

  }

}

export default CrudAdmin;