import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSongs from '../queries/fetchSongs';

class SongList extends Component {
	renderSongs() {
		const songs = this.props.data.songs;
		return songs.map((song) => (
			<li key={`${song.id}`} className="collection-item">
				{song.title}
			</li>
		));
	}

	render() {
		return this.props.data.loading ? (
			<div>Loading...</div>
		) : (
			<div>
				<ul className="collection">{this.renderSongs()}</ul>
				<Link to="/songs/new" className="btn-floating btn-large red right">
					<i className="material-icons">add</i>
				</Link>
			</div>
		);
	}
}

export default graphql(fetchSongs)(SongList);
