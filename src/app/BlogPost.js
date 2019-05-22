import React from 'react';

import TextBlock from './TextBlock';
import withSubscription from './withSubscription';

class BlogPost extends React.Component {

	/*
	constructor(props) {
		super(props);

		console.info(JSON.stringify(props, null, '\t'));
	}
	*/

	render() {
		return (
			<div>
				<h4>The Blog</h4>

				<p>
				{this.props.blogPostAdditionalsData}
				</p>

				<TextBlock text={this.props}/>
			</div>
		);
	}
}

export default withSubscription(BlogPost, (DataSource, props) => {
	//console.info(JSON.stringify(props, null, '\t'));
	//console.info(JSON.stringify(props.id, null, '\t'));

	return DataSource.getBlogPost(props.id)
});
