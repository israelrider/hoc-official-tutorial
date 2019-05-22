import React from 'react';

class TextBlock extends React.Component {

	/*
	constructor(props) {
		super(props);

		console.info(JSON.stringify(props, null, '\t'));
	}
	*/

	render() {

		return (
			<p>
				{this.props.text.data}
			</p>
		);
	}
}

export default TextBlock;
