import express from "express";
import ejs from "ejs";
import syllabus from "./syllabus.json" assert { "type": "json" };
import axios from "axios";

const app = express();
const port = 3000;

const requests = [
  { name: "/maths" },
  { name: "/php" },
  { name: "/evs" },
  { name: "/dbms" },
  { name: "/evs" },
  { name: "/dsa" },
];

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

requests.forEach((element) => {
  app.get(element["name"], async (req, res) => {
    const returnedData = await axios.get("https://api.waifu.pics/sfw/waifu");
    const syllabusImage = returnedData.data["url"];
    const neededIndex = syllabus.findIndex((value) => {
      if (value["name"] === element["name"]) {
        return true;
      }
    });
    const particularObj = syllabus[neededIndex];
    res.render("theMainContent.ejs", {
      headerImage: syllabusImage,
      fullObj: particularObj,
    });
  });
});
// make the contetnt appera in the theMainContent.ejs file
// app.get("/maths", (req, res) => {
//   // res.json(syllabus[0]);
//   res.render("theMainContent.ejs");
// });
app.listen(port, () => {
  console.log(`The Sever is Running on Port ${port}`);
});
