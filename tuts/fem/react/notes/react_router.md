### Questions
Prototypal vs. Classical Inheritance
JS context

## React Router

react is agnostic to routing
react-router - popular choice

react en route? - stripped down router

if you had a non-extact path for '/'
'/cool'
would still catch. That's why you need the exact on the Route


Hash Router

<HashRouter>
is a higher order componenet - it does not render anything out, introduces behavior but no markup

The hash is up in the url
Looks ugly, bad for SEO

comes with back, forward... normal browser functionality

Browser Router

Make a 404 component.
Need to use the Switch component.
WHat teh switch component does is tells 'render exactly one componenet'
Going to go in order and match the first one... otherwise it will go down and render each that fits.

Loading JSON data

with an arrow function if you have one and only one parameter, the parens are optional.

Making a ShowCard Component

two allie?
template literals in ES6?

deterministic - given the same props, the component should look the same.
date example, should be read from the props

## Prop Types

Using Flow supersceedes using prop types

## Using the Spread Operator in JSX
3:58 - showing how this could be done...
not something that you should do... 

## Key Prop
If you're doing some kind of sort... don't want to re-render the entire page... that's inefficient.
Just re-order the nodes that are already on the DOM.
typically going to be some kind of ID.

## Styled Components
Different CSS/JSS libs
Glamor, Glamourous
Need to be parsed twice. Not as optimized.
You pretty much never delete CSS. Stylesheets grow to be huge. Once you write a rule, hard to pull it out.
If you are doing something like styled componenets. If you don't use the component you don't use the CSS.

## One-Way Data Flow
A child can accept data from the parents, cannot throw it up.
If there is a problem with the parent, you know its not the children.
Good for debugability and maintainability

## Q&A Key and Styled Components
The styled components can use SASS and LESS.
Tradeoffs in using styled components

## Managing State
Props object is immutable
A component can keep track of its state. Only a component can change its own state.
Search can't modify ShowCard's state
So far we've been using 'stateless functional components' - there is no way to give them state.

use the ES6 class way:
React Component classes must have a render method and the method must return markup

don't do this.state.searchTerm = 'blah', this will change state. but react won't know. Will not re-render.
do not modify state directly.

## transform-class-properties
New Features to JS 0,1,2,3,4
stage 2 = prolly, 
stage 4 = has made it

There is some level of danger to doing it this way.

add plugin

~2.5 mins - process of doing this.
+ 11.5 changing eslint config

'event.target.value'

## Filtering

React paradigm: If you put in this state, this component is always going to look like this.
The transform-class-properties way works better with flow

## QA

Q1 - App could be stateful and pass down the search term to the components.


# Testing React

## Snapshot Testing with Jest

**note: version 1 of this tut has some info about testing mobile**

## Configuring & Running Jest
