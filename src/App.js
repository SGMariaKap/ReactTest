
import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import Login from './Login'
import Header from './Header'



class App extends Component {
  state = {
    characters: [],
  }
  removeCharacter = (index) => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }
    render() {
      const { characters } = this.state
      return (
        <div className="container">
        <Header/>
        <h1>React test</h1>
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
        <Login />
        <div id="root2"></div>

        </div>
      )
    }
  }






/*app.appendChild(logo)
app.appendChild(container)*/


  export default App;
