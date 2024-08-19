'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c: number[]): number {
    // Write your code here
    let jumps: number = 0;
    let curCloud: number = 0;
    
    if (c[0] === 1) {
        jumps = 1;
        curCloud = 1;
    };

    while (curCloud < c.length - 1) {
        if (curCloud === c.length - 2) {
            curCloud += 1;
        }
        else if (c[curCloud + 2] === 0) {
            curCloud += 2;
        }
        else {
            curCloud += 1;
        }
        jumps += 1;
    }
    return jumps;

}

