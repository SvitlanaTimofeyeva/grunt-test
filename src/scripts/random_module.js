import React, {Component} from 'react'; 

class Greeting extends Component {
	render() {
		return (
			<div className="some-class">
				<h1 className="another-class">{this.props.title}</h1>
			</div>
		)
	}
} 

export {Greeting}; 