
const uname = document.getElementById("name");
const pass = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const dataobj = {
    name: uname.value,
    password: pass.value,
  };
  fetch("http://localhost:8080/users", {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      const comparision = data.find((ele)=>ele.name===uname && ele.password===pass);
      console.log(comparision);
      if(comparision===true){
        alert("logged in successfully");
      }
      else{
        alert("you are not registered in !!");
      }
    });
});
