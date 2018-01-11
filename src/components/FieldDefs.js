export default [
  {
    name: '__checkbox', // '__sequence', '__handle', '__checkbox'
    title: '#',
    dataClass: 'text-right',
    titleClass: 'text-center'
  }, {
    name: 'name',
    sortField: 'name'
  }, {
    name: 'email',
    sortField: 'email'
  }, {
    name: 'birthdate'
  }, {
    name: 'age',
    sortField: 'birthdate'
  }, {
    name: 'nickname',
    callback: 'allcap'
  }, {
    name: 'gender',
    callback: 'genderLabel'
  }, {
    name: 'salary',
    visible: false
  }, {
    // name: '__component:custom-actions',
    name: '__slot:actions',
    title: 'Actions',
    titleClass: 'text-center',
    dataClass: 'text-center'
  }
]
