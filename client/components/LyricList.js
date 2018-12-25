import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
	renderLyrics() {
		return this.props.lyrics.map(({ id, content }) => {
			return (
				<li key={id} className="collection-item">
					{content}
					<i onClick={() => this.onLike(id)} className="material-icons">
						thumb_up
					</i>
				</li>
			);
		});
	}

	onLike(id) {
		console.log(id);
	}

	render() {
		return <ul className="collection">{this.renderLyrics()}</ul>;
	}
}

const mutation = gql`
	mutation LikeLyric($id: ID) {
		likeLyric(id: $id) {
			id
			content
			likes
			song {
				id
				title
			}
		}
	}
`;

export default graphql(mutation)(LyricList);
