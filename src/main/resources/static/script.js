document.getElementById("loadBtn").addEventListener("click", async () => {
  const list = document.getElementById("studentList");
  list.innerHTML = "<li>Loading...</li>";

  try {
    const response = await fetch("/api/students"); 
    if (!response.ok) {
      throw new Error("API error: " + response.status);
    }

    const students = await response.json();

    list.innerHTML = ""; 
    students.forEach(student => {
      const li = document.createElement("li");
      li.textContent = student;
      list.appendChild(li);
    });
  } catch (error) {
    list.innerHTML = `<li style="color:red;">❌ Failed to load data: ${error.message}</li>`;
  }
});
