    function changePage() {
    
            var name = document.getElementById("name").value;
            document.getElementById("greeting").innerText = "Hello " + name + "!";
        
            var message = document.getElementById("newMessage").value;
            document.getElementById("message").innerText = message;

            var color = document.getElementById("color").value;
            document.body.style.backgroundColor = color;
        }

    function addToDo() {
        var todo = document.getElementById("todo").value;

        var listItem = document.createElement("li");

        listItem.innerText = todo;

        document.getElementById("todoList").appendChild(listItem);
    }
