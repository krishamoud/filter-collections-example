//This is the subscription to the filter-collection publication
// PeopleFilter = new Meteor.FilterCollections(People, {
//     template: 'home',
//     //this just tells filter-collections to filter by number first
//     sort: {
//       order: ['desc', 'asc'],
//       defaults: [
//         ['number', 'desc']
//       ]
//     },
//     filters: {
//       type: {
//         title: 'Type'
//       },
//       name: {
//         title: 'Name',
//         operator: {
//           name: '$regex',
//           options: 'i'
//         },
//         group: '$and',
//         search: {
//           enabled: true,
//           active: true,
//           mandatory: true
//         }
//       }
//     }
// });

PeopleFilter = new Meteor.FilterCollections(People, {
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
      searchable: 'optional'
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
