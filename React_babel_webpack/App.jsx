import React from 'react';

class App extends React.Component {

	constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from state",
         "content": "Content from App state..."
      }
   }

	render() {

		var myStyle = {
			backgroundColor: '#E5E5E5',
			height: 30,
			width: 200
		}

		return (
			<div>
				<h2 style = {myStyle}> {this.state.header}</h2>
				<Content contentText = {this.state.content}/>
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div> {this.props.contentText} </div>
		);
	}
}

export default App;