import express from "express";

const app = express();
// app.use()

const jokes = [
  {
    setup: "Why did the JavaScript developer go broke?",
    punchline: "Because he used up all his cache!",
  },
  {
    setup: "Why did the JavaScript developer quit his job?",
    punchline: "Because he didn't get arrays!",
  },
  {
    setup: "Why was the JavaScript developer sad?",
    punchline: "Because he didn't know how to `null` his emotions.",
  },
  {
    setup: "Why did the JavaScript function break up with the HTML element?",
    punchline: "It just wasn't his type!",
  },
  {
    setup: "Why was the JavaScript developer always lonely?",
    punchline: "Because he didn't know how to `fetch` a date!",
  },
];

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  res.send({ alljokes: jokes });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


