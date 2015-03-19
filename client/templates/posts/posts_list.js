var postsData = [
	{
		title: 'Introducing Telescope',
		url: 'http://sachagrief.com/introducing-telescope/'
	},
	{
		title: 'Meteor',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	},
	{
		title: 'BBC',
		url: 'http://www.bbc.co.uk'
	}
];
Template.postsList.helpers({
	posts: postsData
});