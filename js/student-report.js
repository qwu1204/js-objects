var message = '';
var student;
function print(message){
  document.write("<section>" + message + "</section>");
}

for (var i = 0; i< students.length; i++){
  student = students[i];
  message += '<h1>' + student.name +'</h1>';
}

print(message);
