import { entriesOf } from '../entriesOf'

const DATA = [
	{
		a: true
	},
	{
		b: false
	}
]

test('generates the correct array', () => {
	const result = entriesOf(DATA)
	expect(result).toEqual([['a', true], ['b', false]])
})