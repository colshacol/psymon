import { functional } from './utilities/functional'
import { stateful } from './utilities/stateful'

const defaultSetup = {
	component: null,
	lifecycle: {},
	methods: {},
	state: {}
};

export const component = (
	name: string,
	setup: SetupT = defaultSetup,
	pure: boolean = false
) => {
	return stateful(name, setup, pure) || functional(name, setup.component);
}


