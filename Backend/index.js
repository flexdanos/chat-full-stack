const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const response = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username },
        {headers: {"private-key": "8aa76b3b-c836-4a53-b632-9c1df4871fbc"}}
    )
    return res.status(response.status).json(response.data)
  } catch (error) {
    return res.status(400).json(error)
  }
//   return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);