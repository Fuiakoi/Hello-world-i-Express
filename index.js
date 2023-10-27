const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/kat', (req, res) => {
    res.send('Hello kitties!')
})

app.get('/api/kat', (req, res) => {
    res.send({
        "name": "Jane Doe",
        "class": "Cat",
        "gender": "female",
        "level": 130,
        "items": [
            {
                "name": "Sword",
                "stats": {
                    "attack": 50,
                    "durability": 100
                }
            },
            {
                "name": "Shield",
                "stats": {
                    "defense": 30,
                    "durability": 80
                }
            }
        ],
        "quests": [
            "Defeat the Dragon",
            "Rescue the Princess",
            "Find the Lost Amulet"
        ],
        "HP": 1500,
        "Stamina": 160,
        "location": "Castle",
        "guild": "Knights of the Round Table",
        "hollowState": true
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})