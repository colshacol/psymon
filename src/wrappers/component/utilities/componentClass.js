import { Component, PureComponent } from 'react';

import { entriesOf } from '../../utilities/entriesOf';

export const componentClass = (name, setup, pure) => {
	const _name = name || (pure ? 'PsymonPureComponent' : 'PsymonComponent');

	const Wrapper = class extends (pure ? PureComponent : Component) {
		constructor(props) {
			super(props);

			const self = this;
			self.state = setup.state;
			self.displayName = _name;

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

	Object.defineProperty(Wrapper, 'name', {
		value: _name
	});

	return Wrapper;
};