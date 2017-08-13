export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  // this.server.loadFixtures();


    this.get('/kids');
    this.get('/kid/:id');
    this.get('/methods');
    this.get('/method');
    // this.post('/posts');
    this.get('/kids/:id');
    // this.put('/posts/:id'); // or this.patch
    // this.del('/posts/:id');

}
