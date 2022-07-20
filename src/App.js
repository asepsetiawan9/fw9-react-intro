import React from "react"

class CountNum extends React.Component{
  componentDidMount(){
    console.log('Componen di Mount')
  }
  componentWillUnmount(){
    console.log('log Sebelum Ui ddi rander')
  }
  render(){
    //const number =
    return(
      <>
      {this.props.nameKey.judul}

      <h1>{this.props.count}</h1>
      </>
    )
  }
}

class App extends React.Component{
  state = {
    isShowed: true
  }
  count = {
    isNumber: 0
  }

  render(){
    
    return(
      <>

      {this.state.isShowed&& <CountNum nameKey={{episode: 5, judul: 'asep'}} >Kedua</CountNum> }
      <button onClick={() =>this.setState({isShowed: !this.state.isShowed})}>Click Me</button>
      {/* <button onClick={() => this.setCount(count +1)}>Tambah</button> */}
      <button onClick={() => this.setCount(this.count.isNumber -1)}>Kurang</button>

      </>
    
    )

  }
}
export default App