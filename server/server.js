//creates FilterCollections publication
Meteor.FilterCollections.publish(People, {
  name: 'people-full'
});

Meteor.FilterCollections.publish(People, {
  name: 'people-lite'
});

Meteor.startup(function () {

  // Create People fake data
  People.remove();
  //this code inputs data if there is none
  if (People.find().count() < 10000) {
    //adds arbitrary data.  change this for different filterable columns
    for (var i = 0; i < 10000; i++) {
      var number = Math.floor(Math.random() * 1000000);
      if (i % 2 === 0) {
        People.insert({
          name: 'Kris ' + i,
          number: i,
          group: 'Even',
          random_number: number,
          corporate_group: {
            title: Math.random() < 0.5 ? 'Mr.' : 'Mrs.',
            gender: Math.random() < 0.5 ? 'Male' : 'Female',
            hobbies: [
              'fishing',
              'coding'
            ]
          }
        });
      } else {
        People.insert({
          name: 'Sam ' + i,
          number: i,
          group: 'Odd',
          random_number: number,
          corporate_group: {
            title: Math.random() < 0.5 ? 'Mr.' : 'Mrs.',
            gender: Math.random() < 0.5 ? 'Male' : 'Female',
            hobbies: [
              'Coding',
              'Sleeping'
            ]
          }
        });
      }
    }
  }
});
