const students = [
    { studentId: "000-98-0001", firstName: "James" },
    { studentId: "000-98-0002", firstName: "Anna" },
    { studentId: "000-98-0003", firstName: "Jeffrey" }
];

function startTime() {
    let today = new Date();
    document.getElementById('time').innerHTML = today;
    setTimeout(function() {
        startTime()
    }, 500);
}


// window.onload = function() {
(function() {
    startTime();
    students.forEach(this.addStudentToTable);
    let button = document.getElementById("submitButton");
    button.addEventListener("click", this.addStudent);
})();
// };

function addStudent() {
    let sid = document.getElementById("sid");
    let fname = document.getElementById("firstName");
    if (sid.value && fname.value) {
        let student = {
            "studentId": sid.value,
            "firstName": fname.value
        };
        addStudentToTable(student);
    }
}

function addStudentToTable(student) {
    let table = document.querySelector("table");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");

    td1.appendChild(document.createTextNode(student.studentId));
    td2.appendChild(document.createTextNode(student.firstName));

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}