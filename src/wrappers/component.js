import { Component, PureComponent } from 'react';

import { entriesOf } from '../utilities/entriesOf';

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

export const component = (
	name: string,
	setup: SetupT = defaultSetup,
	pure: boolean = false
) => {
	return class PsymonComponent extends (pure ? PureComponent : Component) {
		constructor(props) {
			super(props);

			const self = this;
			self.state = setup.state;
			self.displayName = name;

			entriesOf([setup.methods, setup.lifecycle]).forEach((method) => {
				self[method[0]] = method[1](self);
			});
		}

		render() {
			const self = this;
			const { props } = self;
			return setup.component(self)(props);
		}
	};
};
