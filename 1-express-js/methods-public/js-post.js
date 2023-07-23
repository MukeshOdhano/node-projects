const result = document.querySelector(".result");

const fetchUser = async () => {
   try {
      // _7-method-post.js
      const { data } = await axios.get("/api/v1/users");
      const people = data.data.map(user => {return `<h3>${user.name}</h3>`})

      result.innerHTML = people.join("")
   } catch (e) {
      result.innerHTML = `<h2>can't fetch data</h2>`
      console.log(e)
   }
};
fetchUser()

// submit form
const btn = document.querySelector("button")
const input = document.querySelector("input")

btn.addEventListener("click", async(e)=>{
   e.preventDefault()

   const nameValue = input.value
   try{
      const {data} = await axios.post("/api/v1/users", {name: nameValue})
      const h2 = document.createElement("h2")

      h2.textContent = data.person
      console.log(data)
      result.appendChild(h2)

   } catch (e){
      result.textContent = e.response.data.msg
      console.log(e)
   }
   input.value = ''
})
