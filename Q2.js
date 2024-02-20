/*
Q2. Generate numbers between any 2 given numbers.
Example:
Const num1 = 10;
Const numI = I5;
Output: 11,12,13,......, 15 
*/

const num1 = 10;
const num2 = 25;

console.log(`Generated number are between ${num1} to ${num2} : `)

for (let i = num1+1 ; i <= 25 ; i++ )
{
    console.log(i)
}

/*Output :
Generated number are between 10 to 25 : 
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25 */