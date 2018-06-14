Labels: 
```html
<form>
  <!-- inliner -->
  <label>Dog Name: <input type="text"></label>
  <!-- for attribute -->
  <label for="dog-name">Name Your Dog!</label>
  <input type="text" id="dog-name">
</form>
```

### Select

Set a default, unselectable value for a select field:
```html
<select>
		<option value="" disabled selected>Select an option<option>
		<option value="real-value">Real Value</option>
</select>
```


### Inputs

#### Radio

example: 
```html
	<form>
		<p>Please select your favorite Dog:</p>
		<div>
			<input type="radio" id="fluffy"
			 name="dog" value="fluffy">
			<label for="fluffy">Email</label>

			<input type="radio" id="tbonez"
			 name="dog" value="tbonez">
			<label for="tbonez">Phone</label>

			<input type="radio" id="rex"
			 name="dog" value="rex">
			<label for="rex">Mail</label>
		</div>
		<div>
			<button type="submit">Submit</button>
		</div>
	</form>
```	

#### The ```value``` attribute
the ```value``` attribute is used differently for different input types.
```html
  <!-- Can set the text on the element-->
	<input type="button" value="text on the button" />
	<input type="reset" value="text on the button" />
	<input type="submit" value="text on the button" />

  <!-- Can set the initial value of the field-->
	<input type="text" value="starting point" />
	<input type="password" value="starting point" />
	<input type="hidden" value="starting point" />
	
	<!-- Can set the value associated with the input / What is sent on submit -->	
		<!-- if default value is ommited for checkbox, value passed is 'on' -->
	<input type="checkbox" value="starting point" />
		<!-- see radio section for a longer, more descriptive example with radio -->
	<input type="radio" value="starting point" />
	<input type="image" value="starting point" />


```
