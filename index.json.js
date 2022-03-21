export async function get() {
    const albums = [
        // {
        //     id: 1,
        //     cover: "../static/cover/pike3.png",
        //     album: "Pike 3",
        //     name: "3 Foot Clearance",
        //     title: [
        //         "Griffin's Spike",
        //         "Rammellzee: Hero of the Abyss",
        //         "Floating Graveyard",
        //         "Ballad of Jerry Mono",
        //         "H.D. Autopsy",
        //         "Droid Hunt",
        //         "Battlefields",
        //         "Handprint Ornament",
        //         "Three Headed Guardian",
        //         "Harpoon the Goon",
        //         "Critical Leg Assignment",
        //         "Siamese Butterfly",
        //         "X-Ray"
        //     ],
        //     rating: [
        //         8,
        //         5,
        //         6.5,
        //         6,
        //         5,
        //         3,
        //         7.5,
        //         6,
        //         6.5,
        //         6,
        //         2,
        //         1,
        //         0.5
        //     ],
        //     link: "https://www.youtube.com/watch?v=qtXIQsKcrKk&t=67s"
        // },
        // {
        //     id: 2,
        //     cover: "../static/cover/pike37.png",
        //     album: "Pike 37",
        //     name: "Hollowed Out",
        //     title: [
        //         "Low Rolling Hills",
        //         "Lobster Hands",
        //         "One Foot in Front of the Other",
        //         "Sideways Jaw Trap",
        //         "Mosquito on Stilts",
        //         "Trading Post",
        //         "Cyborg Parking",
        //         "Hollowed Out"
        //     ],
        //     rating: [
        //         7,
        //         6.5,
        //         7,
        //         6.5,
        //         6,
        //         8,
        //         7.5,
        //         7
        //     ],
        //     link: "https://www.youtube.com/watch?v=y9DWogmKezE"
        // },
        {
            id: 3,
            cover: "../static/cover/pike51.png",
            album: "Pike 51",
            name: "Claymation Courtyard",
            title: [
                "Claymation Courtyard",
                "Disintegration Mirrors",
                "Chainsaw Slide",
                "Eerie Canal"
            ],
            rating: [
                8,
                10,
                7,
                10
            ],
            link: "https://www.youtube.com/watch?v=ftPuNjFNMoA",
            average: ""
        },
        {
            id: 4,
            cover: "../static/cover/pike65.png",
            album: "Pike 65",
            name: "Hold Me Forever",
            title: [
                "N","Y","C","4","ev","er"
            ],
            rating: [
                9,8,9.5,8,7,9
            ],
            link: "https://www.youtube.com/watch?v=957gqOFbpq0",
            average: ""
        },
        {
            id: 5,
            cover: "../static/cover/pike66.png",
            album: "Pike 66",
            name: "Leave the Light On",
            title: [
                "Leave the Light On",
                "Hospitality",
                "The Bellman",
                "This Room Sleeps One and a Half"
            ],
            rating: [
                9,
                7.5,
                7.5,
                4
            ],
            link: "https://www.youtube.com/watch?v=azROBthMXjE",
            average: ""
        },
        // {
        //     id: 6,
        //     cover: "",
        //     album: "Pike 71",
        //     name: "Celery",
        //     title: [
        //         "Celery"
        //     ],
        //     rating: [
        //         7.5
        //     ],
        //     link: "https://www.youtube.com/watch?v=C2ApUj96wOg"
        // },
        // {
        //     id: 7,
        //     cover: "../static/cover/pike90.png",
        //     album: "Pike 90",
        //     name: "Listen for the Whisper",
        //     title: [
        //         "Listen for the Whisper",
        //         "Crane"
        //     ],
        //     rating: [
        //         7.5,
        //         8.5
        //     ],
        //     link: "https://www.youtube.com/watch?v=J7diyGyjT74"
        // },
        {
            id: 8,
            cover: "../static/cover/pike95.png",
            album: "Pike 95",
            name: "Northern Lights",
            title: [
                "Northern Lights",
                "Flare"
            ],
            rating: [
                7.5,
                7
            ],
            link: "https://www.youtube.com/watch?v=n3fYRuoIul0",
            average: ""
        },
        {
            id: 9,
            cover: "../static/cover/pike105.png",
            album: "Pike 105",
            name: "The Moltrail",
            title: [
                "The Moltrail Part 1",
                "The Moltrail Part 2",
                "Woven Wire"
            ],
            rating: [
                2,
                9,
                3
            ],
            link: "https://www.youtube.com/watch?v=z19wn7sqkEA",
            average: ""
        },
        // {
        //     id: 10,
        //     cover: "../static/cover/pike121.png",
        //     album: "Pike 121",
        //     name: "Shaded Ray",
        //     title: [
        //         "Shaded Ray",
        //         "4 Lands",
        //         "Junkyard Ridge"
        //     ],
        //     rating: [
        //         7.5,
        //         6,
        //         6
        //     ],
        //     link: "https://www.youtube.com/watch?v=8Rt-oddBlDA"
        // },
        {
            id: 11,
            cover: "../static/cover/pike157.png",
            album: "Pike 157",
            name: "Upside Down Skyway",
            title: [
                "Caterpillar Invasion",
                "Skull Rock Cove",
                "Suspension Bridge",
                "Upside Down Skyway",
                "Kendo Training Port",
                "Braking Zones",
                "Insects"
            ],
            rating: [
                7.5,
                6,
                8.5,
                9,
                7,
                6,
                10
            ],
            link: "",
            average: ""
        },
        {
            id: 12,
            cover: "../static/cover/pike166.png",
            album: "Pike 166",
            name: "Region",
            title: [
                "Region",
                "Castle Stairs",
                "River of Liquid Fire",
                "Clock Striking",
                "Ancient Desert"
            ],
            rating: [
                7.5,
                9,
                8.5,
                8.5,
                10
            ],
            link: "https://www.youtube.com/watch?v=dh7HLr5M9k4",
            average: ""
        },
        // {
        //     id: 13,
        //     cover: "../static/cover/pike226.png",
        //     album: "Pike 226",
        //     name: "Happy Birthday MJ 23",
        //     title: [
        //         "Happy Birthday MJ 23",
        //         "Groovie Goolies",
        //         "Yellow Brick Snail",
        //         "Rib Cage Wreath"
        //     ],
        //     rating: [
        //         8.5,
        //         5.5,
        //         7,
        //         6
        //     ],
        //     link: "https://www.youtube.com/watch?v=6EWfa6nxZQU"
        // },
        {
            id: 14,
            cover: "../static/cover/pike240.png",
            album: "Pike 240",
            name: "Chart",
            title: [
                "Chart",
                "Granite Track",
                "Glowing Gate"
            ],
            rating: [
                7,
                7,
                9
            ],
            link: "https://www.youtube.com/watch?v=AmfjFZPpbmI",
            average: ""
        },
        // {
        //     id: 15,
        //     cover: "../static/cover/pike246.png",
        //     album: "Pike 246",
        //     name: "Nettle",
        //     title: [
        //         "Nettle",
        //         "Praying",
        //         "Storms",
        //         "Barren part 1",
        //         "Barren part 2",
        //         "Open Ancient",
        //         "Leaving Shells"
        //     ],
        //     rating: [
        //         "",
        //         "",
        //         7.5,
        //         "",
        //         "",
        //         "",
        //         ""
        //     ],
        //     link: "https://www.youtube.com/watch?v=x60CQv06Xx8"
        // },
        // {
        //     id: 16,
        //     cover: "",
        //     album: "Pike 266",
        //     name: "Far",
        //     title: [
        //         "Far 1",
        //         "Far 2",
        //         "Far 3",
        //         "Far 4",
        //         "Far 5"
        //     ],
        //     rating: [
        //         "",
        //         "",
        //         "",
        //         "",
        //         ""
        //     ],
        //     link: "",
        // },
        {
            id: 17,
            cover: "../static/cover/pike268.png",
            album: "Pike 268",
            name: "Sonar Rainbow",
            title: [
                "Sonar Rainbow",
                "The Maddening of Mercury",
                "Debris",
                "Venomous Fog"
            ],
            rating: [
                10,
                4,
                4.5,
                7
            ],
            link: "https://www.youtube.com/watch?v=pukRYvqqiNw",
            average: ""
        },
        {
            id: 18,
            cover: "../static/cover/pike271.png",
            album: "Pike 271",
            name: "The Squaring of the Circle",
            title: [
                "The Squaring of the Circle",
                "Osirion",
                "Scalp Assail",
                "Fork",
                "Mosaic Silk",
                "Decake"
            ],
            rating: [
                9,
                8,
                5,
                6,
                7,
                6
            ],
            link: "https://www.youtube.com/watch?v=CRh4E2c2UUY",
            average: ""
        },
        {
            id: 19,
            cover: "../static/cover/pike278.png",
            album: "Pike 278",
            name: "Unexpected Journeys",
            title: [
                "Familiar Spirit",
                "Where the Sun Sails and the Moon Walks",
                "BooBoo Got His Black Belt",
                "The Caterpillar's Trail",
                "G.H.S. Live"
            ],
            rating: [
                10,
                7.5,
                8,
                7.5,
                6
            ],
            link: "https://www.youtube.com/watch?v=zZ8fwVVDmZE",
            average: ""
        },
        {
            id: 20,
            cover: "../static/cover/pike291.png",
            album: "Pike 291",
            name: "Fogray",
            title: [
                "Piston",
                "Fogray"
            ],
            rating: [
                9.5,
                4
            ],
            link: "https://www.youtube.com/watch?v=C79-Nj1ttw0",
            average: ""
        }
    ]
    return {
        status: 200,
        body: { albums }
    }
}