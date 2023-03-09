const { rndBetween, rndString } = require('@laufire/utils/random');

const multiplier = 2;
const type = {
	number: (data) => data * multiplier,
	string: (data) => data + data,
};
const double = (date) =>
	type[typeof date](date);

describe('Double', () => {
	test('Multiple by two with the given number ', () => {
		const data = rndBetween();
		const expected = data * multiplier;

		const result = double(data);

		expect(result).toEqual(expected);
	});
	test('concat the given string ', () => {
		const data = rndString();
		const expected = data + data;

		const result = double(data);

		expect(result).toEqual(expected);
	});
});
