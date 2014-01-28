HomeFilter = new Meteor.FilterCollections(People, {
  name: 'people-full',
  template: 'home',
  sort: {
    order: ['desc', 'asc'],
    defaults: [
      ['number', 'desc']
    ]
  },
  filters: {
    "group": {
      title: 'Group',
      condition: '$and',
      searchable: 'optional'
    },
    "random_number": {
      title: 'Random Number',
      condition: '$and',
      transform: function (value) {
        return parseFloat(value);
      },
      sort: 'desc'
    },
    "number": {
      title: 'Number',
      condition: '$and',
      transform: function (value) {
        return parseFloat(value);
      },
      sort: 'desc'
    },
    "name": {
      title: 'Name',
      operator: ['$regex', 'i'],
      condition: '$and',
      searchable: 'required'
    },
    "corporate_group.gender": {
      title: 'Gender',
      operator: ['$regex', 'i'],
      condition: '$and',
      searchable: 'optional'
    },
    "corporate_group.hobbies": {
      title: 'Hobbies',
      operator: ['$regex', 'i'],
      condition: '$and',
      searchable: 'optional'
    }
  },
});
