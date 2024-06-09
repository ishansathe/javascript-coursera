const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialisation: 'JS' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialisation: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialisation: 'Java' },
    { id: 4, name: 'Ishan Sathe', age: 23, department: 'IS', salary: 60000, specialisation: 'Security' }
    //... More employee records can be added here
  ];

const totalEmployees = employees.map(
    (employee, index) => 
    `<p>${employee.id}: ${employee.name} - ${employee.department} $${employee.salary}</p>`
).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;


function displayEmployees() {
     document.getElementById('employeesDetails').innerHTML = totalEmployees;
}


function calculateTotalSalaries(){
    const totalSalaries = employees.reduce(
        (acc, employee) => acc + employee.salary, 0)
    alert(`Total Salaries: $${totalSalaries}`)
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee =>
    employee.department === "HR")
    const displayHRs = hrEmployees.map((employee, index) =>
    `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('')
    document.getElementById('employeesDetails').innerHTML = displayHRs
}

function findEmployeeById(employeeId) {
    const emp = employees.find(employee => employee.id === employeeId)
    if (emp) {
        document.getElementById('employeesDetails').innerHTML=
        `<p>${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`
    }
    else {
        document.getElementById('employeesDetails').innerHTML= `no employee found with this ID`;
    }
}

function findSecurityGuy(){
    const me = employees.find((employee) => employee.specialisation === "Security")
    // Returns the object
    document.getElementById('employeesDetails').innerHTML = 
    `<p>${me.id}: ${me.name} - ${me.department} - $${me.salary} -- ${me.specialisation}`
}