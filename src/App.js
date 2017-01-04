import React, { Component } from 'react';
import cookie from './cookie.png';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			compteur: 0,
			troll: ['bloublou','la loose man','ici la terre ','canaille'],
		}

	}
	incre(){
		this.setState({
			compteur: this.state.compteur + 1,

		});
		console.log('plop');
		this.trollSpoted();
	}

	trollSpoted(){
		console.log('gg');
		if(this.state.compteur % 4 === 0){
			let rand = this.state.troll ;
			alert(rand[Math.floor(Math.random()*rand.length)]);

		};
	}



	render(){
		return(<div> <img className="cookie" onClick={this.incre.bind(this)} src={cookie} alt="click me"/>
			<div className="cssTest">
			<h1>{this.state.compteur}</h1>
			</div>
			</div> )
	}
}

export default App;
