const _Tile : number[] = [0,1,2,3,4,5,6,7,8];
const _Tile_Event : string[] = ["NULL_1","NULL_2","NULL_3","NULL_4","NULL_5","NULL_6","NULL_7"];

const _Dice : number[] = [3,4,5,6,7,8];

class Player
{
    private _Position : number;
    private _Direction : string;

    private _AttackPosition : number;

    constructor(_SetPos : number, _SetDir : string)
    {
        this._Position = _SetPos;
        this._Direction = _SetDir;

        this._AttackPosition = this._Position;
    }

    public OnPlayerMove() : void
    {
        if (this._Direction == "Left")
        {
            const _LastPosition : number = _Tile[1];

            if (this._Position < _LastPosition)
            {
                this._Direction = "Right";
                this._Position++;
            }   
            else 
            {
                this._Position--;
            }
        }

        else if (this._Direction == "Right")
        {
            const _LastPosition : number = _Tile.length - 1;

            if (this._Position >= _LastPosition)
            {
                this._Direction = "Left";
                this._Position--;
            }   
            else 
            {
                this._Position++;
            }

        }

        if (this._Position != _Tile[0] && this._Position != _Tile.length - 1)
            console.log("현재 방향 : " + this._Direction + ", 현재 위치 : " 
            + this._Position + ", " + _Tile_Event[this._Position - 1]);
        else 
            console.log("현재 방향 : " + this._Direction + ", 현재 위치 : " 
            + this._Position + ", 방향 변경 대상 위치.");

        if (this._Position == _Tile[0])
            console.log("왼쪽 끝 위치에 도달했습니다. 방향 변경합니다.");
        else if (this._Position == _Tile.length - 1)
            console.log("오른쪽 끝 위치에 도달했습니다. 방향 변경합니다.");
    }

    public OnPlayerEvent() : void
    {
        if (_Tile_Event[this._Position - 1] == "ATTACK")
        {
            const _DirectionSelect : any = prompt("Direction ATTACK Select. (Left or Right)");
            this.DirectionSetting(_DirectionSelect);

            console.log("공격! 공격 방향 : " + this._Direction);

            let _AttackTime : number = 30;
            while (_AttackTime > 0)
            {
                if (this._Direction == "Left")
                {
                    const _LastPosition : number = _Tile[1];
                    if (this._AttackPosition <= _LastPosition) {
                        this._AttackPosition = _Tile.length - 1;
                    }   

                    this._AttackPosition--;
                }
                else if (this._Direction == "Right")
                {
                    const _LastPosition : number = _Tile.length - 1;
                    if (this._AttackPosition >= _LastPosition) {
                        this._AttackPosition = _Tile[1];
                    }   

                    this._AttackPosition++;
                }

                _AttackTime--;

                console.log("발사 범위 : " + this._AttackPosition);

                if (this._AttackPosition == _Tile[0])
                    console.log("왼쪽 끝 위치에 도달했습니다. 총알이 오른쪽 끝 위치로 이동했습니다.");
                else if (this._AttackPosition == _Tile.length - 1)
                    console.log("오른쪽 끝 위치에 도달했습니다. 총알이 왼쪽 끝 위치로 이동했습니다.");

                if (_AttackTime <= 0)
                    break;
            }
        }
    }

    public DirectionSetting(_SetDir : string)
    {
        this._Direction = _SetDir;
    }
}

const _TilePos : number = _Tile[Math.floor(Math.random() * (_Tile.length - 1))];
const _Player : Player = new Player(_Tile[_TilePos], "Left");

function _AttackPositionSetting()
{
    const _Length = _Tile_Event.length;
    const _TileEventPos : number = _Tile[Math.floor(Math.random() * (_Length - 0)) + 0];

    _Tile_Event[_TileEventPos] = "ATTACK";
}

function _DiceRollThenPlayerMove()
{
    console.log("모든 타일 이벤트 상태 : " + _Tile_Event);

    const _Rnd : number = Math.floor(Math.random() * (_Dice.length - 0));
    let _Count : number = _Dice[_Rnd];

    alert("주사위 결과값 : " + _Count);

    const _DirectionSelect : any = prompt("Direction Select. (Left or Right)");
    _Player.DirectionSetting(_DirectionSelect);
    
    while(_Count > 0)
    {
        _Player.OnPlayerMove();
        _Count--;

        if (_Count <= 0)
        {
            console.log("목적지에 도착했습니다!");
            _Player.OnPlayerEvent();
            break;
        }
    }
}

_AttackPositionSetting();
_DiceRollThenPlayerMove();
