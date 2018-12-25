import React, { Component } from 'react';

class LyricCreate extends Component {
	constructor(props) {
		super(props);

		this.state = { content: '' };
	}

	onSubmit(event) {
		event.preventDefault();
		console.log(event);
		this.setState({ content: '' });
	}

	render() {
		return (
			<form onSubmit={this.onSubmit.bind(this)}>
				<lable>Add a Lyric</lable>
				<input
					value={this.state.content}
					onChange={(event) => this.setState({ content: event.target.value })}
				/>
			</form>
		);
	}
}

export default LyricCreate;
