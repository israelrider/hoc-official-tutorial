import React from 'react';

import TextBlock from './TextBlock';
import withSubscription from './withSubscription';

const BlogPost = props => {

	return (
		<div>
			<h4>The Blog</h4>

			<p>
				{props.blogPostAdditionalsData}
			</p>

			<TextBlock text={props}/>
		</div>
	);
};

export default withSubscription(BlogPost, (DataSource, props) => DataSource.getBlogPost(props.id));
