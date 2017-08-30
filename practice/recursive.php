function fibo($n){
	if ($n < 2) {
		return 1;
	}
	return fibo($n - 1) + fibo($n - 2);
}

echo fibo(3);
echo fibo(4);
echo fibo(5);

function facto($n){
	if ($n < 2) {
		return 1;
	}
	return $n * facto($n - 1);
}

echo facto(3);
echo facto(4);
echo facto(5);