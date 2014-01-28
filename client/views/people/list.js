PeopleFilter = new Meteor.FilterCollections(People, {
  name: 'people-lite',
  template: 'peopleList',
  filters: {
    "name": {
      title: 'Name',
      operator: ['$regex', 'i'],
      condition: '$and',
      searchable: 'required'
    }
  },
});
