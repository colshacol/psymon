import { functional } from './utilities/functional'
import { hasStatefulSetup } from './utilities/hasStatefulSetup'
import { componentClass } from './utilities/componentClass'

const DEFAULT_SETUP = {
	component: null,
	lifecycle: {},
	methods: {},
	state: {}
};

export const component = (
	name: string,
	setup: SetupT = DEFAULT_SETUP,
	pure: boolean = false
) => {
	return hasStatefulSetup(setup, pure) && componentClass(name, setup, pure) || functional(name, setup.component);
}


