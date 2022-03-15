const loginform = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

const toDoform = document.querySelector("#todo_form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const paintGreeting = (date) => {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = (`Hello, ${date}`);
}

const submit = (event) => {
    event.preventDefault();
    const username = loginInput.value;
    loginform.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);  
    paintGreeting(username);
    
    toDoform.classList.remove(HIDDEN_CLASSNAME);
}

const saveUserName = localStorage.getItem(USERNAME_KEY);
if(saveUserName === null){
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit", submit);
    localStorage.setItem("todos",[])

}else{
    paintGreeting(saveUserName)
    toDoform.classList.remove(HIDDEN_CLASSNAME)
}


