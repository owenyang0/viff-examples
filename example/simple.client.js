var ViffClient = require('viff-client');

var client = new ViffClient('http://localhost:3000', {
  name: 'build',
  host: 'http://localhost/',
  capabilities: 'firefox'
});

var client1 = new ViffClient('http://localhost:3000', {
  name: 'prod',
  host: 'http://localhost1/',
  capabilities: 'firefox'
});


client.post({ 'description': ['/path', 'selector'] }, 'example/demo.jpg', function () {
  client1.post({ 'description': ['/path', 'selector'] }, 'example/demo.jpg', function () {
    console.log('Done.');
  });
});
