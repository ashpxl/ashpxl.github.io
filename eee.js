const fs = require('fs');

const games = [
  {
    "url": "/gms/1/motox3m/",
    "image": "/img/mx3m-1.jpg",
    "title": "Moto X3M",
    "Categories": [
      "Car",
      "Sports",
      "Action",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/motox3m2/",
    "image": "/img/mx3m-2.jpg",
    "title": "Moto X3M 2",
    "Categories": [
      "Car",
      "Sports",
      "Action"
    ]
  },
  {
    "url": "/gms/1/motox3m3/",
    "image": "/img/mx3m-3.jpg",
    "title": "Moto X3M 3",
    "Categories": [
      "Car",
      "Sports",
      "Action"
    ]
  },
  {
    "url": "/gms/1/motox3m4/",
    "image": "/img/mx3m-4.jpg",
    "title": "Moto X3M 4",
    "Categories": [
      "Car",
      "Sports",
      "Action"
    ]
  },
  {
    "url": "/gms/1/motox3m5/",
    "image": "/img/mx3m-5.jpg",
    "title": "Moto X3M 5",
    "Categories": [
      "Car",
      "Sports",
      "Action"
    ]
  },
  {
    "url": "/gms/1/motox3m6/",
    "image": "/img/mx3m-6.jpg",
    "title": "Moto X3M 6",
    "Categories": [
      "Car",
      "Sports",
      "Action"
    ]
  },
  {
    "url": "/gms/1/stickman-hook/",
    "image": "/img/stickmanhook.png",
    "title": "Stickman Hook",
    "Categories": [
      "Stickman",
      "Action"
    ]
  },
  {
    "url": "/gms/1/dreadhead-parkour",
    "image": "/img/dreadhead-parkour.png",
    "title": "Dreadhead Parkour",
    "Categories": [
      "Action",
      "Adventure",
      "Parkour"
    ]
  },
  {
    "url": "/gms/1/dogeminer/",
    "image": "/img/dogeminer.png",
    "title": "DogeMiner",
    "Categories": [
      "Clicker",
      "Popular"
    ]
  },
  {
    "url": "https://gtst1.github.io/dogeminer2/",
    "image": "/img/doge-miner-2.png",
    "title": "DogeMiner 2",
    "Categories": [
      "Clicker",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/temple-of-boom/",
    "image": "/img/temple-of-boom.png",
    "title": "Temple of Boom",
    "Categories": [
      "Action",
      "Multiplayer"
    ]
  },
  {
    "url": "/gms/1/justfall.lol/",
    "image": "/img/justfall.png",
    "title": "JustFall.lol",
    "Categories": [
      "Action",
      "Multiplayer",
      "Parkour"
    ]
  },
  {
    "url": "/gms/1/mineclicker-reexcavated/",
    "image": "/img/mineclicker.png",
    "title": "MineClicker",
    "Categories": [
      "Clicker"
    ]
  },
  {
    "url": "/gms/1/subway-surfers/",
    "image": "/img/subway-surfers.png",
    "title": "Subway Surfers",
    "Categories": [
      "Action",
      "Parkour",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasBurgeria.swf",
    "image": "/img/burgeria.png",
    "title": "Papa's Burgeria",
    "Categories": [
      "Casual",
      "Flash",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasTacomia.swf",
    "image": "/img/tacomia.png",
    "title": "Papa's Tacomia",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasFreezeria.swf",
    "image": "/img/freezeria.png",
    "title": "Papa's Freezeria",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasPizzeria.swf",
    "image": "/img/pizzeria.png",
    "title": "Papa's Pizzeria",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasPancakeria.swf",
    "image": "/img/pancakeria.png",
    "title": "Papa's Pancakeria",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasScooperia.swf",
    "image": "/img/scooperia.png",
    "title": "Papa's Scooperia",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasSushiria.swf",
    "image": "/img/sushiria.png",
    "title": "Papa's Sushiria",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasPastaria.swf",
    "image": "/img/pastaria.png",
    "title": "Papa's Pastaria",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasCupcakeria.swf",
    "image": "/img/cupcakeria.png",
    "title": "Papa's Cupcakeria",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasHotdoggeria.swf",
    "image": "/img/hotdoggeria.png",
    "title": "Papa's Hotdoggeria",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapasWingeria.swf",
    "image": "/img/wingeria.png",
    "title": "Papa's Wingeria",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapaLouie1.swf",
    "image": "/img/papalouie1.png",
    "title": "Papa Louie 1-When Pizzas Attack",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure",
      "Parkour"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapaLouie2.swf",
    "image": "/img/papalouie2.png",
    "title": "Papa Louie 2-When Burgers Attack",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure",
      "Parkour"
    ]
  },
  {
    "url": "/gms/1/papas-games/embed.html?game=SWF-FILES/PapaLouie3.swf",
    "image": "/img/papalouie3.png",
    "title": "Papa Louie 3-When Sundaes Attack",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure",
      "Parkour"
    ]
  },
  {
    "url": "/gms/1/swerve/",
    "image": "/img/swerve.png",
    "title": "Swerve",
    "Categories": [
      "Action",
      "Car",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/sm64/",
    "image": "/img/sm64.png",
    "title": "Super Mario 64",
    "Categories": [
      "Casual",
      "Adventure",
      "Parkour"
    ]
  },
  {
    "url": "/gms/1/jetpack-joyride/",
    "image": "/img/jetpackjoyride.png",
    "title": "Jetpack Joyride",
    "Categories": [
      "Parkour",
      "Popular",
      "Action"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/angry-birds.swf",
    "image": "/img/angrybirds.png",
    "title": "Angry Birds",
    "Categories": [
      "Flash",
      "Action",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/badpiggies.swf",
    "image": "/img/badpiggies.png",
    "title": "Bad Piggies",
    "Categories": [
      "Flash",
      "Action",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/henry-stickmin-bank.swf",
    "image": "/img/henrystickminbreakingthebank.webp",
    "title": "Henry Stickmin 1-Breaking The Bank",
    "Categories": [
      "Flash",
      "Stickman",
      "Action",
      "Adventure",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/henry-stickmin-prison.swf",
    "image": "/img/henrystickminescapingtheprison.webp",
    "title": "Henry Stickmin 2-Escaping the Prison",
    "Categories": [
      "Flash",
      "Stickman",
      "Action",
      "Adventure",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/henry-stickmin-diamond.swf",
    "image": "/img/henrystickminstealingthediamond.webp",
    "title": "Henry Stickmin 3-Stealing the Diamond",
    "Categories": [
      "Flash",
      "Stickman",
      "Action",
      "Adventure",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/henry-stickmin-airship.swf",
    "image": "/img/henrystickmininfiltratingtheairship.webp",
    "title": "Henry Stickmin 4-Infiltrating The Airship",
    "Categories": [
      "Flash",
      "Stickman",
      "Action",
      "Adventure",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/henry-stickmin-complex.swf",
    "image": "/img/henrystickminfleeingthecomplex.webp",
    "title": "Henry Stickmin 5-Fleeing The Complex",
    "Categories": [
      "Flash",
      "Stickman",
      "Action",
      "Adventure",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/core-ball/",
    "image": "/img/core-ball.png",
    "title": "Core Ball",
    "Categories": [
      "Puzzle",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/dante/",
    "image": "/img/dante.png",
    "title": "Dante",
    "Categories": [
      "Action",
      "Adventure",
      "Parkour"
    ]
  },
  {
    "url": "/gms/1/geodash/",
    "image": "/img/geodash.png",
    "title": "Geometry Dash",
    "Categories": [
      "Action",
      "Adventure",
      "Parkour"
    ]
  },
  {
    "url": "/gms/1/backrooms/",
    "image": "/img/backrooms.png",
    "title": "Backrooms",
    "Categories": [
      "Horror",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/1/idle-breakout/",
    "image": "/img/idlebreakout.png",
    "title": "Idle Breakout",
    "Categories": [
      "Clicker",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/fruit-ninja/",
    "image": "/img/fruit-ninja.jpg",
    "title": "Fruit Ninja",
    "Categories": [
      "Action",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/cannon-basketball-4/",
    "image": "/img/cannon-basketball-4.jpg",
    "title": "Cannon Basketball 4",
    "Categories": [
      "Puzzle",
      "Sports",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/paper-io-2/",
    "image": "/img/paperio2.png",
    "title": "Paper io 2",
    "Categories": [
      "Action",
      "Multiplayer",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/retrobowl/",
    "image": "/img/retrobowl.png",
    "title": "Retro Bowl",
    "Categories": [
      "Sports",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/ovo/",
    "image": "/img/ovo.png",
    "title": "OvO",
    "Categories": [
      "Parkour",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/ovo-2/",
    "image": "/img/ovo-2.png",
    "title": "OvO 2",
    "Categories": [
      "Parkour",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/ovo-3/",
    "image": "/img/ovo-3.png",
    "title": "OvO 3",
    "Categories": [
      "Parkour",
      "Popular"
    ]
  },
  {
    "url": "/gms/2/tiny-fishing/",
    "image": "/img/tiny-fishing.png",
    "title": "Tiny Fishing",
    "Categories": [
      "Clicker",
      "Casual"
    ]
  },
  {
    "url": "/gms/2/drive-mad/",
    "image": "/img/drivemad.png",
    "title": "Drive Mad",
    "Categories": [
      "Car",
      "Action",
      "Popular"
    ]
  },
  {
    "url": "/gms/2/bitlife/",
    "image": "/img/bitlife.png",
    "title": "Bitlife",
    "Categories": [
      "Popular",
      "Casual"
    ]
  },
  {
    "url": "/gms/2/ballistic-chickens/",
    "image": "/img/ballistic-chickens.png",
    "title": "Ballistic Chickens",
    "Categories": [
      "Action"
    ]
  },
  {
    "url": "/gms/2/flappy-bird/",
    "image": "/img/flappy-bird.png",
    "title": "Flappy Bird",
    "Categories": [
      "Parkour"
    ]
  },
  {
    "url": "/gms/2/awesome-tanks/",
    "image": "/img/awesome-tanks.png",
    "title": "Awesome Tanks",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/2/awesome-tanks2/",
    "image": "/img/awesome-tanks-2.png",
    "title": "Awesome Tanks 2",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/2/missiles/",
    "image": "/img/missiles.png",
    "title": "Missiles",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/2/cookie-clicker/",
    "image": "/img/cookie-clicker.png",
    "title": "Cookie Clicker",
    "Categories": [
      "Clicker",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/btd5.swf",
    "image": "/img/btd5.png",
    "title": "Bloons TD5",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/2/sketchbook-0.4/",
    "image": "/img/sketchbook.png",
    "title": "Sketchbook 0.4",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/2/among-us/",
    "image": "/img/among-us.png",
    "title": "Among Us",
    "Categories": [
      "Action",
      "Popular"
    ]
  },
  {
    "url": "/gms/2/drift-boss/",
    "image": "/img/drift-boss.png",
    "title": "Drift Boss",
    "Categories": [
      "Car",
      "Popular"
    ]
  },
  {
    "url": "/gms/2/drift-hunters/",
    "image": "/img/drift-hunters.png",
    "title": "Drift Hunters",
    "Categories": [
      "Car",
      "Popular"
    ]
  },
  {
    "url": "/gms/2/stack/",
    "image": "/img/stack.png",
    "title": "Stack",
    "Categories": [
      "Popular"
    ]
  },
  {
    "url": "/gms/2/snowball.io/",
    "image": "/img/snowball-io.png",
    "title": "Snowball.io",
    "Categories": [
      "io",
      "Multiplayer",
      "Popular"
    ]
  },
  {
    "url": "/gms/2/slope/",
    "image": "/img/slope.png",
    "title": "Slope",
    "Categories": [
      "Parkour",
      "Popular"
    ]
  },
  {
    "url": "/gms/2/basket-random/",
    "image": "/img/basket-random.png",
    "title": "Basket Random",
    "Categories": [
      "Sports",
      "Popular"
    ]
  },
  {
    "url": "/gms/2/basketbros-io/",
    "image": "/img/basketbros-io.jpg",
    "title": "Basket Bros.io",
    "Categories": [
      "Sports",
      "Popular",
      "io"
    ]
  },
  {
    "url": "/gms/2/basketball-stars/",
    "image": "/img/basketball-stars.png",
    "title": "Basketball Stars",
    "Categories": [
      "Sports"
    ]
  },
  {
    "url": "/gms/2/draw-the-hill/",
    "image": "/img/draw-the-hill.png",
    "title": "Draw the Hill",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/2/duck-life-1/",
    "image": "/img/ducklife1.png",
    "title": "Duck Life 1",
    "Categories": [
      "Flash",
      "Casual",
      "Popular"
    ]
  },
  {
    "url": "/gms/2/duck-life-2/",
    "image": "/img/ducklife2.png",
    "title": "Duck Life 2",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/2/duck-life-3/",
    "image": "/img/ducklife3.png",
    "title": "Duck Life 3",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/2/duck-life-4/",
    "image": "/img/ducklife4.png",
    "title": "Duck Life 4",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/duck-life-treasure-hunt.swf",
    "image": "/img/ducklife5.png",
    "title": "Duck Life 5",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/learntofly.swf",
    "image": "/img/learn-to-fly.png",
    "title": "Learn to Fly",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/learntofly2.swf",
    "image": "/img/learn-to-fly-2.png",
    "title": "Learn to Fly 2",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/learntofly3.swf",
    "image": "/img/learn-to-fly-3.png",
    "title": "Learn to Fly 3",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/2/baldis-basics/",
    "image": "/img/baldis-basics.png",
    "title": "Baldi's Basics",
    "Categories": [
      "Horror"
    ]
  },
  {
    "url": "/gms/2/time-shooter-2/",
    "image": "/img/time-shooter-2.png",
    "title": "Time Shooter 2",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/2/time-shooter-3/",
    "image": "/img/time-shooter-3.png",
    "title": "Time Shooter 3",
    "Categories": [
      "Action",
      "Shooter",
      "Popular"
    ]
  },
  {
    "url": "/gms/2/superhot/",
    "image": "/img/superhot.png",
    "title": "Superhot",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/2/funny-shooter-2/",
    "image": "/img/funny-shooter-2.png",
    "title": "Funny Shooter 2",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/2/doom-1993/",
    "image": "/img/doom-1993.png",
    "title": "Doom 1993",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/3/quake/",
    "image": "/img/quake.png",
    "title": "Quake",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/3/pixel-combat-2/",
    "image": "/img/pixel-combat-2.png",
    "title": "Pixel Combat 2",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/3/pixel-gun-survival/",
    "image": "/img/pixel-gun-survival.png",
    "title": "Pixel Gun Survival",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/3/1v1.lol/",
    "image": "/img/1v1-lol.png",
    "title": "1v1.lol",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/3/blockpost/",
    "image": "/img/blockpost.png",
    "title": "Blockpost",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/3/fnaf-1/",
    "image": "/img/fnaf.png",
    "title": "FNaF 1",
    "Categories": [
      "Horror",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/fnaf-hard-mode/",
    "image": "/img/fnaf-hard-mode.png",
    "title": "FNaF 1 Hard Mode",
    "Categories": [
      "Horror"
    ]
  },
  {
    "url": "/gms/3/fnaf-2/",
    "image": "/img/fnaf-2.png",
    "title": "FNaF 2",
    "Categories": [
      "Horror",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/fnaf-3/",
    "image": "/img/fnaf-3.png",
    "title": "FNAF 3",
    "Categories": [
      "Horror",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/fnaf-4/",
    "image": "/img/fnaf-4.png",
    "title": "FNaF 4",
    "Categories": [
      "Horror",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/fnaf-5/",
    "image": "/img/fnaf-5.png",
    "title": "FNaF Sister Location",
    "Categories": [
      "Horror",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/fnaf-6/",
    "image": "/img/fnaf-6.png",
    "title": "FNaF Pizza Sim",
    "Categories": [
      "Horror",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/fnaf-ucn/",
    "image": "/img/fnaf-ucn.png",
    "title": "FNaF UCN",
    "Categories": [
      "Horror",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/cluster-rush/",
    "image": "/img/cluster-rush.png",
    "title": "Cluster Rush",
    "Categories": [
      "Parkour",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/blumgi-slime/",
    "image": "/img/blumgi-slime.png",
    "title": "Blumgi Slime",
    "Categories": [
      "Casual",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/blumgi-rocket/",
    "image": "/img/blumgi-rocket.png",
    "title": "Blumgi Rocket",
    "Categories": [
      "Casual",
      "Popular",
      "Car"
    ]
  },
  {
    "url": "/gms/3/tabs/",
    "image": "/img/tabs.png",
    "title": "TABS",
    "Categories": [
      "Casual",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/g-switch-3/",
    "image": "/img/g-switch-3.png",
    "title": "G-Switch 3",
    "Categories": [
      "Casual",
      "Popular",
      "Parkour"
    ]
  },
  {
    "url": "/gms/3/fnaw/",
    "image": "/img/fnaw.png",
    "title": "FNaW",
    "Categories": [
      "Horror"
    ]
  },
  {
    "url": "/gms/3/granny/",
    "image": "/img/granny.png",
    "title": "Granny",
    "Categories": [
      "Horror"
    ]
  },
  {
    "url": "/gms/3/scratch-snake-game/",
    "image": "/img/slither.png",
    "title": "Snake",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/jacksmith.swf",
    "image": "/img/jacksmith.png",
    "title": "Jacksmith",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/3/tomb-of-the-mask/",
    "image": "/img/tomb-of-the-mask.png",
    "title": "Tomb of the Mask",
    "Categories": [
      "Action",
      "Adventure",
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/3/rooftop-snipers-1/",
    "image": "/img/rooftop-snipers-1.png",
    "title": "Rooftop Snipers 1",
    "Categories": [
      "Multiplayer",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/rooftop-snipers-2/",
    "image": "/img/rooftop-snipers-2.png",
    "title": "Rooftop Snipers 2",
    "Categories": [
      "Multiplayer",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/getaway-shootout/",
    "image": "/img/getaway-shootout.png",
    "title": "Getaway Shootout",
    "Categories": [
      "Multiplayer",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/frying-nemo/",
    "image": "/img/frying-nemo.png",
    "title": "Frying Nemo",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/3/monkey-mart/",
    "image": "/img/monkey-mart.png",
    "title": "Monkey Mart",
    "Categories": [
      "Casual",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/tosstheturtle.swf",
    "image": "/img/tosstheturtle.png",
    "title": "Toss The Turtle",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/3/snow-rider-3d/",
    "image": "/img/snow-rider-3d.png",
    "title": "Snow Rider 3D",
    "Categories": [
      "Parkour",
      "Casual",
      "Popular"
    ]
  },
  {
    "url": "/gms/3/recoil/",
    "image": "/img/recoil.png",
    "title": "Recoil",
    "Categories": [
      "Action",
      "Casual"
    ]
  },
  {
    "url": "/gms/3/eggycar/",
    "image": "/img/eggy-car.png",
    "title": "Eggy Car",
    "Categories": [
      "Car",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/house-of-hazards/",
    "image": "/img/house-of-hazards.png",
    "title": "House of Hazards",
    "Categories": [
      "Casual",
      "Popular",
      "Multiplayer"
    ]
  },
  {
    "url": "/gms/4/stickwar/",
    "image": "/img/stick-war.png",
    "title": "Stick War",
    "Categories": [
      "Stickman",
      "Action",
      "Popular"
    ]
  },
  {
    "url": "/gms/4/stickmerge/",
    "image": "/img/stick-merge.png",
    "title": "Stick Merge",
    "Categories": [
      "Stickman",
      "Action",
      "Popular"
    ]
  },
  {
    "url": "/gms/4/smash-karts/",
    "image": "/img/smash-karts.png",
    "title": "Smash Karts",
    "Categories": [
      "Car",
      "Action",
      "Popular",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/snailbob1.swf",
    "image": "/img/snailbob1.png",
    "title": "Snail Bob 1",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/snailbob2.swf",
    "image": "/img/snailbob2.png",
    "title": "Snail Bob 2",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/snailbob3.swf",
    "image": "/img/snailbob3.png",
    "title": "Snail Bob 3",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/4/snailbob4/",
    "image": "/img/snailbob4.png",
    "title": "Snail Bob 4",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/4/snailbob5/",
    "image": "/img/snailbob5.png",
    "title": "Snail Bob 5",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/4/snailbob6/",
    "image": "/img/snailbob6.png",
    "title": "Snail Bob 6",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/4/snailbob7/",
    "image": "/img/snailbob7.png",
    "title": "Snail Bob 7",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/4/snailbob8/",
    "image": "/img/snailbob8.png",
    "title": "Snail Bob 8",
    "Categories": [
      "Flash",
      "Casual",
      "Adventure",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/4/happywheels/",
    "image": "/img/happywheels.png",
    "title": "Happy Wheels",
    "Categories": [
      "Car",
      "Casual",
      "Adventure"
    ]
  },
  {
    "url": "/gms/4/cut-the-rope/",
    "image": "/img/cut-the-rope.png",
    "title": "Cut the Rope",
    "Categories": [
      "Casual",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/flashtetris.swf",
    "image": "/img/tetris.png",
    "title": "Tetris",
    "Categories": [
      "Flash",
      "Casual",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/4/murder-game/",
    "image": "/img/murder-game.png",
    "title": "Murder",
    "Categories": [
      "Action",
      "Popular"
    ]
  },
  {
    "url": "/gms/4/hexgl/",
    "image": "/img/hexgl.png",
    "title": "HexGL",
    "Categories": [
      "Car"
    ]
  },
  {
    "url": "/gms/4/csgo-clicker/",
    "image": "/img/csgo-clicker.png",
    "title": "CSGO Clicker",
    "Categories": [
      "Clicker",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/google-snake/",
    "image": "/img/google-snake.png",
    "title": "Google Snake",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/4/google-dino/",
    "image": "/img/google-dino.png",
    "title": "Google Dino",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/raftwars.swf",
    "image": "/img/raft-wars-1.png",
    "title": "Raft Wars",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/raftwars2.swf",
    "image": "/img/raft-wars-2.png",
    "title": "Raft Wars",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/ai-in-the-sky/",
    "image": "/img/ai-in-the-sky.png",
    "title": "AI in the Sky",
    "Categories": [
      "Shooter"
    ]
  },
  {
    "url": "/gms/4/minesweeper/",
    "image": "/img/minesweeper.png",
    "title": "Minesweeper",
    "Categories": [
      "Casual",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/4/mario/",
    "image": "/img/mario.png",
    "title": "Mario",
    "Categories": [
      "Adventure",
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/bloxorz.swf",
    "image": "/img/bloxorz.png",
    "title": "Bloxorz",
    "Categories": [
      "Flash",
      "Casual",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/commando2_1.swf",
    "image": "/img/commando2.png",
    "title": "Commando 2",
    "Categories": [
      "Flash",
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/minecrafttd.swf",
    "image": "/img/minecraft-tower-defence.png",
    "title": "Minecraft TD",
    "Categories": [
      "Flash",
      "Action",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/supermario63.swf",
    "image": "/img/super-mario-63.png",
    "title": "SM63",
    "Categories": [
      "Flash",
      "Adventure",
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/doodle-jump/",
    "image": "/img/doodle-jump.png",
    "title": "Doodle Jump",
    "Categories": [
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/pvz.swf",
    "image": "/img/pvz.png",
    "title": "Plants vs Zombies",
    "Categories": [
      "Flash",
      "Action",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/vex1/",
    "image": "/img/vex1.png",
    "title": "Vex 1",
    "Categories": [
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/vex2/",
    "image": "/img/vex2.png",
    "title": "Vex 2",
    "Categories": [
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/vex3/",
    "image": "/img/vex3.png",
    "title": "Vex 3",
    "Categories": [
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/vex4/",
    "image": "/img/vex4.png",
    "title": "Vex 4",
    "Categories": [
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/vex5/",
    "image": "/img/vex5.png",
    "title": "Vex 5",
    "Categories": [
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/vex6/",
    "image": "/img/vex6.png",
    "title": "Vex 6",
    "Categories": [
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/vex7/",
    "image": "/img/vex7.png",
    "title": "Vex 7",
    "Categories": [
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/4/vex8/",
    "image": "/img/vex8.png",
    "title": "Vex 8",
    "Categories": [
      "Parkour",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/alien_hominid.swf",
    "image": "/img/alienhominid.png",
    "title": "Alien Homonid",
    "Categories": [
      "Flash",
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/age_of_war.swf",
    "image": "/img/ageofwar.png",
    "title": "Age of War",
    "Categories": [
      "Flash"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/interactivebuddy.swf",
    "image": "/img/interactivebuddy.png",
    "title": "Interactive Buddy",
    "Categories": [
      "Flash",
      "Casual"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/portal.swf",
    "image": "/img/portal.png",
    "title": "Portal Flash",
    "Categories": [
      "Flash",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/4/bacon-may-die/",
    "image": "/img/bacon-may-die.png",
    "title": "Bacon May Die",
    "Categories": [
      "Casual",
      "Action"
    ]
  },
  {
    "url": "/gms/4/rabbit-samurai/",
    "image": "/img/rabbit-samurai.png",
    "title": "Rabbit Samurai",
    "Categories": [
      "Puzzle",
      "Parkour"
    ]
  },
  {
    "url": "/gms/4/rabbit-samurai2/",
    "image": "/img/rabbit-samurai2.png",
    "title": "Rabbit Samurai 2",
    "Categories": [
      "Puzzle",
      "Parkour"
    ]
  },
  {
    "url": "/gms/5/gimme-the-airpod/",
    "image": "/img/gimmetheairpod.png",
    "title": "Gimme the Airpod",
    "Categories": [
      "Multiplayer"
    ]
  },
  {
    "url": "/gms/5/game-inside-a-game/",
    "image": "/img/game-inside-a-game.png",
    "title": "Game inside a Game",
    "Categories": [
      "Puzzle"
    ]
  },
  {
    "url": "/gms/5/santy-is-home/",
    "image": "/img/santy-is-home.png",
    "title": "Santy is Home",
    "Categories": [
      "Horror"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/the-binding-of-isaac.swf",
    "image": "/img/thebindingofisaac.png",
    "title": "The Binding of Isaac",
    "Categories": [
      "Flash",
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/achievementunlocked.swf",
    "image": "/img/achievementunlocked.png",
    "title": "Achievement Unlocked",
    "Categories": [
      "Flash"
    ]
  },
  {
    "url": "/gms/5/choppy-orc/",
    "image": "/img/choppyorc.png",
    "title": "Choppy Orc",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/5/edgenotfound/",
    "image": "/img/edgenotfound.png",
    "title": "Edge Not Found",
    "Categories": [
      "Casual",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/5/hextris/",
    "image": "/img/hextris.png",
    "title": "Hextris",
    "Categories": [
      "Casual",
      "Puzzle"
    ]
  },
  {
    "url": "/gms/5/sandboxels/",
    "image": "/img/sandboxels.png",
    "title": "Sandboxels",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/5/station-141/",
    "image": "/img/station-141.png",
    "title": "Station 141",
    "Categories": [
      "Shooter",
      "Action"
    ]
  },
  {
    "url": "/gms/5/temple-run-2/",
    "image": "/img/temple-run-2.png",
    "title": "Temple Run 2",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/5/tunnel-rush/",
    "image": "/img/tunnelrush.png",
    "title": "Tunnel Rush",
    "Categories": [
      "none"
    ]
  },
  {
    "url": "/gms/5/fnf/",
    "image": "/img/fnf.png",
    "title": "FNF",
    "Categories": [
      "Popular"
    ]
  },
  {
    "url": "/gms/5/stackball/",
    "image": "/img/stackball.png",
    "title": "Stackball",
    "Categories": [
      "Popular"
    ]
  },
  {
    "url": "/gms/5/incredibox/",
    "image": "/img/incredibox.png",
    "title": "Incredibox",
    "Categories": [
      "Popular"
    ]
  },
  {
    "url": "/gms/5/slowroads/",
    "image": "/img/slowroads.png",
    "title": "slowroads",
    "Categories": [
      "Popular",
      "Car"
    ]
  },
  {
    "url": "/gms/5/big-tower-tiny-square/",
    "image": "/img/big-tower-tiny-square.png",
    "title": "Big Tower Tiny Square",
    "Categories": [
      "Parkour",
      "Popular"
    ]
  },
  {
    "url": "/gms/5/big-flappy-tower-tiny-square/",
    "image": "/img/big-flappy-tower-tiny-square.png",
    "title": "Big Flappy Tower Tiny Square",
    "Categories": [
      "Parkour",
      "Popular"
    ]
  },
  {
    "url": "/gms/5/bobtherobber2/",
    "image": "/img/bobtherobber2.jpeg",
    "title": "Bob the Robber 2",
    "Categories": [
      "Puzzle"
    ]
  },
  {
    "url": "/gms/5/edge-surf/",
    "image": "/img/edge-surf.png",
    "title": "Edge Let's Surf",
    "Categories": [
      "Sports"
    ]
  },
  {
    "url": "/gms/5/greybox/",
    "image": "/img/greybox.png",
    "title": "Greybox Testing",
    "Categories": [
      "none"
    ]
  },
  {
    "url": "/gms/5/madalin-stunt-cars-2/",
    "image": "/img/madalin-stunt-cars-2.jpg",
    "title": "Madalin Stunt Cars 2",
    "Categories": [
      "Car",
      "Sports"
    ]
  },
  {
    "url": "/gms/5/madalin-stunt-cars-3/",
    "image": "/img/madalin-stunt-cars-3.jpg",
    "title": "Madalin Stunt Cars 3",
    "Categories": [
      "Car",
      "Sports"
    ]
  },
  {
    "url": "/gms/5/monster-tracks/",
    "image": "/img/monster-tracks.jpg",
    "title": "Monster Tracks",
    "Categories": [
      "Car",
      "Sports"
    ]
  },
  {
    "url": "/gms/5/n-gon/",
    "image": "/img/n-gon.png",
    "title": "N-GON",
    "Categories": [
      "Action"
    ]
  },
  {
    "url": "/gms/5/noob-steve-parkour/",
    "image": "/img/noob-steve-parkour.jpg",
    "title": "Noob Steve Parkour",
    "Categories": [
      "Parkour"
    ]
  },
  {
    "url": "/gms/5/rocket-league/",
    "image": "/img/rocket-league.png",
    "title": "Rocket League",
    "Categories": [
      "Sports"
    ]
  },
  {
    "url": "/gms/5/scrapmetal/",
    "image": "/img/scrapmetal.png",
    "title": "Scrap Metal",
    "Categories": [
      "Car"
    ]
  },
  {
    "url": "/gms/5/sort-the-court/",
    "image": "/img/sort-the-court.png",
    "title": "Sort the Court",
    "Categories": [
      "Puzzle",
      "Casual"
    ]
  },
  {
    "url": "/gms/5/space-company/",
    "image": "/img/space-company.png",
    "title": "Space Company",
    "Categories": [
      "Clicker"
    ]
  },
  {
    "url": "/gms/5/tanuki-sunset/",
    "image": "/img/tanuki-sunset.png",
    "title": "Tanuki Sunset",
    "Categories": [
      "Sports"
    ]
  },
  {
    "url": "./static/shellshockers.html",
    "image": "/img/shellshockers.png",
    "title": "Shell Shockers",
    "Categories": [
      "Action",
      "Shooter",
      "io",
      "Popular"
    ]
  },
  {
    "url": "/gms/5/yohoho/",
    "image": "/img/yohoho.png",
    "title": "YoHoHo.IO",
    "Categories": [
      "Action",
      "io",
      "Popular"
    ]
  },
  {
    "url": "/gms/1/flash/?game=SWF/fancypantsadventure.swf",
    "image": "/img/fancy-pants.png",
    "title": "Fancy Pants Adventure",
    "Categories": [
      "Flash",
      "Adventure",
      "Parkour"
    ]
  },
  {
    "url": "/gms/5/10-minutes-till-dawn/",
    "image": "/img/10-minutes-till-dawn.png",
    "title": "10 Minutes till Dawn",
    "Categories": [
      "Action",
      "Shooter"
    ]
  },
  {
    "url": "/gms/6/amidst-the-clouds/",
    "image": "/img/amidst-the-clouds.png",
    "title": "Amidst the Clouds",
    "Categories": [
      "Parkour"
    ]
  },
  {
    "url": "/gms/6/blob-opera/",
    "image": "/img/blob-opera.png",
    "title": "Blob Opera",
    "Categories": [
      "none"
    ]
  },
  {
    "url": "/gms/6/cars-simulator/",
    "image": "/img/cars-simulator.png",
    "title": "Cars Simulator",
    "Categories": [
      "Car"
    ]
  },
  {
    "url": "/gms/6/cell-machine/",
    "image": "/img/cell-machine.png",
    "title": "Cell Machine",
    "Categories": [
      "Puzzle"
    ]
  },
  {
    "url": "/gms/6/cod-zombies/",
    "image": "/img/cod-zombies.png",
    "title": "COD Zombies",
    "Categories": [
      "Action",
      "Shooter",
      "Horror"
    ]
  },
  {
    "url": "/gms/6/craftmine/",
    "image": "/img/craftmine.png",
    "title": "CraftMine",
    "Categories": [
      "none"
    ]
  },
  {
    "url": "/gms/6/crossyroad/",
    "image": "/img/crossyroad.png",
    "title": "Crossy Road",
    "Categories": [
      "Parkour"
    ]
  },
  {
    "url": "/gms/6/cubefield/",
    "image": "/img/cubefield.png",
    "title": "CubeField",
    "Categories": [
      "none"
    ]
  },
  {
    "url": "/gms/6/deepest-sword/",
    "image": "/img/deepest-sword.png",
    "title": "Deepest Sword",
    "Categories": [
      "Parkour"
    ]
  },
  {
    "url": "/gms/6/doomori/",
    "image": "/img/doomori.png",
    "title": "Doomori",
    "Categories": [
      "Shooter"
    ]
  },
  {
    "url": "/gms/6/dragon-vs-bricks/",
    "image": "/img/dragon-vs-bricks.png",
    "title": "Dragon vs Bricks",
    "Categories": [
      "none"
    ]
  },
  {
    "url": "/gms/6/earn-to-die/",
    "image": "/img/earn-to-die.png",
    "title": "Earn to Die",
    "Categories": [
      "Car"
    ]
  },
  {
    "url": "/gms/6/fireboywatergirlforesttemple/",
    "image": "/img/fireboywatergirlforesttemple.png",
    "title": "Fireboy and Watergirl",
    "Categories": [
      "Adventure",
      "Parkour",
      "Multiplayer"
    ]
  },
  {
    "url": "/gms/6/kitchen-gun-game/",
    "image": "/img/kitchen-gun-game.png",
    "title": "Kitchen Gun",
    "Categories": [
      "Shooter"
    ]
  },
  {
    "url": "/gms/6/soccer-random/",
    "image": "/img/soccer-random.png",
    "title": "Soccer Random",
    "Categories": [
      "Sports"
    ]
  },
  {
    "url": "/gms/6/superfowlist/",
    "image": "/img/superfowlist.png",
    "title": "Super Fowlst",
    "Categories": [
      "Parkour",
      "Action"
    ]
  },
  {
    "url": "/gms/6/volley-random/",
    "image": "/img/volley-random.png",
    "title": "Volley Random",
    "Categories": [
      "Sports"
    ]
  },
  {
    "url": "/gms/6/xx142-b2exe/",
    "image": "/img/xx142-b2exe.png",
    "title": "xx142-b2.exe",
    "Categories": [
      "Puzzle"
    ]
  },
  {
    "url": "/gms/6/gladihoppers/",
    "image": "/img/gladihoppers.png",
    "title": "Gladihoppers",
    "Categories": [
      "Popular"
    ]
  },
  {
    "url": "/gms/6/ragdoll-archers/",
    "image": "/img/ragdoll-archers.png",
    "title": "Ragdoll Archers",
    "Categories": [
      "Popular"
    ]
  },
  {
    "url": "/gms/6/polytrack/",
    "image": "/img/polytrack.png",
    "title": "Polytrack",
    "Categories": [
      "Popular",
      "Car"
    ]
  },
  {
    "url": "/gms/6/burger-and-frights/",
    "image": "/img/burger-and-frights.png",
    "title": "Burger and Frights",
    "Categories": [
      "Horror"
    ]
  },
  {
    "url": "/gms/6/gunspin/",
    "image": "/img/gunspin.png",
    "title": "Gun Spin",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/6/tag/",
    "image": "/img/tag.png",
    "title": "Tag",
    "Categories": [
      "Multiplayer"
    ]
  },
  {
    "url": "/gms/6/iron-snout/",
    "image": "/img/iron-snout.png",
    "title": "Iron Snout",
    "Categories": [
      "Casual",
      "Action"
    ]
  },
  {
    "url": "/gms/6/little-alchemy-2/",
    "image": "/img/little-alchemy-2.png",
    "title": "Little Alchemy 2",
    "Categories": [
      "Puzzle"
    ]
  },
  {
    "url": "/gms/6/chicken-merge/",
    "image": "/img/chicken-merge.png",
    "title": "Chicken Merge",
    "Categories": [
      "Casual"
    ]
  },
  {
    "url": "/gms/6/pizzatower/",
    "image": "/img/pizzatower.png",
    "title": "Pizza Tower",
    "Categories": [
      "Parkour"
    ]
  },
  {
    "url": "/gms/6/superstarcar/",
    "image": "/img/superstarcar.png",
    "title": "Super Star Car",
    "Categories": [
      "Car"
    ]
  },
  {
    "url": "/gms/6/drift-rider/",
    "image": "/img/drift-rider.png",
    "title": "Drift Rider",
    "Categories": [
      "Car"
    ]
  },
  {
    "url": "./static/retrobowlcollege.html",
    "image": "/img/retrobowlcollege.png",
    "title": "Retro Bowl College",
    "Categories": [
      "Sports"
    ]
  },
  {
    "url": "/gms/7/pou/",
    "image": "/img/pou.png",
    "title": "Pou",
    "Categories": [
      "none"
    ]
  },
  {
    "url": "/gms/7/blockblast/",
    "image": "/img/blockblast.png",
    "title": "Block Blast",
    "Categories": [
      "Puzzle"
    ]
  },
  {
    "url": "/gms/7/apple-knight/",
    "image": "/img/apple-knight.png",
    "title": "Apple Knight",
    "Categories": [
      "Adventure",
      "Parkour"
    ]
  },
  {
    "url": "/gms/7/dreader/",
    "image": "/img/dreader.png",
    "title": "Dreader",
    "Categories": [
      "Horror"
    ]
  },
  {
    "url": "/gms/7/knife-hit/",
    "image": "/img/knife-hit.png",
    "title": "Knife Hit",
    "Categories": [
      "none"
    ]
  },
  {
    "url": "/gms/7/wbwwb/",
    "image": "/img/wbwwb.png",
    "title": "We Become What We Behold",
    "Categories": [
      "Popular"
    ]
  },
  {
    "url": "/gms/7/adventure-capitalist/",
    "image": "/img/adventure-capitalist.png",
    "title": "AdVenture Capitalist",
    "Categories": [
      "Clicker",
      "Popular"
    ]
  },
  {
    "url": "/gms/7/race-survival/",
    "image": "/img/race-survival.png",
    "title": "Race Survival",
    "Categories": [
      "Car"
    ]
  },
  {
    "url": "./static/kirka.html",
    "image": "/img/kirka.png",
    "title": "Kirka",
    "Categories": [
      "Shooter",
      "io"
    ]
  },
  {
    "url": "./static/craftnite.html",
    "image": "/img/craftnite.png",
    "title": "CraftNite",
    "Categories": [
      "Shooter",
      "io"
    ]
  },
  {
    "url": "./static/deadshot.html",
    "image": "/img/deadshot.png",
    "title": "DeadShot.io",
    "Categories": [
      "Shooter",
      "io"
    ]
  },
  {
    "url": "./static/fortzone.html",
    "image": "/img/fortzone.png",
    "title": "Fortzone Battle Royale",
    "Categories": [
      "Shooter",
      "io"
    ]
  },
  {
    "url": "/gms/7/escape-road/",
    "image": "/img/escape-road.png",
    "title": "Escape Road",
    "Categories": [
      "Car",
      "Popular"
    ]
  },
  {
    "url": "/gms/7/escape-road-2/",
    "image": "/img/escape-road-2.png",
    "title": "Escape Road 2",
    "Categories": [
      "Car",
      "Popular"
    ]
  },
  {
    "url": "/gms/7/swingo/",
    "image": "/img/swingo.png",
    "title": "Swingo",
    "Categories": [
      "Parkour",
      "Popular"
    ]
  },
  {
    "url": "/gms/7/highway-traffic/",
    "image": "/img/highway-traffic.png",
    "title": "Highway Traffic",
    "Categories": [
      "Car"
    ]
  },
  {
    "url": "/gms/7/crazy-shooters/",
    "image": "/img/crazy-shooters.png",
    "title": "Crazy Shooters",
    "Categories": [
      "Shooter"
    ]
  },
  {
    "url": "/gms/7/crazycattle3d/",
    "image": "/img/crazycattle3d.png",
    "title": "Crazy Cattle 3D",
    "Categories": [
      "Popular"
    ]
  },
  {
    "url": "/gms/7/gangsta-island/",
    "image": "/img/gangsta-island.png",
    "title": "Gangsta Island",
    "Categories": [
      "Popular"
    ]
  },
  {
    "url": "/gms/7/hungry-lamu/",
    "image": "/img/hungry-lamu.png",
    "title": "Hungry Lamu",
    "Categories": [
      "Horror"
    ]
  },
  {
    "url": "/gms/7/level-devil/",
    "image": "/img/level-devil.png",
    "title": "Level Devil",
    "Categories": [
      "Parkour",
      "Popular"
    ]
  },
  {
    "url": "/gms/7/sandtris/",
    "image": "/img/sandtris.png",
    "title": "Sandtris",
    "Categories": [
      "Puzzle"
    ]
  },
  {
    "url": "/gms/7/slot-or-not/",
    "image": "/img/slot-or-not.png",
    "title": "Slot or Not",
    "Categories": [
      "Adventure"
    ]
  },
  {
    "url": "/gms/7/space-waves/",
    "image": "/img/space-waves.png",
    "title": "Space Waves",
    "Categories": [
      "Parkour"
    ]
  },
  {
    "url": "/gms/7/zombie-derby-pixel-survival/",
    "image": "/img/zombie-derby-pixel-survival.png",
    "title": "Zombie Derby Pixel Survival",
    "Categories": [
      "Car",
      "Popular"
    ]
  }
];

games.forEach(game => {
  const fileName2 = game.title.replace(/\./g, "-");
  const fileName1 = fileName2.replace(/\s+/g, '-') + '.html';
  const fileName = fileName1.replace('---', '-');
  const fileContent = `

<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="description" content="${game.title} game online  - AshPixel: Play instantly in fullscreen browser, no downloads, no ads. Explore and enjoy various gaming experiences now!">
  <script src="/js/games.js"></script>
  <script src="/js/csr.js"></script>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title></title>
  <link rel="stylesheet" href="/css/a.css">
</head>

<body>

  <div id="particles-js"></div>
  <script src="../particles.js"></script>
  <script src="js/app.js"></script>
  <div id="sideNav">
    <span class="logo">
      <h1>AshPixel.com</h1>
    </span>
    <div class="navigationItem" onclick="a('/')">
      <div class="navItemSrc"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          data-lucide="home" aria-hidden="true" class="lucide lucide-home">
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
          <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
          </path>
        </svg>
        <h1>Home</h1>
      </div>
    </div>
    <div class="navigationItem allgames" onclick="a('/games')">
      <div class="navItemSrc"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          data-lucide="gamepad-2" aria-hidden="true" class="lucide lucide-gamepad-2">
          <line x1="6" x2="10" y1="11" y2="11"></line>
          <line x1="8" x2="8" y1="9" y2="13"></line>
          <line x1="15" x2="15.01" y1="12" y2="12"></line>
          <line x1="18" x2="18.01" y1="10" y2="10"></line>
          <path
            d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z">
          </path>
        </svg>
        <h1>All Games</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/new')">
      <div class="navItemSrc"><svg width="256px" height="256px" viewBox="-25.6 -25.6 563.20 563.20" id="icons"
          xmlns="http://www.w3.org/2000/svg" fill="#c7c7c7" stroke="#c7c7c7">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g>
          <g>
            <path
              d="M259.92,262.91,216.4,149.77a9,9,0,0,0-16.8,0L156.08,262.91a9,9,0,0,1-5.17,5.17L37.77,311.6a9,9,0,0,0,0,16.8l113.14,43.52a9,9,0,0,1,5.17,5.17L199.6,490.23a9,9,0,0,0,16.8,0l43.52-113.14a9,9,0,0,1,5.17-5.17L378.23,328.4a9,9,0,0,0,0-16.8L265.09,268.08A9,9,0,0,1,259.92,262.91Z"
              fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="41.983999999999995"></path>
            <polygon points="108 68 88 16 68 68 16 88 68 108 88 160 108 108 160 88 108 68" fill="none" stroke="#c7c7c7"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="41.983999999999995"></polygon>
            <polygon
              points="426.67 117.33 400 48 373.33 117.33 304 144 373.33 170.67 400 240 426.67 170.67 496 144 426.67 117.33"
              fill="none" stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="41.983999999999995"></polygon>
          </g>
        </svg>
        <h1>New Games</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/recent')">
      <div class="navItemSrc"><svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g>
          <g>
            <path
              d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#c7c7c7" stroke-width="2.208" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
        <h1>Recent Games</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/popular')">
      <div class="navItemSrc"><svg fill="#c7c7c7" viewBox="-0.96 -0.96 17.92 17.92" xmlns="http://www.w3.org/2000/svg"
          stroke="#c7c7c7" stroke-width="0.16">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <path
              d="M9.32 15.653a.812.812 0 0 1-.086-.855c.176-.342.245-.733.2-1.118a2.106 2.106 0 0 0-.267-.779 2.027 2.027 0 0 0-.541-.606 3.96 3.96 0 0 1-1.481-2.282c-1.708 2.239-1.053 3.51-.235 4.63a.748.748 0 0 1-.014.901.87.87 0 0 1-.394.283.838.838 0 0 1-.478.023c-1.105-.27-2.145-.784-2.85-1.603a4.686 4.686 0 0 1-.906-1.555 4.811 4.811 0 0 1-.263-1.797s-.133-2.463 2.837-4.876c0 0 3.51-2.978 2.292-5.18a.621.621 0 0 1 .112-.653.558.558 0 0 1 .623-.147l.146.058a7.63 7.63 0 0 1 2.96 3.5c.58 1.413.576 3.06.184 4.527.325-.292.596-.641.801-1.033l.029-.064c.198-.477.821-.325 1.055-.013.086.137 2.292 3.343 1.107 6.048a5.516 5.516 0 0 1-1.84 2.027 6.127 6.127 0 0 1-2.138.893.834.834 0 0 1-.472-.038.867.867 0 0 1-.381-.29zM7.554 7.892a.422.422 0 0 1 .55.146c.04.059.066.126.075.198l.045.349c.02.511.014 1.045.213 1.536.206.504.526.95.932 1.298a3.06 3.06 0 0 1 1.16 1.422c.22.564.25 1.19.084 1.773a4.123 4.123 0 0 0 1.39-.757l.103-.084c.336-.277.613-.623.813-1.017.201-.393.322-.825.354-1.269.065-1.025-.284-2.054-.827-2.972-.248.36-.59.639-.985.804-.247.105-.509.17-.776.19a.792.792 0 0 1-.439-.1.832.832 0 0 1-.321-.328.825.825 0 0 1-.035-.729c.412-.972.54-2.05.365-3.097a5.874 5.874 0 0 0-1.642-3.16c-.156 2.205-2.417 4.258-2.881 4.7a3.537 3.537 0 0 1-.224.194c-2.426 1.965-2.26 3.755-2.26 3.834a3.678 3.678 0 0 0 .459 2.043c.365.645.89 1.177 1.52 1.54C4.5 12.808 4.5 10.89 7.183 8.14l.372-.25z">
            </path>
          </g>
        </svg>
        <h1>Popular</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/multiplayer')">
      <div class="navItemSrc"><svg fill="#c7c7c7" width="256px" height="256px" viewBox="-0.48 -0.48 24.96 24.96"
          xmlns="http://www.w3.org/2000/svg" stroke="#c7c7c7" stroke-width="0.312">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <path
              d="M.221 16.268a15.064 15.064 0 0 0 1.789 1.9C2.008 18.111 2 18.057 2 18a5.029 5.029 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.784A2.968 2.968 0 0 1 4 9a2.988 2.988 0 0 1 5.022-2.2 5.951 5.951 0 0 1 2.022-.715 4.994 4.994 0 1 0-7.913 6.085 7.07 7.07 0 0 0-2.91 4.098zM23.779 16.268a7.07 7.07 0 0 0-2.91-4.1 4.994 4.994 0 1 0-7.913-6.086 5.949 5.949 0 0 1 2.022.715 2.993 2.993 0 1 1 3.614 4.74 1 1 0 0 0 .175 1.784A5.029 5.029 0 0 1 22 18c0 .057-.008.111-.01.167a15.065 15.065 0 0 0 1.789-1.899z">
            </path>
            <path
              d="M18.954 20.284a7.051 7.051 0 0 0-3.085-5.114A4.956 4.956 0 0 0 17 12a5 5 0 1 0-8.869 3.17 7.051 7.051 0 0 0-3.085 5.114 14.923 14.923 0 0 0 1.968.849C7.012 21.088 7 21.046 7 21a5.031 5.031 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.785A2.964 2.964 0 0 1 9 12a3 3 0 1 1 6 0 2.964 2.964 0 0 1-1.408 2.537 1 1 0 0 0 .175 1.785A5.031 5.031 0 0 1 17 21c0 .046-.012.088-.013.133a14.919 14.919 0 0 0 1.967-.849z">
            </path>
          </g>
        </svg>
        <h1>Multiplayer</h1>
      </div>
    </div>
    <hr>
    <div class="navigationItem" onclick="a('/action')">
      <div class="navItemSrc"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none"
          stroke="#c7c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1039999999999999">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <path d="m2.75 9.25 1.5 2.5 2 1.5m-4.5 0 1 1m1.5-2.5-1.5 1.5m3-1 8.5-8.5v-2h-2l-8.5 8.5"></path>
            <path
              d="m10.25 12.25-2.25-2.25m2-2 2.25 2.25m1-1-1.5 2.5-2 1.5m4.5 0-1 1m-1.5-2.5 1.5 1.5m-7.25-5.25-4.25-4.25v-2h2l4.25 4.25">
            </path>
          </g>
        </svg>
        <h1>Action</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/adventure')">
      <div class="navItemSrc"><svg width="256px" height="256px" viewBox="0 0 24.00 24.00" fill="none"
          xmlns="http://www.w3.org/2000/svg" stroke="#c7c7c7">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <g id="Navigation / Compass">
              <g id="Vector">
                <path
                  d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                  stroke="#c7c7c7" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M10.5 10.5L16 8L13.5 13.5L8 16L10.5 10.5Z" stroke="#c7c7c7" stroke-width="2.4"
                  stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </g>
          </g>
        </svg>
        <h1>Adventure</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/car')">
      <div class="navItemSrc"><svg fill="#c7c7c7" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" width="256px" height="256px"
          viewBox="-39.31 -39.31 1061.30 1061.30" xml:space="preserve" stroke="#c7c7c7" stroke-width="5.896062">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <g>
              <path
                d="M815.334,307.738c-44.1-38.1-93.9-67.8-148.2-88.3c-56.1-21.3-115.3-32.1-175.799-32.1c-60.5,0-119.7,10.8-175.8,32.1 c-54.2,20.6-104.1,50.3-148.2,88.3c-89,76.9-148,182.8-166,298.4c-5,31.9,4.2,64.2,25.1,88.7s51.4,38.5,83.5,38.5h281.2 c18.4,36.7,56.4,62,100.2,62c43.799,0,81.799-25.3,100.2-62h281.2c32.199,0,62.6-14,83.5-38.5c21-24.5,30.1-56.8,25.1-88.7 C963.334,490.539,904.334,384.638,815.334,307.738z M491.334,725.338c-16.5,0-30.8-9.6-37.7-23.4c-2.8-5.6-4.3-11.899-4.3-18.6 c0-23.2,18.8-42,42-42c13.7,0,25.9,6.6,33.5,16.7c5.3,7,8.5,15.8,8.5,25.3C533.334,706.539,514.534,725.338,491.334,725.338z M880.234,629.838c-1.4,1.6-3.801,3.5-7.5,3.5h-281.2c-18.4-36.7-56.4-62-100.2-62c-3.2,0-6.4,0.1-9.6,0.4l-128.4-169.601 c-22-29-66.9-1.3-50.9,31.4l93.601,191c-1.8,2.8-3.4,5.8-4.9,8.8h-281.2c-3.8,0-6.2-1.9-7.5-3.5c-1.4-1.6-2.9-4.4-2.3-8.2 c14.4-92.2,61.5-176.8,132.6-238.2c35.2-30.4,75-54.1,118.3-70.5c32.3-12.3,66-20.1,100.399-23.6v81.2c0,22.1,17.9,40,40,40 c22.1,0,40-17.9,40-40v-81.2c34.4,3.4,68,11.3,100.4,23.6c43.3,16.4,83.1,40.1,118.3,70.5c71.101,61.4,118.2,146,132.601,238.2 C883.134,625.539,881.634,628.239,880.234,629.838z">
              </path>
            </g>
          </g>
        </svg>
        <h1>Car</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/clicker')">
      <div class="navItemSrc"><svg width="256px" height="256px" viewBox="-0.8 -0.8 17.60 17.60" version="1.1"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#c7c7c7" stroke="#c7c7c7"
          stroke-width="0.272">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g>
          <g>
            <path fill="#c7c7c7"
              d="M12.6 5c-0.2 0-0.5 0-0.6 0 0-0.2-0.2-0.6-0.4-0.8s-0.6-0.4-1.1-0.4c-0.2 0-0.4 0-0.6 0.1-0.1-0.2-0.2-0.3-0.3-0.5-0.2-0.2-0.5-0.4-1.1-0.4-0.2 0-0.4 0-0.5 0.1v-1.7c0-0.6-0.4-1.4-1.4-1.4-0.4 0-0.8 0.2-1.1 0.4-0.5 0.6-0.5 1.4-0.5 1.4v4.3c-0.6 0.1-1.1 0.3-1.4 0.6-0.6 0.7-0.6 1.6-0.6 2.8 0 0.2 0 0.5 0 0.7 0 1.4 0.7 2.1 1.4 2.8l0.3 0.4c1.3 1.2 2.4 1.6 5.1 1.6 2.9 0 4.2-1.6 4.2-5.1v-2.5c0-0.7-0.2-2.1-1.4-2.4zM13 7.4v2.6c0 3.4-1.3 4.1-3.2 4.1-2.4 0-3.3-0.3-4.3-1.3-0.1-0.1-0.2-0.2-0.4-0.4-0.7-0.8-1.1-1.2-1.1-2.2 0-0.2 0-0.5 0-0.7 0-1 0-1.7 0.3-2.1 0.1-0.1 0.4-0.2 0.7-0.2v0.5l-0.3 1.5c0 0.1 0 0.1 0.1 0.2s0.2 0 0.2 0l1-1.2c0-0.1 0-0.2 0-0.2v-6.2c0-0.1 0-0.5 0.2-0.7 0.1 0 0.2-0.1 0.4-0.1 0.3 0 0.4 0.3 0.4 0.4v3.1c0 0 0 0 0 0v1.2c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-1.3c0 0 0 0 0 0 0-0.1 0.1-0.5 0.5-0.5 0.3 0 0.5 0.1 0.5 0.4v1.3c0 0.3 0.2 0.6 0.5 0.6s0.5-0.3 0.5-0.5v-0.7c0-0.1 0.1-0.3 0.5-0.3 0.2 0 0.3 0.1 0.3 0.1 0.2 0.1 0.2 0.4 0.2 0.4v0.8c0 0.3 0.2 0.5 0.4 0.5 0.3 0 0.5-0.1 0.5-0.4 0-0.1 0.1-0.2 0.2-0.3 0 0 0.1 0 0.2 0 0.6 0.2 0.7 1.2 0.7 1.5 0-0.1 0-0.1 0 0z">
            </path>
          </g>
        </svg>
        <h1>Clicker</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/flash')">
      <div class="navItemSrc"><svg fill="#c7c7c7" height="256px" width="256px" version="1.1" id="Capa_1"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="-15.08 -15.08 532.87 532.87" xml:space="preserve" stroke="#c7c7c7" stroke-width="1.5081209999999998">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.005414"></g>
          <g>
            <g>
              <g>
                <g>
                  <path
                    d="M251.343,0.011C112.535,0.011,0,112.546,0,251.375s112.535,251.321,251.343,251.321s251.364-112.535,251.364-251.321 C502.707,112.546,390.172,0.011,251.343,0.011z M360.771,154.199c0,0-42.041-0.69-59.061,25.863 c-4.681,7.334-10.872,20.19-17.688,35.398h44.328v59.794h-69.868c-10.052,23.685-19.306,44.997-25.346,55.372 c-15.531,26.51-42.085,47.973-65.014,57.572c-22.843,9.556-50.152,8.801-50.152,8.801v-58.284c0,0,43.53,5.867,67.15-43.551 c23.62-49.462,51.662-139.541,95.947-172.739c44.285-33.219,79.747-25.108,79.704-25.108V154.199z">
                  </path>
                </g>
              </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
              <g> </g>
            </g>
          </g>
        </svg>
        <h1>Flash</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/horror')">
      <div class="navItemSrc"><svg width="256px" height="256px" viewBox="0 0 24.00 24.00" fill="none"
          xmlns="http://www.w3.org/2000/svg" stroke="#c7c7c7">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <path
              d="M4.8824 12.9557L10.5021 19.3071C11.2981 20.2067 12.7019 20.2067 13.4979 19.3071L19.1176 12.9557C20.7905 11.0649 21.6596 8.6871 20.4027 6.41967C18.9505 3.79992 16.2895 3.26448 13.9771 5.02375C13.182 5.62861 12.5294 6.31934 12.2107 6.67771C12.1 6.80224 11.9 6.80224 11.7893 6.67771C11.4706 6.31934 10.818 5.62861 10.0229 5.02375C7.71053 3.26448 5.04945 3.79992 3.59728 6.41967C2.3404 8.6871 3.20947 11.0649 4.8824 12.9557Z"
              stroke="#c7c7c7" stroke-width="1.9440000000000002" stroke-linejoin="round"></path>
            <path
              d="M12 7L11.3093 9.07203C11.1142 9.65754 11.2002 10.3004 11.5426 10.8139L12.2604 11.8906C12.7083 12.5624 12.7083 13.4376 12.2604 14.1094L11.513 15.2305C11.1876 15.7186 11.0929 16.3251 11.2541 16.8893L12 19.5"
              stroke="#c7c7c7" stroke-width="1.9440000000000002" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
        <h1>Horror</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/io')">
      <div class="navItemSrc"><svg fill="#c7c7c7" width="256px" height="256px" viewBox="-4 -2 24 24"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-joystick" stroke="#c7c7c7"
          stroke-width="0.576">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <path
              d="M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm1 7h2a3 3 0 0 1 3 3v4H0v-4a3 3 0 0 1 3-3h6V7.874A4.002 4.002 0 0 1 10 0a4 4 0 0 1 1 7.874V13zm-9 5h12v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2zm2.5-6h2a1.5 1.5 0 0 1 0 3h-2a1.5 1.5 0 0 1 0-3z">
            </path>
          </g>
        </svg>
        <h1>.io</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/parkour')">
      <div class="navItemSrc"><svg fill="#c7c7c7" height="200px" width="200px" version="1.1"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink"
          enable-background="new 0 0 512 512" stroke="#c7c7c7" stroke-width="6.656000000000001">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <g>
              <path
                d="m184.5,460.1h137.3v-223.1c0-11.3 9.1-20.4 20.3-20.4h69.3l-155.8-156.5-155.7,156.5h64.2c11.2,0 20.3,9.1 20.3,20.4v223.1h0.1zm157.5,40.9h-177.9c-11.2,0-20.3-9.1-20.3-20.4v-223.1h-92.9c-19.9,0-25.2-23.9-14.4-34.9l204.8-205.9c7.6-7.7 21.1-7.7 28.7,1.06581e-14l204.7,205.9c12.6,12.7 5.4,34.9-14.4,34.9h-98v223.1c0.1,11.3-9,20.4-20.3,20.4z">
              </path>
            </g>
          </g>
        </svg>
        <h1>Parkour</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/parkour')">
      <div class="navItemSrc"><svg viewBox="-1.2 -1.2 26.40 26.40" fill="none" xmlns="http://www.w3.org/2000/svg"
          stroke="#c7c7c7" stroke-width="0.096">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11.1206 1.02129C12.109 1.0067 12.9592 1.54344 13.7096 2.29199L13.7104 2.29285L14.9707 3.5531C15.1118 3.34249 15.2753 3.14257 15.461 2.95679C17.0025 1.4153 19.5018 1.4153 21.0433 2.9568C22.5848 4.49829 22.5848 6.99754 21.0433 8.53904C20.8575 8.72481 20.6576 8.88828 20.447 9.02939L21.7072 10.2896L21.708 10.2905C22.4565 11.0408 22.9932 11.891 22.9787 12.8794C22.9642 13.8602 22.41 14.6797 21.7058 15.3789C21.7054 15.3793 21.7049 15.3798 21.7045 15.3802L20.4287 16.656C19.9519 17.1327 19.3279 17.0824 18.9512 16.9234C18.5783 16.7659 18.1803 16.4041 18.0897 15.8508C18.0262 15.4628 17.8456 15.0914 17.5452 14.791C16.7847 14.0306 15.5518 14.0306 14.7914 14.791C14.0309 15.5515 14.0309 16.7844 14.7914 17.5448C15.0917 17.8452 15.4631 18.0259 15.8511 18.0894C16.4044 18.18 16.7663 18.5779 16.9237 18.9509C17.0827 19.3276 17.1331 19.9516 16.6564 20.4283L15.377 21.7077C15.3766 21.7081 15.3762 21.7085 15.3757 21.709C14.6777 22.412 13.8591 22.965 12.8794 22.9795C11.8922 22.994 11.0429 22.4585 10.2938 21.7112L10.2929 21.7103L9.0295 20.4469C8.88841 20.6575 8.72496 20.8573 8.53922 21.0431C6.99773 22.5846 4.49847 22.5846 2.95698 21.0431C1.41549 19.5016 1.41549 17.0023 2.95698 15.4608C3.14272 15.2751 3.3426 15.1116 3.55317 14.9706L2.29294 13.7103L2.29208 13.7095C1.54353 12.9591 1.00681 12.1089 1.02141 11.1205C1.03589 10.1397 1.59009 9.32029 2.29424 8.62107C2.29469 8.62062 2.29515 8.62017 2.2956 8.61972L3.57165 7.34366C4.0484 6.86691 4.67249 6.9173 5.04916 7.07633C5.4221 7.23378 5.82003 7.59563 5.91062 8.14898C5.97414 8.53701 6.15479 8.90842 6.45519 9.20882C7.21563 9.96926 8.44856 9.96926 9.209 9.20882C9.96945 8.44837 9.96945 7.21545 9.20901 6.455C8.90861 6.1546 8.53719 5.97396 8.14917 5.91043C7.59581 5.81984 7.23397 5.42191 7.07652 5.04897C6.91749 4.6723 6.86709 4.04821 7.34384 3.57146L8.61978 2.29553C8.62025 2.29506 8.62071 2.29459 8.62118 2.29413C9.32039 1.58996 10.1398 1.03576 11.1206 1.02129ZM11.1501 3.02107C10.9456 3.02409 10.6003 3.13919 10.0393 3.70438L10.0367 3.70706L9.49334 4.25039C9.90279 4.44025 10.2863 4.70387 10.6232 5.04079C12.1647 6.58228 12.1647 9.08154 10.6232 10.623C9.08173 12.1645 6.58247 12.1645 5.04098 10.623C4.70406 10.2861 4.44044 9.9026 4.25058 9.49315L3.70715 10.0366L3.70449 10.0392C3.13933 10.6002 3.02421 10.9455 3.02119 11.1501C3.01827 11.3476 3.11651 11.7039 3.70773 12.2967C3.70782 12.2968 3.70792 12.2969 3.70801 12.297L6.03813 14.6271C6.30605 14.895 6.39954 15.2913 6.2796 15.6508C6.15966 16.0102 5.8469 16.2709 5.47177 16.3243C5.06894 16.3815 4.68196 16.5643 4.37119 16.8751C3.61075 17.6355 3.61075 18.8684 4.3712 19.6289C5.13164 20.3893 6.36456 20.3893 7.12501 19.6289C7.43577 19.3181 7.61854 18.9311 7.67581 18.5283C7.72914 18.1532 7.9899 17.8404 8.34931 17.7205C8.70872 17.6005 9.10505 17.694 9.37296 17.9619L11.7063 20.2953C11.7066 20.2955 11.7068 20.2958 11.7071 20.296C11.7071 20.2961 11.7071 20.2961 11.7072 20.2961C12.2975 20.8848 12.6529 20.9826 12.8499 20.9797C13.0539 20.9767 13.3986 20.8619 13.9575 20.2988L13.9601 20.2961L14.5069 19.7494C14.0975 19.5595 13.714 19.2959 13.3772 18.9591C11.8357 17.4176 11.8357 14.9183 13.3772 13.3768C14.9186 11.8353 17.4179 11.8353 18.9594 13.3768C19.2963 13.7137 19.5599 14.0972 19.7497 14.5065L20.2929 13.9633L20.2956 13.9607C20.8608 13.3998 20.9759 13.0544 20.9789 12.8499C20.9818 12.6524 20.8836 12.2961 20.2928 11.7036C20.2925 11.7034 20.2923 11.7031 20.2921 11.7029L17.9619 9.3728C17.694 9.10487 17.6005 8.70853 17.7205 8.34912C17.8404 7.9897 18.1532 7.72895 18.5284 7.67564C18.9312 7.61839 19.3183 7.43561 19.6291 7.12482C20.3895 6.36438 20.3895 5.13145 19.6291 4.37101C18.8686 3.61056 17.6357 3.61056 16.8752 4.37101C16.5644 4.6818 16.3817 5.06882 16.3244 5.4717C16.2711 5.84683 16.0104 6.15962 15.6509 6.27957C15.2915 6.39953 14.8952 6.30604 14.6273 6.03812L12.2971 3.70792C12.2969 3.70779 12.2968 3.70767 12.2967 3.70754C11.704 3.11638 11.3476 3.01815 11.1501 3.02107Z"
              fill="#c7c7c7"></path>
          </g>
        </svg>
        <h1>Puzzle</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/shooter')">
      <div class="navItemSrc"><svg fill="#c7c7c7" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
          stroke="#c7c7c7" stroke-width="0.128">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <title>crosshair</title>
            <path
              d="M30 14.75h-2.824c-0.608-5.219-4.707-9.318-9.874-9.921l-0.053-0.005v-2.824c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.824c-5.219 0.608-9.318 4.707-9.921 9.874l-0.005 0.053h-2.824c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h2.824c0.608 5.219 4.707 9.318 9.874 9.921l0.053 0.005v2.824c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-2.824c5.219-0.608 9.318-4.707 9.921-9.874l0.005-0.053h2.824c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM17.25 24.624v-2.624c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 2.624c-3.821-0.57-6.803-3.553-7.368-7.326l-0.006-0.048h2.624c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0h-2.624c0.57-3.821 3.553-6.804 7.326-7.368l0.048-0.006v2.624c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-2.624c3.821 0.57 6.803 3.553 7.368 7.326l0.006 0.048h-2.624c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h2.624c-0.571 3.821-3.553 6.803-7.326 7.368l-0.048 0.006z">
            </path>
          </g>
        </svg>
        <h1>Shooter</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/sports')">
      <div class="navItemSrc"><svg fill="#c7c7c7" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"
          stroke="#c7c7c7" stroke-width="0.00256">
          <g stroke-width="0"></g>
          <g stroke-linecap="round" stroke-linejoin="round"></g>
          <g>
            <path
              d="M229.92383,55.64258a36.13423,36.13423,0,0,0-29.56641-29.56641c-32.1123-5.4375-92.6626-7.8789-137.41113,36.87012-44.74854,44.74853-42.30811,105.2998-36.87012,137.41113a36.13481,36.13481,0,0,0,29.56641,29.56641,204.81979,204.81979,0,0,0,33.96094,2.897c31.88037,0,71.65576-7.97266,103.45019-39.76709C237.80225,148.30518,235.36182,87.75391,229.92383,55.64258ZM206.26074,59.6499a188.33271,188.33271,0,0,1,2.30506,19.94531L176.38721,47.4165a188.94148,188.94148,0,0,1,19.96338,2.32276A12.11223,12.11223,0,0,1,206.26074,59.6499ZM49.73926,196.35059a188.30726,188.30726,0,0,1-2.30506-19.9458L79.595,208.56543a188.29841,188.29841,0,0,1-19.94556-2.30469A12.11226,12.11226,0,0,1,49.73926,196.35059ZM176.083,176.0835c-10.91907,10.91943-31.41309,26.14209-63.8794,31.1499l-63.437-63.4375c5.00781-32.46582,20.231-52.96,31.15039-63.8794C90.83618,68.99707,111.33618,53.78076,143.802,48.773l63.4314,63.43115C202.22559,144.66992,187.00244,165.16406,176.083,176.0835Zm-7.59766-88.56885a12.00062,12.00062,0,0,1,0,16.9707l-12.20117,12.20117,6.14209,6.14209a11.99993,11.99993,0,0,1-16.9707,16.97022l-6.14185-6.1416-5.657,5.65673,6.14209,6.14209a11.99993,11.99993,0,0,1-16.97071,16.97022l-6.14184-6.14209-12.20093,12.20117a12.0001,12.0001,0,0,1-16.9707-16.9707l12.20117-12.20117-6.14209-6.14209a11.99993,11.99993,0,0,1,16.9707-16.97022l6.14185,6.1416,5.65686-5.65673-6.142-6.14209a11.99993,11.99993,0,0,1,16.9707-16.97022l6.14185,6.14209,12.20093-12.20117A12.00062,12.00062,0,0,1,168.48535,87.51465Z">
            </path>
          </g>
        </svg>
        <h1>Sports</h1>
      </div>
    </div>
    <div class="navigationItem" onclick="a('/stickman')">
      <div class="navItemSrc"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="904.000000pt"
          height="1280.000000pt" viewBox="0 0 904.000000 1280.000000" preserveAspectRatio="xMidYMid meet"
          transform="matrix(-1, 0, 0, 1, 0, 0)">
          <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#c7c7c7" stroke="none">
            <path
              d="M4530 12794 c-240 -23 -523 -106 -736 -215 -201 -103 -356 -221 -534 -406 -281 -291 -459 -643 -531 -1049 -19 -106 -23 -165 -23 -334 0 -222 11 -306 65 -518 179 -700 747 -1259 1458 -1436 184 -46 234 -51 496 -50 227 1 261 3 365 26 63 14 118 21 121 17 9 -14 143 -588 138 -593 -6 -6 -231 -20 -1369 -86 -1550 -90 -2377 -139 -2650 -155 -135 -8 -328 -19 -430 -25 -565 -33 -623 -38 -685 -61 -81 -30 -164 -113 -191 -189 -29 -84 -26 -190 7 -261 56 -120 155 -188 284 -197 63 -4 334 9 785 38 85 6 544 33 1020 60 476 28 1092 64 1370 80 278 16 818 48 1200 70 382 21 718 41 747 44 l52 4 45 -186 c274 -1128 310 -1681 150 -2342 -63 -262 -215 -724 -243 -739 -9 -5 -133 -53 -276 -106 -1680 -628 -2565 -1058 -3168 -1538 -130 -103 -337 -304 -442 -429 -308 -367 -519 -781 -685 -1343 -110 -376 -132 -471 -128 -555 7 -129 70 -225 185 -282 59 -29 77 -33 148 -33 71 0 88 4 147 33 122 60 124 63 258 497 143 462 170 536 270 740 271 552 660 912 1435 1328 447 239 1079 511 2145 921 274 106 274 106 340 99 137 -14 789 -272 1178 -467 392 -196 699 -421 821 -599 94 -138 125 -243 125 -422 0 -274 -103 -577 -383 -1125 -74 -146 -156 -305 -181 -354 -44 -86 -45 -92 -45 -180 0 -79 4 -98 28 -148 53 -108 160 -177 284 -186 89 -6 157 14 228 68 45 33 63 60 152 221 152 279 204 380 283 549 245 530 345 950 310 1305 -48 487 -303 850 -848 1209 -324 213 -780 437 -1277 626 -104 40 -193 74 -196 76 -3 2 16 67 43 146 135 393 220 773 254 1128 27 275 10 681 -42 1035 -34 236 -160 853 -204 1004 -5 19 -8 36 -6 39 2 2 87 -2 188 -9 253 -18 1104 -18 1263 -1 368 41 635 111 859 225 289 147 460 363 517 652 20 99 17 363 -5 490 -89 521 -347 1112 -916 2105 -314 548 -354 613 -407 666 -66 66 -136 94 -233 94 -133 0 -236 -63 -300 -182 -31 -57 -34 -71 -35 -148 l0 -85 141 -250 c813 -1437 1076 -2009 1101 -2397 16 -259 -102 -376 -453 -447 -227 -46 -398 -54 -979 -47 -491 5 -870 17 -880 27 -3 3 -169 685 -211 864 -3 16 12 32 73 75 107 76 334 306 413 417 193 274 314 561 366 868 22 128 29 398 15 525 -88 768 -565 1394 -1283 1679 -97 38 -273 85 -398 106 -92 16 -407 27 -500 19z m456 -705 c319 -69 602 -251 797 -514 72 -97 168 -290 201 -405 77 -271 74 -541 -10 -796 -60 -186 -175 -374 -313 -514 -250 -252 -545 -384 -891 -397 -219 -8 -378 19 -565 96 -411 169 -698 518 -797 969 -28 128 -31 375 -5 504 52 261 172 491 354 679 222 229 489 360 823 403 80 10 310 -4 406 -25z"
              fill="#c7c7c7" />
          </g>
        </svg>
        <h1>Stickman</h1>
      </div>
    </div>
  </div>
  <div id="app">
    <div class="gamepagecontainer">
<div id="frame" class="gamepage framediv">
  <iframe id="gameiframe" src="/loader.html?game=${game.url}&img=${game.image}&name=${game.title}"></iframe>
  <div class="gameinfo">
    <h1 class="small" id="gameTitleh1">${game.title}</h1>
    <svg onclick="fullscreen('gameiframe')" fill="#ffffff" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-38.5 -38.5 461.97 461.97" xml:space="preserve" stroke="#ffffff" stroke-width="16.553710000000002">

    <g stroke-width="0"/>

    <g stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.7699400000000001"/>

    <g> <g> <g id="Fullscreen"> <path d="M384.97,12.03c0-6.713-5.317-12.03-12.03-12.03H264.847c-6.833,0-11.922,5.39-11.934,12.223 c0,6.821,5.101,11.838,11.934,11.838h96.062l-0.193,96.519c0,6.833,5.197,12.03,12.03,12.03c6.833-0.012,12.03-5.197,12.03-12.03 l0.193-108.369c0-0.036-0.012-0.06-0.012-0.084C384.958,12.09,384.97,12.066,384.97,12.03z"/> <path d="M120.496,0H12.403c-0.036,0-0.06,0.012-0.096,0.012C12.283,0.012,12.247,0,12.223,0C5.51,0,0.192,5.317,0.192,12.03 L0,120.399c0,6.833,5.39,11.934,12.223,11.934c6.821,0,11.838-5.101,11.838-11.934l0.192-96.339h96.242 c6.833,0,12.03-5.197,12.03-12.03C132.514,5.197,127.317,0,120.496,0z"/> <path d="M120.123,360.909H24.061v-96.242c0-6.833-5.197-12.03-12.03-12.03S0,257.833,0,264.667v108.092 c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096c0,6.713,5.317,12.03,12.03,12.03h108.092 c6.833,0,11.922-5.39,11.934-12.223C132.057,365.926,126.956,360.909,120.123,360.909z"/> <path d="M372.747,252.913c-6.833,0-11.85,5.101-11.838,11.934v96.062h-96.242c-6.833,0-12.03,5.197-12.03,12.03 s5.197,12.03,12.03,12.03h108.092c0.036,0,0.06-0.012,0.084-0.012c0.036-0.012,0.06,0.012,0.096,0.012 c6.713,0,12.03-5.317,12.03-12.03V264.847C384.97,258.014,379.58,252.913,372.747,252.913z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g>

    </svg>
  </div>
</div>
    <div id="sideframe" class="gamepage sidediv"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7431909844582259"
       crossorigin="anonymous"></script>
    <!-- AshPixel vert -->
    <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-7431909844582259"
       data-ad-slot="4210425208"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
    <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
    </script></div>
  </div>
    <div style="max-width: 1455.55555556px;">
    <center>
      <h1 class="gameLabel small">Jump back in</h1>
      <div id="games" data-genre="recent"></div>
    </center>
    </div>
</div>
  <script src="/js/startup.js"></script>
  <script src="/js/gamePromise.js"></script>
</body>

</html>
  `;

  fs.writeFileSync(`/gamespp/${fileName}`, fileContent.trim());
} );

console.log('penile disorder');



