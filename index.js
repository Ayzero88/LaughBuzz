import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
const port = 3001;
const API_URL = " https://v2.jokeapi.dev/joke";

app.get('/', async(req, res)=>{
    try {
        const result = await axios.get(`${API_URL}/Any`);
        res.render('index.ejs', {joke: result.data});
     
    } catch (error) {
  
        res.render('index.ejs', {error: error.message});
    }
    
});

app.post('/category', async(req, res) => {

    const category = req.body.category;
    try {
        const result = await axios.get(`${API_URL}/${category}`);
            res.render('index.ejs', {joke: result.data});      
    } catch (error) {
   
        
        res.render('index.ejs', {error: error.message});
    }
});



app.listen(port, ()=>{
    console.log("listening on port " + port);
});