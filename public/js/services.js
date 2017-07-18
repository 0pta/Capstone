app.service("ItemService",['$resource', function($resource){
    return $resource('/api/items/:id', { id: '@_id' }, {
       update: {
         method: 'PUT' // this method issues a PUT request
       }
     })
}])
