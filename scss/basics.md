Nesting: 
```scss
container {
    background:red;
    &.desc{
       background:blue;
    }
}

/* compiles to: */
.container {
    background: red;
}
.container.desc {
    background: blue;
}
```
