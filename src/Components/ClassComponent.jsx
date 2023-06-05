import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Lucas',
      age: 30
    }
    console.log('Class: aparece el constructor')
  }

  componentDidMount() {
    console.log('Class: Se montó el componente')
  }
  componentDidUpdate(){
    console.log('Class: Se actualizó el componente')
  }
  componentWillUnmount(){
    console.log('Class: Se desmontó el componente')
  }

  render() {
    console.log('Class: aparece el render')
    return (
      <div>
        <h1>Componente de clase</h1>
        <h1>{this.state.name}</h1>
        <button
          onClick={() => this.setState({name: 'Fernando'})}
        >Cambiar el nombre</button>
      </div>
    )
  }
}
