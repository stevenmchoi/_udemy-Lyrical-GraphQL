import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
	constructor(props) {
		super(props);

		this.state = { content: '' };
	}

	onSubmit(event) {
		event.preventDefault();

		this.props.mutate({
			variables: {
				content: this.state.content,
				songId: this.props.songId,
			},
		});

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

const mutation = gql`
	mutation AddLyricToSong($content: String, $songId: ID) {
		addLyricToSong(content: $content, songId: $songId) {
			id
			title
			lyrics {
				content
			}
		}
	}
`;

export default graphql(mutation)(LyricCreate);
