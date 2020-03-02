import React from 'react';
import Colors from'./colors.js';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


class App extends React.Component{

  state={
    id:"",
    quote:"",
    author:"",
    color:"darkblue"
  }

  componentDidMount(){
    let quote= Math.floor(Math.random() * Math.floor(501));
    fetch("https://programming-quotes-api.herokuapp.com/quotes",)
    .then(response=>response.json())
    .then(data=>{ this.setState({
      id:data[quote].id,
      quote:data[quote].en,
      author:data[quote].author
    })
    })
    .catch(error=>console.error)
    
  }

  chnangeQuote=event=>{
    this.componentDidMount()
    let mycolor=Math.floor(Math.random() * Math.floor(6));
    this.setState({
      color:Colors[mycolor]
    })
  }

render(){

  return(
    <div>
      <div style={{background:this.state.color, height:100+'%',padding:10+'%'+ 10+'%'+30+'%'+10+'%' }} >
  <div className='container'>

    <div  id="quote-box" className="  mx-auto center text-center " style={{width: 80 + '%' }}> 
    <div id="text" className="quote" style={{color:this.state.color }}>"{this.state.quote}"</div>
    <div id="author" className="author" style={{color:this.state.color }}>-{this.state.author}</div>
    <div className="row">
    <div className="col-1">
    <a id="tweet-quote"
  href={"https://twitter.com/intent/tweet?text=" + `${this.state.quote}` + - `${this.state.author}`}><i className=" twi fab fa-twitter-square"></i></a></div>
     <div className="col-8"></div>
      <div className="col-3" >
    <button onClick={this.chnangeQuote} className=" btn btn-primary" style={{background:this.state.color , fontSize:1+"em"}}><small>Next Quote</small></button></div>
    </div>
    
    </div>
    </div>
   </div>
   </div>
  )
}
}

export default App;

