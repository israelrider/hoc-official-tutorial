import data from './data';

export default {
	getComments: () => data.comments,
	getBlogPost: id => data.posts[id],
	addChangeListener: () => null,
	removeChangeListener: () => null,
};
