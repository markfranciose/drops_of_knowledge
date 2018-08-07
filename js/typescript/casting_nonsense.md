```Property 'usefulProperty' does not exist on type '{}'```
Cast the object to the any type:
```javascript
var cmonNow = <any>{};
```

``` Property 'value' does not exist on value type 'HTMLElement'```
Cast to HTMLInputElement:
```javascript
var noClue = (<HTMLInputElement>document.getElementById(elementId)).value;
```

