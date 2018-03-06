import { Meteor } from 'meteor/meteor';

import './../imports/api/users/server';

import  './../imports/startup/server';


Meteor.startup(() => {
	loadUsers()
});
