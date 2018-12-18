import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
	renderSongs() {
		const songs = this.props.data.songs;
		// console.log(data);

		if (songs) {
			return songs.map((song) => song.title);
		}
	}

	render() {
		return <div>{this.renderSongs()}</div>;
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
