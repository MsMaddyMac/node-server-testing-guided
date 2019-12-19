const request = require('supertest'); // need this to test the server

const server = require('./server'); // need to import the server to use it in test

describe('server.js', function() {
	describe('environment', function() {
		it('should set environment to testing', function() {
			expect(process.env.DB_ENV).toBe('testing');
		});
	});

	describe('GET /', function() {
		it('should return a 200 OK', function() {
			// spin up the server
			return request(server) // needs to use 'return' for asynchronous functions otherwise the test will pass everytime even when it shouldn't.
				.get('/')
				.then(res => {
					expect(res.status).toBe(200); // test to see it fails by passing a different code 404, 500...
				});
			// make a GET request to '/'
			// look at the http status code for the response
		});

		it('should return a JSON', function() {
			return request(server)
				.get('/')
				.then(res => {
					expect(res.type).toMatch(/json/i); //test to see it fails first by passing '/html/i' first
				});
		});

		it('should return a JSON', function() {
			return request(server)
				.get('/')
				.then(res => {
					expect(res.body.api).toMatch('up'); //test to see it fails first by passing 'down' first
				});
		});

		it.skip('auth example', function() { // use .skip to skip test so you don't get failures. This is just an example of a test you use for the login endpoint
			return request(server)
				.post('/login')
				.send({ username: 'me', password: 'pass' })
				.then(res => {
					const token = res.body.token;

					return request(server)
						.get('/')
						.set('Authorization', token)
						.then(res => {
							expect(Array.isArray(res.body)).toBe(true); //test to see it fails first by passing 'down' first
						});
				});
		});
	});
});
