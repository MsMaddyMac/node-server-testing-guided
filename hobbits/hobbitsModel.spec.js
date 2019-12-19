const Hobbits = require('./hobbitsModel'); // in order to test functions in the hobbitsModel
const db = require('../data/dbConfig'); // see you can use the test db

describe('hobbits model', function() {
	beforeEach(async () => {
		await db('hobbits').truncate();
	});

	describe('insert()', function() {
		it('should add the hobbit to the database', async function() {
			// tall insert, passing a hobbit object
			await Hobbits.insert({ name: 'Sam' });
			await Hobbits.insert({ name: 'Gaffer' });

			// check the database directly
			const hobbits = await db('hobbits');
			expect(hobbits).toHaveLength(2);
		});
	});
});
