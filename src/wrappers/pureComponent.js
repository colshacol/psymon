import { component } from './component';

type ObjectOfAnyT = {
	[name: string]: any
};

type ObjectOfFunctionsT = {
	[name: string]: Function
};

type SetupT = {
	state: ObjectOfAnyT,
	methods: ObjectOfFunctionsT,
	lifecycle: ObjectOfFunctionsT,
	component: React.ComponentType
};

const defaultSetup = {
	lifecycle: {},
	methods: {},
	state: {}
};

export const pureComponent = (name: string, setup: SetupT) => {
	return component(name, setup, true);
};
