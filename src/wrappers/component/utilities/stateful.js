import { hasStatefulSetup } from './hasStatefulSetup'
import { componentClass } from './componentClass'

export const stateful = (name, setup, pure) => {
	return hasStatefulSetup(setup, pure) && componentClass(name, setup, pure);
}