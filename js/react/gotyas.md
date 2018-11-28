### the ```for``` attribute that is used in ```label``` is ```htmlFor```

```javascript
// this is the HTML
<label for="dog-box">How cool is this dog?</label>
<input type="text" id="dog-box" />

// In React it becomes this:
<label htmlFor="dog-box">
		How cool is this dog?
</label>
<input type = "text"
			 id   = "dog-box" />
```
