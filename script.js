document.addEventListener("DOMContentLoaded", () => {
  const departments = [
  {
    name: "Administration",
    employees: [
      { firstName: "Zoe", lastName: "Robins" },
      { firstName: "Madeleine", lastName: "Madden" }
    ]
  },
  {
    name: "Audit",
    employees: [
      { firstName: "Josha", lastName: "Sadowski" },
      { firstName: "Kate", lastName: "Fleetwood" }
    ]
  },
  {
    name: "Banking Operations",
    employees: [
      { firstName: "Priyanka", lastName: "Bose" },
      { firstName: "Hammed", lastName: "Animashaun" }
    ]
  },
  {
    name: "Communications",
    employees: [
      { firstName: "Gil", lastName: "Cardinal" },
      { firstName: "Richard J.", lastName: "Lewis" }
    ]
  },
  {
    name: "Corporate Services",
    employees: [
      { firstName: "Randy", lastName: "Bradshaw" },
      { firstName: "Tracey", lastName: "Cook" }
    ]
  },
  {
    name: "Financial Services",
    employees: [
      { firstName: "Buffy", lastName: "Gaudry" },
      { firstName: "Shaneen Ann", lastName: "Fox" }
    ]
  },
  {
    name: "Human Resources",
    employees: [
      { firstName: "Jesse Ed", lastName: "Azure" },
      { firstName: "Stacy", lastName: "Da Silva" }
    ]
  },
  {
    name: "Information Technology",
    employees: [
      { firstName: "Graham", lastName: "Greene" },
      { firstName: "Sandika", lastName: "Evergreen" },
      { firstName: "Jennifer", lastName: "Rodriguez" }
    ]
  },
  {
    name: "IT Technician",
    employees: [
      { firstName: "Aiyana", lastName: "Littlebear" },
      { firstName: "Inara", lastName: "Thunderbird" },
      { firstName: "Kaya", lastName: "Runningbrook" },
      { firstName: "Elara", lastName: "Firehawk" },
      { firstName: "Siona", lastName: "Moonflower" }
    ]
    }
  ];;


const main = document.getElementById("directory");

  departments.forEach(function (dept) {
    const section = document.createElement("section");
    const heading = document.createElement("h2");

    heading.innerText = dept.name;
    section.appendChild(heading);

    const list = document.createElement("ul");

    dept.employees.forEach(function (emp) {
    const li = document.createElement("li");

    li.innerText = emp.firstName + " " + emp.lastName;
    list.appendChild(li);
});
    section.appendChild(list);
    main.appendChild(section);
  });

    document.getElementById("year").innerText = new Date().getFullYear();
});