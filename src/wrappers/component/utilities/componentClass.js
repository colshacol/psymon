import { Component, PureComponent } from 'react';

import { applyClassMethods } from './applyClassMethods'

export const componentClass = (name, setup, pure) => {
	const _name = name || (pure ? 'PsymonPureComponent' : 'PsymonComponent');
	const Wrapper = class extends (pure ? PureComponent : Component) {
		constructor(props) {
			super(props);

			this.state = setup.state;
			this.displayName = _name;

			applyClassMethods(this)(setup);
		}

		render() {
			return setup.component(this)(this.props);
		}
	};

	Object.defineProperty(Wrapper, 'name', {
		value: _name
	});

	return Wrapper;
};