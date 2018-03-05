# psymon

## `psymon` says `this` is deprecated.

Class based React components are often misused. They can grow to become thousands of lines of code which costs people time and businesses money. Furthermore; stateful components are rarely tested correctly.

`psymon` aims to make it simple to piece stateful components together in a fucntional way that allows maximum modularity and testability. Essentially, whereas React componentizes the UI, `psymon` componentizes your UI logic.

## API

### `psymon.component`

TODO

### `psymon.pureComponent`

TODO

---

## Usage Example

```javascript
// index.js

import psymon from 'psymon';

import { component } from './component';
import * as lifecycle from './lifecycle';
import * as methods from './methods';

const state = {
	inputValue: '',
	todos: []
};

export const TodoList = psymon.component('TodoList', {
	component,
	lifecycle,
	methods,
	state
});
```

```javascript
// ./lifecycle.js

export const componentDidUpdate = (self) => () => {
	// Whatever you want to do after update.
	// Use the `self` reference provided, not `this`.
};
```

```javascript
// ./methods.js

export const setInputValue = (self) => (event) => {
	self.setState({
		inputValue: event.currentTarget.value
	});
};

export const addTodo = (self) => () => {
	self.setState({
		todos: [...self.state.todos, self.state.inputValue],
		inputValue: ''
	});
};

export const removeTodo = (self) => (index) => {
	self.setState({
		todos: self.state.todos.filter((todo, i) => i !== index)
	});
};
```

---

## TODO

* Testing. (Created on CodeSandbox as a simple experiment.)
