//This is the subscription to the filter-collection publication
PeopleFilter = new Meteor.FilterCollections(People, {
    template: 'home',
    //this just tells filter-collections to filter by number first 
    sort: {
      order: ['desc', 'asc'],
      defaults: [
        ['number', 'desc']
      ]
    },
    filters: {
      type: {
        title: 'Type'
      },
      name: {
        title: 'Name',
        operator: {
          name: '$regex',
          options: 'i'
        },
        group: '$and',
        search: {
          enabled: true,
          active: true,
          mandatory: true
        }
      }
    }
});
