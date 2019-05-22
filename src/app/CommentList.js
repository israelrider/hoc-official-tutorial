import React from 'react';

import Comment from './Comment';
import withSubscription from './withSubscription';

class CommentList extends React.Component {

	/*
	constructor(props) {
		super(props);

		console.info(JSON.stringify(props, null, '\t'));
	}
	*/

	render() {
		return (
			<div>
				<h4>The Comments</h4>

				<p>
					{this.props.commentListAdditionalsData}
				</p>

				{this.props.data.map(comment => (
					<Comment comment={comment} key={comment.id}/>
				))}
			</div>
		);
	}
}

export default withSubscription(CommentList, DataSource => {
	//console.info(JSON.stringify(DataSource.getComments(), null, '\t'));

	return DataSource.getComments();
});
