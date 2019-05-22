import React from 'react';

import CommentList from './CommentList';
import BlogPost from './BlogPost';

class App extends React.Component {

	render() {
		return (
			<div className="wrapper">
				<CommentList commentListAdditionalsData="The comment list additional data."/>
				<BlogPost blogPostAdditionalsData="The blog post additional data." id={'firstPostId'}/>
			</div>
		);
	}
}

export default App;
