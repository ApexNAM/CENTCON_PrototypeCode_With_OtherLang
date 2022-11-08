// This code is saved as a record check due to the code reorganization.
// There is a reorganized source code file.
// Please refer to the CENTCON_indexDay2.ts source code.

// SkagoGames 2022. made in Skago.

let tiles : number[] = [0,1,2,3,4,5,6];
let direction : string[] = ["Left","Right"];

let currentPos = 3;
let currentDir : string = "정지";

let currentDice : number = 0;
let dicecount : number = currentDice;

function _movement()
{   
    console.log("~~~~~~~~~~~~~~~~~~");

    // 현재 위치 출력하기
    console.log("현재 : " + currentDir + " : " + currentPos);
    
    // 주사위 던지기
    currentDice = Math.floor(Math.random() * (6 - 1)) + 1;
    console.log("주사위 : " + currentDice);
    dicecount = currentDice; // 주사위 값에 따른 남은 움직임 턴

    // 주사위 홀짝에 따라 방향을 결정합니다.
    if (currentDice % 2 == 0) 
    {
        console.log("오른쪽으로 이동합니다.");
        currentDir = direction[1];

    } 
    else if (currentDice % 2 == 1) 
    {
        console.log("왼쪽으로 이동합니다.");
        currentDir = direction[0];
    }
    
    // 남은 움직임 턴이 종료될 때까지 움직임 진행.
    while (dicecount > 0)
    {
        dicecount--;

        // 왼쪽일 경우.
        if (currentDir == direction[0])
        {
            // 왼쪽 끝에 도달할 경우 방향을 변경.
            if (currentPos == tiles[1]) 
            {
                console.log("오른쪽으로 변경.");
                currentDir = direction[1];
                currentPos++;
            }
            else 
                currentPos--;


        } // 오른쪽일 경우.
        else if (currentDir == direction[1])
        {
            // 오른쪽 끝에 도달할 경우 방향을 변경.
            if (currentPos == tiles[5]) 
            {
                console.log("왼쪽으로 변경.");
                currentDir = direction[0];
                currentPos--;
            }
            else
                currentPos++;
        }

        // 위치 상태 보고
        console.log(currentDir + " : " + currentPos);
    }
    
    console.log("턴 종료!");
    console.log("~~~~~~~~~~~~~~~~~~");
}

_movement();



