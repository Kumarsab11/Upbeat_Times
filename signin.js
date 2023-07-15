
const uname = document.getElementById("name");
const pass = document.getElementById("password");
const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:8080/users", {
    method: "GET" ,
  })
    .then((res) => res.json())
    .then((data) => {
      const comparision = data.find(
        (ele)=>ele.name === uname.value && ele.password === pass.value
        );
        console.log(comparision);
      if(comparision!=null){
        alert("Logged in sucessfully !!")
        window.location.href = "./main1.html";
      }
      else{
        alert("Sorry , You are not registered in !!")
      }
    });
});
