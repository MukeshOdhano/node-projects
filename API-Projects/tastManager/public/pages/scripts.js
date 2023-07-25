const ul = document.querySelector(".tasks");

const getAllItems = async () => {
   try {
      await axios
         .get("http://localhost:5000/api/v1/tasks/")
         .then((response) => {
            const tasksList = response.data["all_Tasks"];

            tasksList.reverse().forEach((element) => {
               const li = document.createElement("li");
               
               li.textContent = element.name;
               ul.appendChild(li);

            });

            // console.log(tasksList)
         })
         .catch((e) => {
            console.log({ erros: e });
         });
   } catch (e) {
      console.log(e);
   }
};

getAllItems();
