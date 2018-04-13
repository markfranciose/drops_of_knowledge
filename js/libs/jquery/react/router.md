#### Pass props to a <Route /> 

```javascript
<Route path="/abc" render={()=><DogWidget num="2" someProp={100}/>}/>
```

#### Pass URL params to class syntax Component:

```
// id = whatever the dynamic param is called
<DogTag name={this.props.match.params.id}>
```
