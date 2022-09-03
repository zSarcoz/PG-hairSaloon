const  axios  = require("axios");
const { Genre} = require("../db.js");
const { APIKEY } = process.env;

const getGenres = async() => {
    try {
        const url_genre = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
        const allGenre = url_genre.data.results.map((genre) =>genre.name)

        allGenre.forEach((element) => {
            Genre.findOrCreate({where:{name:element}})
        })
        
        return allGenre;
        
    }catch(err){
        console.log(err)
    }
}

const getGenresDb = async() => {
    try {
        const allGenre = await Genre.findAll();
        return allGenre;
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getGenres,
    getGenresDb
}
