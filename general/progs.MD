## Redux
#### WI
JS
#### repo
https://github.com/reactjs/redux
### What it is?
A JS library that manages the state of an application in a consistent and practical way. Simpler implementation of the Flux pattern. It implements concepts of fuctional programming, inspired by Elm. 

### Examples:
```
// Everything is stored in a plain JavaScript Object.

{
	todos: [{
		text: 'Eat food',
		completed: true
	}, {
		text: 'Exercise',
		completed: false
	}]
}

// To perform a change we have to dispatch an Action. These are plain JS Objects.

{ type: 'ADD_TODO', text: 'Go to the swimming pool' }
{ type: 'TOGGLE_TODO', index: 1 }

// Usually create functions that return these objects. Called Action Creators.

function addTodo(text = '') {
	return { type: 'ADD_TODO', text }
}
function toggleTodo(index = 0) {
	return {type: 'TOGGLE_TODO', index }
}

// Reducers: To modify the state we use plain functions. They return the new state according to the dispateched action. 

function todos(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([{ text: action.text, completed: false }])
		case 'TOGGLE_TODO':
			return state.map(
				(todo, index) =>
					action.index === index
						? { text: todo.text, completed: !todo.completed }
						: todo
			)
		default:
			return state
	}
}

// You can organize the state with composable reducers and combine them to a bigger one:

function todoApp(state = {}, action) {
	return {
		todos: todos(state.todos, action),
		files: files(state.files, action),
		folders: folders(state.folders, action),
		notifications: notifications(state.notifications, action),
		filter: filter(state.filter, action),
		searchField: searchField(state.searchField, action),
		...
	}
}

// Store. To use Redux you have to create a store. This object manages everything. We initialize it with our root reducer.

import { createStore } from 'redux';
import todoApp from './reducers';

// create the store
let store = createStore(todoApp);

// read the state object
store.getState()

// dispatch actions that eventually modify the state
store.dispatch(addTodo('Learn about actions'))
store.dispatch(toggleTodo(0))

// Finally, the store needs to be subscribed to a listener. Every time we mutate the state it will notify your app:

// log state to the console every time it gets updated
let unsubscribe = store.suscribe(() =>
	console.log(store.getState())
)

// stop listening to state updates
unsubscribe()

```
## Selenium
#### WI
Java
#### repo
github.com/SeleniumHQ/selenium
### What it is?
A software testing framework for web applications. Tests run against most modern web browsers.

