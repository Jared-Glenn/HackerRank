function hourglassSum(arr: number[][]): number {
    // Write your code here
    let bestHourGlass: number = Number.NEGATIVE_INFINITY;
    let curHourGlass: number;
    let patternArr: number[][] = [[0, 0], [0, 1], [0, 2],
     [1, 1], [2, 0], [2, 1], [2, 2]];
    
    for (let down = 0; down<= 3; down++) {
        for (let right = 0; right<=3; right++) {
            curHourGlass = 0;
            for (let coord = 0; coord<=6; coord++) {
                curHourGlass += arr[down + patternArr[coord][0]]
                [right + patternArr[coord][1]]
            }
            if (curHourGlass > bestHourGlass) {
                bestHourGlass = curHourGlass;
            }
        }
    }
    return bestHourGlass;
}