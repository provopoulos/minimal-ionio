 function TEST1(){
  var all_courses = document.getElementById('boxes');
  
  var checkBox = document.getElementById("myCheck");
  
  var mathimata = all_courses.getElementsByTagName('input');
  
  var text = document.getElementById("text");
for (var i=0, len=mathimata.length; i<len; i++) {
  //mporo if gia elenxo an sigoura auto p thelo
            mathimata[i].addEventListener("change", ects_total)
    }
}




function ects_total(){
  
  var tes = document.getElementById("toTXT");
  
  var ects = parseInt(tes.innerHTML);
  
  var diff = document.getElementById("Ta240");
  
  if(this.checked){  
    ects += parseInt(this.getAttribute('ects'));
    console.log(ects);
    tes.innerHTML=(ects);
    var difference = 240 - ects;
    diff.innerHTML=(difference);
  }
  else{
    ects -= parseInt(this.getAttribute('ects'));
    console.log(ects);
    tes.innerHTML=(ects);
    var difference = 240 - ects;
    diff.innerHTML=(difference);
  }
  
}

function ects_total_TEMP(m){
  
  var tes = document.getElementById("toTXT");
  
  var ects = parseInt(tes.innerHTML);
  
  var diff = document.getElementById("Ta240");
  
  if(m.checked){  
    ects += parseInt(m.getAttribute('ects'));
    console.log(ects);
    tes.innerHTML=(ects);
    var difference = 240 - ects;
    diff.innerHTML=(difference);
  }
  else{
    ects -= parseInt(m.getAttribute('ects'));
    console.log(ects);
    tes.innerHTML=(ects);
    var difference = 240 - ects;
    diff.innerHTML=(difference);
  }
  
}


function autoCheck(){
  //na kamo check dame k an oulla tou kormou en unchecked na ginete automata .checked=false;
  
  var kormou = document.getElementById("Kormou");
  //ta pio kato na dokimaso me for
  var A1 = document.getElementById("MathimaA1");
  var A2 = document.getElementById("MathimaA2");
  var B1 = document.getElementById("MathimaB1");
  var B2 = document.getElementById("MathimaB2");
  var MaKormou = [A1,A2,B1,B2];
  
  for (var i=0, len2=MaKormou.length; i<len2; i++) {
    if(kormou.checked==true){
      if(MaKormou[i].checked==true){
        MaKormou[i].checked=true;
      }else{
        MaKormou[i].checked=true;
       ects_total_TEMP(MaKormou[i]);
      }
      
    }else{
      if(MaKormou[i].checked==true){
        MaKormou[i].checked=false;
       ects_total_TEMP(MaKormou[i]);
      }else{
        MaKormou[i].checked=false;
      }
      
    }
    
    //Dame na kamo if me analogos ti ginete na paeni sto function etcs_total j n allasi gianamen exoumente lathos teliko
      
    //if(A1.checked==false){
  //  A1.checked=true;
 //   ects_total_TEMP(A1);
 // }
//  else{
//    A1.checked=false;
//    ects_total_TEMP(A1);
 // }
  }
  
 
}

TEST1();
