## Closure
### defns:
	1. A function that has a pointer reference to a free variable. A free variable is one that has fallen out of scope after its parent function has returned. If the outer function has a reference to the free variable (normally through a function that gets returned or a method property), the inner variable will not get garbage collected because it will ahev a non-zero reference count. So, from outside the function, we can still access the inner variable by means of the closure.
