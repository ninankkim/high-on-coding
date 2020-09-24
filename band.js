const band = {
    name: 'Men at Work',
    album: [
        {
            name: 'Business As Usual',
            genre: '',
            credits: [
                {
                    role: 'producer',
                    name: 'Jack Black',
                }
            ],
            releaseDate: '1981',
            recordsSold: 100000,
            tracks: [
                {
                    name: 'Down Under',
                    length: 222,
                }
            ],
        }
    ]
}

console.log(band.albums[0].recordsSold)