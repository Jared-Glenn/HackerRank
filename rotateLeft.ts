function reverse(arr: number[], start: number, end: number): number[] {
    while (start < end) {
        [arr[start], arr[end] = arr[end], arr[start]];
        start++;
        end--;
        console.log("Reverse:", arr);
    }
    return arr;
}

function rotLeft(a: number[], d: number): number[] {
    reverse(a, 0, (a.length - 1));
    console.log(a);
    reverse(a, 0, (a.length-d));
    console.log(a.length-d);
    console.log(a[a.length-d]);
    reverse(a, (a.length-d+1), (a.length-1));
    console.log(a.length-d+1);
    console.log(a[a.length-d+1]);

    return a;
}