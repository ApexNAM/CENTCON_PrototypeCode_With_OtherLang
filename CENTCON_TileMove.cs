using System;

namespace ConsoleApp1
{
    class Program
    {
        
        static void TileMoveLeft(string[] _Tile, int timeCount)
        {
            for (int i = 0; i < timeCount; i++)
            {
                string _Tiled_Length = _Tile[1];

                for (int j = 1; j < 5; j++)
                {
                    _Tile[j] = _Tile[j + 1];
                }

                _Tile[5] = _Tiled_Length;
            }
        }

        static void TileMoveRight(string[] _Tile, int timeCount)
        {
            for (int i = 0; i < timeCount; i++)
            {
                string _Tiled_Length = _Tile[5];
                
                for (int j = 5; j > 0; j--)
                {
                    _Tile[j] = _Tile[j - 1];
                }

                _Tile[1] = _Tiled_Length;
            }
        }

        static void Main(string[] args)
        {
            string[] _Tile = { "MIN", "WEAPON", "ATTACK", "NULL", "DEFENSE", "HEALTH", "MAX" };

            for (int i = 0; i < _Tile.Length; i++)
            {
                Console.WriteLine(_Tile[i]);
            }

            Console.WriteLine("\n");
            TileMoveLeft(_Tile, 3);

            for (int i = 0; i < _Tile.Length; i++)
            {
                Console.WriteLine(_Tile[i]);
            }

            Console.WriteLine("\n");
            TileMoveRight(_Tile, 3);

            for (int i = 0; i < _Tile.Length; i++)
            {
                Console.WriteLine(_Tile[i]);
            }
        }
    }
}
