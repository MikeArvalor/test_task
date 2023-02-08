let name_txt = document.getElementById("name_input")
let btn = document.getElementById("btn")
let email_input = document.getElementById("email_input")
let seminar = document.getElementById("seminar")
let name_new;
let email_new
let seminar_new

btn.addEventListener('click',function(){
    if(name_txt.value = " "){
        if(!name_txt.value) {
            alert('Поле имя не заполнено');
            return;
          }
          
          if(!email_input.value) {
            alert('Поле email не заполнено');
            return;
          }
    }
    seminar_new = seminar.value
    name_new = name_txt.value
    email_new = email_input.value
    console.log(email_new)
    console.log(name_new)
    console.log(seminar_new)
})
