
var intArr=[];
var gh=[];
var th=0;
//var e= document.getElementById("msg2");
 var count=1;
 var carry=1;
 var counth=0;
 var chit=0;
 var cfal=0;
 var countf=0;
 var frt=0;
 function clickCount()
 {
  count+=1;
 }

function myFunction()
{
 

  if(count==1)
  {   //-------------------------REFERENCE STRING COPY PART------------------------------------------------------
     var str = document.getElementById("strNo").value; 
     var k= str.split(",");
     for(i=0; i < k.length; i++)
       {
          intArr.push(parseInt(k[i]));
       } 
    document.getElementById("RefS").innerHTML =intArr ; 
  
   //-------------------------THE FIRST COLUMN-------------------------------------------------------------------
    th = parseInt(document.getElementById("frNO").value);
    for(var t=0;t<th;t++)
      {
           appendRow();
      }
      for (i = 0; i <th; i++) 
     {
      gh.push(intArr[i]);
     }
 }
 else
  {
    //e.setAttribute("style","opacity:1;text-align: center;color: white;font-size: 20px;margin-top: 40px;");
    document.getElementById("ght").innerHTML="Next";
    var ik=th+(count-3);
   if((count>=3)&&(ik<intArr.length))
   {
    //alert("updation-begins")
    carry=1;
    update(ik);
   }
   if(ik<intArr.length)
   {
    appendColumn(); ////////called on the second click..........
  }
  else{
    var hitRa=(chit)/(intArr.length);
    document.getElementById("hitS").innerHTML=chit;
      document.getElementById("hitR").innerHTML=hitRa;
        document.getElementById("sts").innerHTML=gh;
        comp();

  }
}
}
  //--------------------------------------------------------------------------------------------------------------
function appendRow() 
{

    var tbl = document.getElementById('my-table'), // table reference
        row = tbl.insertRow(tbl.rows.length),      // append table row
        i;
        
    // insert table cells to the new row
    for (i = 0; i < tbl.rows[0].cells.length; i++) 
       {
        createCell(row.insertCell(i), i, 'row');
        }
}
//--------------------------------------------------------------------------------------------------------------
function createCell(cell, text, style)
{
    var div = document.createElement('div'), // create DIV element
        txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    div.setAttribute('class', style);        // set DIV class attribute
    div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
    cell.appendChild(div);                   // append DIV to the table cell
}
//-------------------------------------------------------------------------------------------------------------
 var tbl = document.getElementById('my-table');
 var nm=th;
function appendColumn() 
{  

  
    var tbl = document.getElementById('my-table'),i;
    
   
    // open loop for each row and append cell
   
  


    for (i = 0; i < tbl.rows.length; i++) 
        {
              
                createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length),gh[i], 'col');
      
    }
}
function update(r)
{
 // alert("updating r value"+r)
  for (var i = 0; i<th;i++) 
  {
    if(gh[i]==intArr[r])
    {
      chit+=1;
      carry=0;
     
       document.getElementById("hitu").innerHTML=chit;
      document.getElementById("msg1").innerHTML="Hit Ocurred !!!";
       // e.setAttribute("style","opacity:1;text-align: center;color: white;font-size: 20px;margin-top: 40px;");
    }

  }
  if(carry==1)
  {
     document.getElementById("msg1").innerHTML="Fault Occured !!!";
      // e.setAttribute("style","opacity:1;text-align: center;color: white;font-size: 20px;margin-top: 40px;");
    cfal+=1;
    document.getElementById("fatu").innerHTML=cfal;
   // alert("faults : "+cfal);
   // alert("value of th : "+th);
    if(cfal<=th)
    {
        //alert("updated(faults<3)");
    gh[cfal-1]=intArr[r];
    }
    if(cfal>th)
    {
       //alert("updated(faults>3)");
      var tg=((cfal%th)-1);
      if((cfal%th)==0)
      {
        tg=th-1;
      }
  
      gh[tg]=intArr[r];
    }
    
  }
}
function comp()
{
  var j=document.getElementById("inner");
  j.setAttribute("style","opacity:1;text-align: center;color: white;font-size: 20px;margin-top: 70px;")

}
function takefrm()
{
 var t= document.getElementById("Yesb");
  var k= document.getElementById("Nob");
   var n= document.getElementById("nfrNo");
 var m= document.getElementById("sub");

  t.setAttribute("style","opacity:0;");
  k.setAttribute("style","opacity:0");
n.setAttribute("style","opacity:1");
m.setAttribute("style","opacity:1");

}
function highlit()
{
    document.getElementById("cmpr").setAttribute("style","height:130px;width: 500px;padding:20px;background-color:#7DF9FF;float:left;margin-top: 405px;margin-left:-540px;border:double");
}
/*function repeat()
{
  var d= document.getElementById("nfrNo").value;
  document.getElementById("frNO").innerHTML=value;
  count=0;
}
*/
