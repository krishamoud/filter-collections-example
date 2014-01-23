//creates a FilterCollections publication
Meteor.FilterCollections.publish(People, {

});

Meteor.startup(function () {
  //this code inputs data if there is none
  if (People.find().count() < 10000) {
    //adds arbitrary data.  change this for different filterable columns 
    for (var i = 0; i < 10000; i++) {
      var number = Math.floor(Math.random() * 10000);
      if (i % 2 == 0) {
        People.insert({
          name: 'Kris ' + i,
          number: i,
          group: 'even',
          random_number: number,
          corporate_group: {
            title: 'Mr.',
            gender: 'Male',
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
            title: 'Ms.',
            gender: 'Female',
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
