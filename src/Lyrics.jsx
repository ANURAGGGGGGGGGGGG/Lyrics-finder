import axios from 'axios'
import React from 'react'

const Lyrics = () => {
    const [lyrics, setLyrics] = React.useState("")
    const [artist, setArtist] = React.useState("")
    const [song, setSong] = React.useState("")

    const handleClick = () => {

        axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
            .then((res) => {
                console.log(res.data.lyrics)
                setLyrics(res.data.lyrics)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className='container'>

                <h1>Lyrics Finder ♬</h1>
                <div className='songs-container'>
                    <input type="text" placeholder='Artist Name' onChange={(e) => setArtist(e.target.value)} />
                    <input type="text" placeholder='Song Name' onChange={(e) => setSong(e.target.value)} />
                    <button onClick={handleClick}>Search 🔎</button>
                </div>
                <div>
                    <pre>{lyrics}</pre>
                </div>
            </div>
        </>
    )
}

export default Lyrics
