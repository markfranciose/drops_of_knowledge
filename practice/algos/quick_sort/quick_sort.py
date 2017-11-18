def quick_sort(arr):

    if len(arr) < 2:
        return arr

    pivot = arr.pop()
    left = []
    right = []

    for num in arr:
        if num > pivot:
            right.append(num)
        else:
            left.append(num)
    return quick_sort(left) + [pivot] + quick_sort(right)

arr = [1,2,2,1,2,1,5,23,1,91,2,4,1,]

print(quick_sort(arr))
