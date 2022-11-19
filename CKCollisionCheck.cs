using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CKCollisionCheck : MonoBehaviour
{
    public BoxCollider2D _boxCollider2D;
    public CircleCollider2D _circleCollider2D;
    
    public SpriteRenderer sprRender;
    public Sprite originSpr;

    private void Awake()
    {
        sprRender = GetComponent<SpriteRenderer>();
        originSpr = sprRender.sprite;
    }

    //  박스 콜라이더 사이즈 변경
    public void OnCollisionBoxRuntimed(SpriteRenderer targetSPR_Render, Sprite _OriginSPR)
    {
        originSpr = targetSPR_Render.sprite;
        _boxCollider2D.size = _OriginSPR.rect.size / 100.0f;
    }
    
    // 원 콜라이더 사이즈 변경
    public void OnCollisionCircleRuntimed(SpriteRenderer targetSPR_Render, Sprite _OriginSPR)
    {
        originSpr = targetSPR_Render.sprite;
        _circleCollider2D.radius = _OriginSPR.bounds.size.y / 2;
    }
}
