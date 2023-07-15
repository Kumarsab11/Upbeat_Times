
const uname = document.getElementById("name");
const pass = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const dataobj = {
    name: uname.value,
    password: pass.value,
  };
  fetch("http://localhost:8080/users", {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      const comparision = data.find((ele)=>ele.name===uname.value);
      console.log(comparision);
      if(comparision.name==uname.value && comparision.password==pass.value){
        alert("logged in successfully");
      }
      else{
        alert("you are not registered in !!");
      }
    });
});
