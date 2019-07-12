import React from 'react';

import Comment from './Comment';
import withSubscription from './withSubscription';

const CommentList = props => {

	return (
		<div>
			<h4>The Comments</h4>

			<p>
				{props.commentListAdditionalsData}
			</p>

			{
				props.data.map(comment => <Comment comment={comment} key={comment.id}/>)
			}
		</div>
	);
};

export default withSubscription(CommentList, DataSource => DataSource.getComments());
