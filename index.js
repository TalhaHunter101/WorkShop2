const fs = require("fs");

function writeFile() {
  console.log("Writing...");

  const Obj = {
    name: "Github 100",
    mode: "online",
    attendee: 25,
    date: "2023-03-01",
    Speaker: "Talha",
  };

  fs.writeFileSync("demo.json", JSON.stringify(Obj, null, 2));
  console.log("File written successfully");
}
writeFile(); // Call the function
