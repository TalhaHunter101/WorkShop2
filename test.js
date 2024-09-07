const fs = require("fs");

function writeFile() {
  console.log("Writing...");

  const Obj = {
    name: "Github 101",
    mode: "offline",
    attendee: 25,
    date: "2023-03-01",
    Speaker: "Talha",
  };

  fs.writeFileSync("demo2.json", JSON.stringify(Obj, null, 2));
  console.log("File written successfully");
}
writeFile(); // Call the function
