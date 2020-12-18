 function LoadVariables(){
  var all_courses = document.getElementById('boxes'); 
  
  var courses_input = all_courses.getElementsByTagName('input');
  
  var text = document.getElementById("text");
  for (var i=0, len=courses_input.length; i<len; i++) {
    //mporei na iparxi if edo gia elenxo
              courses_input[i].addEventListener("change", ects_total)
    }
}




function ects_total(){
  
  var changing_text = document.getElementById("ects_span");
  
  var ects = parseInt(changing_text.innerHTML);
  
  var diff = document.getElementById("ects_span_240");
  
  if(this.checked){  
    ects += parseInt(this.getAttribute('ects'));
    changing_text.innerHTML=(ects);
    var difference = 240 - ects;
    diff.innerHTML=(difference);
  }
  else{
    ects -= parseInt(this.getAttribute('ects'));
    console.log(ects);
    changing_text.innerHTML=(ects);
    var difference = 240 - ects;
    diff.innerHTML=(difference);
  }
  
}

function ects_total_TEMP(m){//function gia xrisi tou autoCheck
  
  var changing_text = document.getElementById("toTXT");
  
  var ects = parseInt(changing_text.innerHTML);
  
  var diff = document.getElementById("ects_span_240");
  
  if(m.checked){
    ects += parseInt(m.getAttribute('ects'));
    changing_text.innerHTML=(ects);
    var difference = 240 - ects;
    diff.innerHTML=(difference);
  }
  else{
    ects -= parseInt(m.getAttribute('ects'));
    changing_text.innerHTML=(ects);
    var difference = 240 - ects;
    diff.innerHTML=(difference);
  }
  
}

function Create_Arrays(semester,type){
  var array = new Array();
  document.write("{% assign posts = site.collections | where: "label", include.l | first %}
  {% assign pages = posts.docs | sort: "title" %}
  {% for post in pages %}
    {% if post.semester == semester or post.rank == semester %}
      {% if post.type == type %}", array.push({{ post.ref }});, "{% endif %}
    {% endif %}
  {% endfor %});
  return array;
  
}


function autoCheck(){
  //constant check an ola kapiou pinaka checked tote na ginete automata checked=false;
  
  
  //pio kato einai ena paradeigma gia ena pinaka
  //o kodikas gia na leitourgisi prepi na gini meso liquid kai me sostous pinakes
  //pinakes pou prepei na ginoun
  //ipoxreotika,epilegomena,2 kateuthinsis -> gia ola ta e3amina
  //idioi pinakes alla gia to kathe e3amino etsi oste na mpori na ftiakti check pano apo to kathe e3amino gia ligotera clicks
  var kormou = document.getElementById("Kormou");
  var A1 = document.getElementById("MathimaA1");
  var A2 = document.getElementById("MathimaA2");
  var B1 = document.getElementById("MathimaB1");
  var B2 = document.getElementById("MathimaB2");
  var MaKormou = [A1,A2,B1,B2];
  var TestArray = Create_Arrays(1,"M")
  
  
  
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
    
    //mpori na ftiaxtoun ta 2 if pio kato gia na min exoume bugs sto ects
      
    //if(A1.checked==false){
    //A1.checked=true;
    //ects_total_TEMP(A1);
    //}
    //else{
    //A1.checked=false;
    //ects_total_TEMP(A1);
    //}
  }
  
 
}
$(window).on('load', function(){
  LoadVariables();
});
