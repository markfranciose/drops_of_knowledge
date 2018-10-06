can't bind to 'ngIf' since it isn't a known property of 'div'.
put CommonModule in imports
```javascript
import { CommonModule } from '@angular/common';  
//...
@NgModule({
  imports: [CommonModule],
  /...
})
class SomeComponentModule {}
```

```Can't bind to 'ngModel' since it isn't a known property of 'input'```
Put FormsModule in imports:
```javascript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
  ]
})
```
```'ion-icon' is not a known element```
same as above, include ```IonicModule``` in your imports
