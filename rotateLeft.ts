function reverse(arr: number[], start: number, end: number): number[] {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

function rotLeft(a: number[], d: number): number[] {
    reverse(a, 0, (a.length - 1));
    reverse(a, 0, (a.length-d-1));
    reverse(a, (a.length-d), (a.length-1));

    return a;
}