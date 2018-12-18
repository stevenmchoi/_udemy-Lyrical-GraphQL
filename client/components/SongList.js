import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
	renderSongs() {
		const songs = this.props.data.songs;
		return songs.map((song) => <li>{song.title}</li>);
	}

	render() {
		return this.props.data.loading ? (
			<div>Loading...</div>
		) : (
			<div>{this.renderSongs()}</div>
		);
	}
}

const query = gql`
	{
		songs {
			title
		}
	}
`;

export default graphql(query)(SongList);
