def binary_search(arr, target):
    low = 0
    high = len(arr)
    while low <= high:
        middle = int((low + high) / 2)
        if arr[middle] == target:
            return middle
        if middle > target:
            high = middle - 1
        else:
            low = middle + 1

arr = [0,1,2,3,4,5,6]

print(binary_search(arr, 2))
