const express = require('express')
const cors = require('cors')
const multer = require('multer')

const app = express()

// middleware

// var corsOption ={
//     origin: "https://localhost:8081"
// }

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: true }))


//testing


//new
// const router = require('./routes/productRouter.js')
const router = require('./routes/profileRouter')
// app.use('/api/products', router)
app.use('/api/profile', router)



//new
const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({ headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
});


  const page = await browser.newPage();

  
  // Navigate to the LinkedIn feed.
   await page.goto('https://www.linkedin.com/feed/');
  const likeCount = 5; // Replace with your actual like count input
  const commentCount = 3;
  // Perform random liking/reacting on posts.
  console.log("****","****")
  const likeButtonSelector = document.querySelector('react-button__text'); // Replace with the actual selector for the like button.
  for (let i = 0; i < likeCount; i++) {
    const likeButtons = await page.$$(likeButtonSelector);
    console.log("****",likeButtons[i],"****")
    if (likeButtons[i]) {
      await likeButtons[i].click(); //click handlerr
      console.log("**done**"); 
    }
  }


  // Close the browser when done.
  await browser.close();
})();


/// end



app.get('/', async (req,res) => {
    res.json({message:'hello from api'})
})



//port

const PORT =  8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})