import { applyClassMethods } from '../applyClassMethods'

const DEFAULT_SETUP = {
	methods: {
		testMethod() { }
	},
	lifecycle: {
		componentWillMount() { }
	}
}

const self = {}

test('it applies properties to self', () => {
	applyClassMethods(self)(DEFAULT_SETUP)
	expect(self.hasOwnProperty('componentWillMount')).toBe(true);
	expect(self.hasOwnProperty('testMethod')).toBe(true);
})