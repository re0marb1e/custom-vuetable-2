export default [
  {
    name: '__checkbox', // '__sequence', '__handle', '__checkbox'
    title: '#',
    dataClass: 'text-left',
    titleClass: 'text-center'
  }, {
    name: 'name',
    sortField: 'name',
    dataClass: 'text-left'
  }, {
    name: 'email',
    sortField: 'email',
    dataClass: 'text-left'
  }, {
    name: 'birthdate',
    dataClass: 'text-left'
  }, {
    name: 'age',
    sortField: 'birthdate',
    dataClass: 'text-left'
  }, {
    name: 'nickname',
    callback: 'allcap'
  }, {
    name: 'gender',
    callback: 'genderLabel'
  }, {
    name: 'salary',
    visible: false
  }
]
