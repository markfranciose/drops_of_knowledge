React Router

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

Prop Types

Using Flow supersceedes using prop types

## Using the Spread Operator in JSX
3:58 - showing how this could be done...
not something that you should do... 
