import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character'
})

class App extends Component{
  state={
    list:[]
  }

  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data.results);
      this.setState({list: res.data.results})
    })
  }

  render(){
    return (
      <div className='d-flex flex-row flex-wrap gap-5 justify-content-center'>
        {this.state.list.map(list => 
        <div className='d-flex flex-column'>
          <img className='rounded mx-auto d-block' src={list.image} alt=""></img>
          <h2 className="text-center">{list.name}</h2>
       </div>
        )}
      </div> 
    )
  }

  

}
export default App;

