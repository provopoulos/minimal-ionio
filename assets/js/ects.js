function LoadVariables(){
  var all_courses = document.getElementById('boxes'); 
  var courses_input = all_courses.getElementsByTagName('input');
  var text = document.getElementById("text");
  
  for (var i=0, len=courses_input.length; i<len; i++) {
          if(courses_input[i].hasAttribute('ects')){
            courses_input[i].addEventListener("change", ects_total)
        }
    }
  
  LoadArrays();
}

function LoadArrays(){
 for (i = 1; i < 9; i++) {
   window['mandatory'+i] = Create_Arrays(i,"M");
   window['AE'+i] = Create_Arrays(i,"H");
   window['PS'+i] = Create_Arrays(i,"I");
  }
  
 window.mandatory_all = mandatory1.concat(mandatory2, mandatory3,mandatory4,mandatory5,mandatory6,mandatory7,mandatory8);
 window.AE_all = AE1.concat(AE2, AE3,AE4,AE5,AE6,AE7,AE8);
 window.PS_all = PS1.concat(PS2, PS3,PS4,PS5,PS6,PS7,PS8);
}

function Create_Arrays(semester,type){
  var course_checkbox = document.getElementById('boxes'); 
  var course_input = course_checkbox.getElementsByTagName('input');
  var arrayrtn = new Array();
  
  for (var i=0, len=course_input.length; i<len; i++) {
           if( (course_input[i].getAttribute('c_type') == type) && ( course_input[i].getAttribute('sem') == semester) ){
                arrayrtn.push(course_input[i].id)
           }
    }
  
  for( var i=0, len=arrayrtn.length; i<len; i++){
    arrayrtn[i] = document.getElementById(arrayrtn[i]);
  }
  
  return arrayrtn;
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

function ects_total_multiple(m){//function gia xrisi tou autoCheck
  
  var changing_text = document.getElementById("ects_span");
  
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
  
  window.autocheck = 0;
}




function autoCheck(m,element_box){
  var check_for_all = document.getElementById('mandatory_checkbox');


  for (var i=0, len2=m.length; i<len2; i++) {
    if(element_box.checked==true){
      if(m[i].checked==true){
        m[i].checked=true;
      }else{
        m[i].checked=true;
       ects_total_multiple(m[i]);
      }
      
    }else{
      if(m[i].checked==true){
        m[i].checked=false;
       ects_total_multiple(m[i]);
      }else{
        m[i].checked=false;
      }
      
    }
    
  }
  
 
}
$(window).on('load', function(){
  LoadVariables();
});
