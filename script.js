// 1. INTERACTIVE ACADEMIC PLANNER
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

if (taskList) {
    let tasks = [
        { text: "Submit WEB 201 assignment on GitHub", done: false },
        { text: "Review JavaScript DOM Notes", done: false }
    ];

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");

            const span = document.createElement("span");
            span.textContent = task.text;
            if (task.done) span.classList.add("completed");
            span.style.cursor = "pointer";
            span.title = "Click to mark completed";

            span.addEventListener("click", () => {
                tasks[index].done = !tasks[index].done;
                renderTasks();
            });

            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.className = "btn";
            delBtn.style.backgroundColor = "#dc2626";
            delBtn.addEventListener("click", () => {
                tasks.splice(index, 1);
                renderTasks();
            });

            li.appendChild(span);
            li.appendChild(delBtn);
            taskList.appendChild(li);
        });
    }

    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (text !== "") {
            tasks.push({ text: text, done: false });
            taskInput.value = "";
            renderTasks();
        }
    });

    renderTasks();
}

// 2. CONTACT FORM JAVASCRIPT VALIDATION
const contactForm = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !phone || !message) {
            feedback.style.color = "#dc2626";
            feedback.textContent = "Error: All fields are required.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            feedback.style.color = "#dc2626";
            feedback.textContent = "Error: Please enter a valid email address.";
            return;
        }

        const digitsOnly = /^\d+$/;
        if (!digitsOnly.test(phone)) {
            feedback.style.color = "#dc2626";
            feedback.textContent = "Error: Phone number must contain only digits.";
            return;
        }

        feedback.style.color = "#16a34a";
        feedback.textContent = "Success! Thank you, " + name + ". Your message has been sent.";
        contactForm.reset();
    });
}