Use ```*ngFor``` without a ```div```
```javascript
	<ng-container *ngIf="..something">
	</ng-container>
``` 

Attribute binding syntax:
( you need the ```attr.<property>```, not just ```property``` )
```html
<ol class="viewer-nav"><li *ngFor="let section of sections" 
    [attr.data-sectionvalue]="section.value">{{ section.text }}</li>  
</ol>
```
