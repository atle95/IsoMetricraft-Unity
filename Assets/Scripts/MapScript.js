public class MapScript extends MonoBehaviour
{
  public var cols : int;
  public var rows : int;
  public var testTile  : GameObject;
  public var testNode  : GameObject;
  public var tileArray : GameObject[,];
  public var nodeArray : GameObject[,];
//  public var sprites   : Sprite[];
  public var x;
  public var y;

  public var deltax : float;
  public var deltay : float;
//  var deltaj;
 
  function Start()
  {
    var angle = 120; 
    //data structure to hold gameobjects
    nodeArray = new GameObject[rows, cols];
    tileArray = new GameObject[rows, cols];

    var xoffset = transform.position.x;
    var yoffset = transform.position.y;
    //instantiate nodes
//    placeNodes( , deltay, xoffset, yoffset);

    //instantiate tiles
//    placeTiles(deltax, deltay, xoffset, yoffset, angle);

    //instantiate an offset grid
    placeAlternating(deltax/2.0, deltay*2.0, xoffset, yoffset, angle);

//    placeSelectively(deltax, deltay, xoffset, yoffset, angle);


   
  }

  function placeNodes(deltax, deltay, xoffset, yoffset)
  {
    var counter = 0;
    var jadjustment = 0.0;
    var deltaj = deltay/2.0;
    var xoff = xoffset - deltax;
    var yoff = yoffset - deltay;
    for(i = 0; i < rows; i++)
    {
      jadjustment += deltaj;
      for(j = 0; j < cols; j++)
      {
        counter ++;
        x = xoff + deltax * i;
        y = xoff + deltay * (j+jadjustment);
        var tempNode = Instantiate(testNode, Vector3(x, y, 0), Quaternion.identity);
        tempNode.GetComponent(NodeScript).SetArrows(i*rows+j);
        nodeArray[i,j] = tempNode;
//        this.AddComponent(tempNode);

      }
    }
    Debug.Log(counter+" Nodes created");
  }

  function placeTiles(deltax, deltay, xoffset, yoffset, angle)
  {
    var counter = 0;
    var jadjustment = 0.0;
    var deltaj = deltay/2.0;

    for (k = 0; k < 3; k++)
    {
      for (i = 0; i < 3; i++)
      {
        jadjustment += deltaj;
        for (j = 0; j < 3; j++)
        {
          counter++;

          x = xoffset + deltax * (i + 6*k)       + 2*Mathf.Cos(-k*120*180/Mathf.PI);
          y = yoffset + deltay * (j+jadjustment) + 2*Mathf.Sin(k*120*180/Mathf.PI);
          var tempTile;
          tempTile = Instantiate(testTile, Vector3(x, y, 0), Quaternion.identity);
//          tempTile.GetComponent(SpriteRenderer).sprite = null;//sprites[5];
//          tempTile.GetComponent(SpriteRenderer).sprite = sprites[5];
          tempTile.GetComponent(TileScript).SetSprite(5);
          tempTile.GetComponent(TileScript).pivotInPlace(k * 120);
        }
      }
    }
  }

  function placeAlternating(deltax, deltay, xoffset, yoffset, angle)
  {
    var counter = 0;
    var jadjustment = 0.0;
    var deltaj = deltay/Mathf.Sqrt(3)/2;
   
   /**  
    /*  | | | | | | |
    /*  | | | | | | |
    /*  | | | | | | |
    /*  | | | | | | |
    /*    | | | | |
    /*      | | |
    /*        |  
   **/

   /** 
    /*  | | | | _ _ _
    /*  | | | | | _ _
    /*  | | | | | | _
    /*  | | | | | | |
    /*  _ | | | | | |
    /*  _ _ | | | | |
    /*  _ _ _ | | | |
    **/

    var jlength = -1;
    for(var i = 0; i < cols*2; i++) {
      if(i%2 == 0) 
      {  jadjustment += deltaj;
         if(i < cols) jlength++;
         else jlength--;

      }

      for(var j = 0; j < rows+jlength; j++) {
        counter++;
        x = xoffset + deltax * i              ;//+ 2*Mathf.Cos(-k*120*180/Mathf.PI);
        y = yoffset + deltay * (j+jadjustment);//+ 2*Mathf.Sin(k*120*180/Mathf.PI);
        if(i%2 == 0) {
          tempNode = Instantiate(testNode, Vector3(x, y, 0), Quaternion.identity);
          tempNode.GetComponent(NodeScript).SetConnections(i*cols + j);
        } else if( i%2 == 1) {
          tempTile = Instantiate(testTile, Vector3(x, y, 0), Quaternion.identity);
        }
      }
    }
  }

  function placeSelectively(deltax, deltay, xoffset, yoffset, angle)
  {
    var counter = 0;
    var jadjustment = 0.0;
    var deltaj = deltay/2.0;
    for(i = 0; i < rows-1; i++)
    {
      jadjustment += deltaj;
      for(j = 0; j < cols-1; j++)
      {
        counter++;
        x = xoffset + deltax * i;
        y = yoffset + deltay * (j+jadjustment);
        var tempTile;
        if (i <= 2  && j < 2 - i)
        {
			tempTile = Instantiate(testTile, Vector3(x, y, 0), Quaternion.identity);
//            tempTile.GetComponent(SpriteRenderer).sprite = null;//sprites[5];
            tempTile.GetComponent(TileScript).SetSprite(5);
//            GetComponent(SpriteRenderer).sprite = sprites[5];
        }
        else if ( i >= 3 && j >= -i+8 )
        {
          tempTile = Instantiate(testTile, Vector3(x, y, 0), Quaternion.identity);
//          tempTile.GetComponent(SpriteRenderer).sprite = null;//sprites[2];
//          tempTile.GetComponent(SpriteRenderer).sprite = sprites[2];
          tempTile.GetComponent(TileScript).SetSprite(2);
        }
//        else if (j <= i && i <= 9 - j)
//        {
//          tempTile.GetComponent(SpriteRenderer).sprite = sprites[1];
//        } 
        else 
        {
          tempTile = Instantiate(testTile, Vector3(x, y, 0), Quaternion.identity);
//          tempTile.GetComponent(SpriteRenderer).sprite = sprites[4];
          tempTile.GetComponent(TileScript).SetSprite(4);
          tempTile.GetComponent(TileScript).pivotInPlace(angle);
        }
        tempTile.GetComponent(TileScript).logName("["+i+"],["+j+"]");
        tileArray[i,j] = tempTile;
        this.AddComponent(tempTile);

         
      }
    }
    Debug.Log(counter+" Tiles created");
  }

  function genCube()
  {
    //make a 2d array with values to determine rotation and texture for 3 faces


    
  }

  function Update ()
  {
    
	
  }
}