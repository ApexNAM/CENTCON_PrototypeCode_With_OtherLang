let tilemap : string[] = ["마지막","무기","공격","바닥","방어","회복","마지막"];

console.log(tilemap);

function _TileRollingUp()
{
  const tilemax : string = tilemap[5];

  for (let i = 5; i > 0; i--)
  {
    tilemap[i] = tilemap[i-1];
  }  

  tilemap[1] =  tilemax;
}

function _TileMovement(count : number)
{
  for (let i = 0; i < count; i++) {
    _TileRollingUp();
  }
}

_TileMovement(1);

console.log(tilemap);
