// CENTCON_TileMove.cs
// Centcon의 맵을 회전하는 일명 "회전초밥 맵"의 프로토타입 소스코드.
// C#으로도 프로토타입 프로그래밍입니다.

using System;
using System.Threading;

namespace ConsoleApp1
{
    class Program
    {
        // 왼쪽으로 맵 이동 메소드
        static void TileMoveLeft(string[] _Tile)
        {
            string _Tiled_Length = _Tile[1]; // 첫번째 타일맵 가져오기
            
            // 모든 값 불러오기
            for (int j = 1; j < 5; j++)
            {
                // 왼쪽으로 이동
                _Tile[j] = _Tile[j + 1];
            }
            
            // 마지막 비어진 값은 첫번째 타일맵으로 변경
            _Tile[5] = _Tiled_Length;
        }

        // 오른쪽으로 맵 이동 메소드
        static void TileMoveRight(string[] _Tile)
        {
            string _Tiled_Length = _Tile[5]; // 마지막 타일맵 가져오기

            // 모든 값 불러오기
            for (int j = 5; j > 0; j--)
            {
                // 오른쪽으로 이동
                _Tile[j] = _Tile[j - 1];
            }
            
            // 첫번째 비어진 값은 마지막 타일맵으로 변경
            _Tile[1] = _Tiled_Length;
        }
        
        // 맵 출력 메소드
        static void TilePrint(string[] _Tile, int count, bool isRight)
        {
            for (int i = 0; i < count; i++)
            {
                Thread.Sleep(500); // 500초간 대기

                Console.WriteLine("\n");
                
                // 맵 출력
                for (int j = 0; j < _Tile.Length; j++)
                {
                    Console.Write(_Tile[j]);
                }
                
                // 오른쪽으로 이동 시, TileMoveRight 호출. 그렇지 않으면 TileMoveLeft 호출
                if (isRight)
                {
                    TileMoveRight(_Tile);
                }
                else
                {
                    TileMoveLeft(_Tile);
                }
            }
        }

        static void Main(string[] args)
        {
            // 결과 출력
            string[] _Tile = { "[MIN] ", "WEAPON ", "ATTACK ", "NULL ", "DEFENSE ", "HEALTH ", "[MAX]" };
            TilePrint(_Tile, 3, true); // 3번 호출, 오른쪽으로 이동.
        }
    }
}
