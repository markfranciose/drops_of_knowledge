function foo(baz, bam) {
	console.log(this.bar + " " + baz + " " + bam);
}

var obj = { bar: "bar"};
foo1 = foo.bind(obj, "baz");

foo1("bam");

foo2 = foo.bind(obj, "baz2", "bam2");
foo2();
