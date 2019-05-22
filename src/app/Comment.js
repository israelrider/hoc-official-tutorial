import React from 'react';

class Comment extends React.Component {

	/*
	constructor(props) {
		super(props);

		console.info(JSON.stringify(props, null, '\t'));
	}
	*/

	render() {
		return (
			<p>
				{JSON.stringify(this.props)}
			</p>
		);
	}
}

export default Comment;
