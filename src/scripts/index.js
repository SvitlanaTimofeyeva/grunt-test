import React, {Component} from 'react'; 
import ReactDOM from 'react-dom'; 
import {Greeting} from './random_module';  
import '../css/random.css'; 

class Test extends Component {
	constructor() {
		super()
	}
	
	render() {
		return (
			<div className="wrapper">
				<Greeting title="HELLO"/>
			</div>
		)
	}
} 

ReactDOM.render(<Test />, document.getElementById('root')); 