import data from './data';

export default {
	getComments: () => {
		//console.info(JSON.stringify(data, null, '\t'));
		//console.info(JSON.stringify(data.comments, null, '\t'));

		return data.comments;
	},
	getBlogPost: id => {
		//console.info(JSON.stringify(id, null, '\t'));
		//console.info(JSON.stringify(data.posts[id], null, '\t'));

		return data.posts[id];
	},
	addChangeListener: () => null,
	removeChangeListener: () => null,
};