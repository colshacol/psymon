import { hasStatefulSetup } from '../hasStatefulSetup'

const SETUP0 = {
	lifecycle: {
		componentWillMount() { }
	}
}

const SETUP1 = {
	methods: {
		testMethod() { }
	}
}

const SETUP2 = {
	state: {}
}

test('it returns true if lifecycle provided', () => {
	const result = hasStatefulSetup(SETUP0, false)
	expect(result).toBe(true)
})

test('it returns true if methods provided', () => {
	const result = hasStatefulSetup(SETUP1, false)
	expect(result).toBe(true)
})

test('it returns true if state provided', () => {
	const result = hasStatefulSetup(SETUP2, false)
	expect(result).toBe(true)
})

test('it returns true if pure is true', () => {
	const result = hasStatefulSetup({}, true)
	expect(result).toBe(true)
})