# Exploration: 
temporal data - what time tracks were listened to
link to buildings? --> concept
Webapp format?
Bezier curve

# List of data in the csv:
## NB: All the data is stored as strings

    Arbitrary, used by Spotify to have unique IDs {
        Spotify ID
        Artist IDs
    }

    The following don't necessarily use all english letters {
        Track Name
        Album Name
        Artist Name(s) --> maybe list seperated by commas and spaces
    }

    Release Date --> string "yyyy-mm-dd"
    Duration (ms)
    Popularity --> Number stored as string (0 - 100)
    Added By --> all me; disregard
    Added At --> will all the be the same since new playlist
    Genres --> list stored as string seperate by commas and space

    The following are all numbers stored as strings {
        Danceability
        Energy
        Key ==> (0 - 11)
            0 --> C
            1 --> C#
            2 --> D  
            3 --> D#
            4 --> E
            5 --> F
            6 --> F#
            7 --> G
            8 --> G#
            9 --> A
            10 --> A#
            11 --> B     
        Loudness
        Mode ==> Major (1) / Minor (2)
        Speechiness
        Acousticness
        Instrumentalness
        Liveness
        Valence
        Tempo
        Time Signature
    }

# Finding all unique elements
let xyz = new Set();

# Scrolling background
https://editor.p5js.org/chjno/sketches/ByZlypKWM

# Loading SVG
loadImage(svgfilename);

# Concept 
- Living city rather than buildings; feels like graph otherwise

# Sorting list of objects
override sort operator