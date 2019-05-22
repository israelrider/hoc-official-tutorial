import React from 'react';

import DataSource from './DataSource';

// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
	// ...and returns another component.
	return class extends React.Component {

		constructor(props) {
			super(props);

			// console.info(JSON.stringify(props, null, '\t'));

			this.state = {
				data: selectData(DataSource, props)
			};

			this.handleChange = this.handleChange.bind(this);
		}

		componentDidMount() {
			// ... that takes care of the subscription.
			DataSource.addChangeListener(this.handleChange);
		}

		componentWillUnmount() {
			DataSource.removeChangeListener(this.handleChange);
		}

		handleChange() {
			this.setState({
				data: selectData(DataSource, this.props)
			});
		}

		render() {
			// ... and renders the wrapped component with the fresh data.

			// Notice that we pass through any additional props.
			return <WrappedComponent data={this.state.data} {...this.props}/>;
		}
	};
}

export default withSubscription
