import React from 'react'
import { shallow } from 'enzyme'

import psymon from '../index'
import { Foo as component } from './Foo'

const STUB = 'STUB'

const innerJSX = <div><p>STUB</p></div>

const state = {
	foo: true
}

const TestComp0 = psymon.component('TestComp0', {
	component,
	lifecycle: {}
})

const TestComp1 = psymon.component('TestComp1', {
	component,
	methods: {}
})

const TestComp2 = psymon.component('TestComp2', {
	component,
	state
})

const TestComp3 = psymon.component('TestComp3', {
	component
})

const TestComp4 = psymon.component('TestComp4', {
	component
}, true)

const TestComp5 = psymon.component('TestComp5', {
	component,
	methods: {},
	lifecycle: {},
	state
})

const TestComp6 = psymon.component('TestComp6', {
	component,
	methods: {},
	lifecycle: {},
	state
}, true)

test('creates a stateful component with { lifecycle }', () => {
	const wrapper = shallow(<TestComp0 text={STUB} />);
	const instance = wrapper.instance();

	expect(wrapper).toContainReact(innerJSX);
	expect(instance).toBeInstanceOf(React.Component)
})

test('creates a stateful component with only { methods }', () => {
	const wrapper = shallow(<TestComp1 text={STUB} />);
	const instance = wrapper.instance();

	expect(wrapper).toContainReact(innerJSX);
	expect(instance).toBeInstanceOf(React.Component)
})

test('creates a stateful component with only { state } ', () => {
	const wrapper = shallow(<TestComp2 text={STUB} />);
	const instance = wrapper.instance();

	expect(wrapper).toContainReact(innerJSX);
	expect(instance).toBeInstanceOf(React.Component)
})

test('creates a stateless component with only { component }', () => {
	const wrapper = shallow(<TestComp3 text={STUB} />);
	// TODO: Test statelessness?
	expect(typeof TestComp3).toBe('function')
	expect(wrapper).toContainReact(innerJSX);
})

test('creates a pure component with only { component }', () => {
	const wrapper = shallow(<TestComp4 text={STUB} />);
	const instance = wrapper.instance();

	expect(wrapper).toContainReact(innerJSX);
	expect(instance).toBeInstanceOf(React.PureComponent)
})

test('creates a stateful component with { lifecycle, methods, state }', () => {
	const wrapper = shallow(<TestComp5 text={STUB} />);
	const instance = wrapper.instance();

	expect(wrapper).toContainReact(innerJSX);
	expect(instance).toBeInstanceOf(React.Component)
})

test('creates a pure component with { lifecycle, methods, state }', () => {
	const wrapper = shallow(<TestComp6 text={STUB} />);
	const instance = wrapper.instance();

	expect(wrapper).toContainReact(innerJSX);
	expect(instance).toBeInstanceOf(React.PureComponent)
})