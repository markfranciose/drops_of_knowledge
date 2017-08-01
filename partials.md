## My code Examples:

- [AJAX checkpoint:](https://github.com/chi-fiery-skippers-2017/ajax-checkpoint-challenge/tree/solo-markfranciose-rf/app/views) Using partials for show and new pages - controller & ajax might not be correct... look @ views
- [Craigslist Jr:](https://github.com/chi-fiery-skippers-2017/craigslist-jr-challenge/tree/solo-markfranciose/app/views)
 Example of an errors parial
 
## Snippets

#### Syntax for using a partial (inside a view)

```ruby <%= erb(:"/horses/_show") %>```

#### Return a partial (~AJAX)
```ruby
# remember to not bring in the layout if you're returning a partial
erb :horsey, layout: false
```
