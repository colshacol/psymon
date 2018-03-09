import { functional } from '../functional'

const STUB = 'STUB'
const component = () => () => { }

test('it applies displayName to component', () => {
	const result = functional(STUB, component)
	expect(result.displayName).toEqual(STUB)
})