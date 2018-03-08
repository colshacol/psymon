import { entriesOf } from '../../utilities/entriesOf';

export const applyClassMethods = (self) => (setup) => {
	return entriesOf([setup.methods, setup.lifecycle]).map((method) => {
		self[method[0]] = method[1](self);
	});
}