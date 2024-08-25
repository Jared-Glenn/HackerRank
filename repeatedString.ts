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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s: string, n: number): number {
    // Write your code here
    const fullIterations: number = Math.floor(n/(s.length));
    const extra: number = (n%s.length) - 1;
    let totalAs: number = 0;

    console.log("s:", s);
    console.log("n:", n);
    console.log("fullIterations:", fullIterations);
    console.log("extra:", extra);

    for (let i = 0; i <= s.length; i++) {
        if (s[i] === "a") {
            console.log("i:", i)
            if (i <= extra) {
                totalAs += (fullIterations + 1);
            }
            else {
                totalAs += fullIterations;
            }
        }
    }
    return totalAs;
}
