


// Filter and sort employees based on their experience relative to the current year, 
// returning a sorted array of names, departments, and salaries for those meeting a 
// minimum experience requirement.


// Array of employee objects
const employees = [
    { name: 'John Doe', department: 'HR', salary: 60000, joiningYear: 2015 },
    { name: 'Jane Smith', department: 'Engineering', salary: 80000, joiningYear: 2010 },
    { name: 'Mike Johnson', department: 'Finance', salary: 75000, joiningYear: 2005 },
    { name: 'Emily Davis', department: 'Engineering', salary: 90000, joiningYear: 2012 },
    { name: 'Adam Walker', department: 'HR', salary: 70000, joiningYear: 2018 }
  ];
  
  // Current year for calculation
  const currentYear = 2024;
  
  // Minimum years of experience to be considered a senior employee
  const minExperience = 10;
  



  // Function to filter and retrieve senior employees
  function getSeniorEmployees(employees, currentYear, minExperience) {
    return employees
      // Filter employees based on experience
      .filter(employee => (currentYear - employee.joiningYear) >= minExperience)
      // Map filtered employees to new objects with selected properties
      .map(employee => ({
        name: employee.name,
        department: employee.department,
        salary: employee.salary
      }))
      // Sort resulting array by joining year in ascending order
      .sort((a, b) => a.joiningYear - b.joiningYear);
  }
  
  // Example usage:
  const seniorEmployees = getSeniorEmployees(employees, currentYear, minExperience);
  console.log(seniorEmployees);
  