import { componentClass } from '../componentClass'

// TODO: Determine how to test that the
// returned component class is correct.

// TODO: Make importable to keep DRY.
const DEFAULT_SETUP = {
	component: () => () => (
		<div>foo</div>
	),
	methods: {
		testMethod() { }
	},
	lifecycle: {
		componentWillMount() { }
	},
	state: {}
}

test('it generates the proper component', () => {
	const component = componentClass('STUB', DEFAULT_SETUP)
	expect(component.name).toBe('STUB')
})