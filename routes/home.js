const express = require('express')
const router = express.Router();

// home page routes - render login page first
// router.get('/', (req, res) => {
//     res.sendFile('login.html', { root: 'views' });
// })
router.get('/home', (req, res) => {
    res.sendFile('home.html', { root: 'views' });
})

router.get('/main', (req, res) => {
    res.sendFile('main.html', { root: 'views' })
});

// router.get('/signUp', (req, res) => {
//     res.sendFile('signUp.html', { root: 'views' });
// })

router.get('/report', (req, res) => {
    res.sendFile('report.html', { root: 'views' })
});
// router.get('/mainPage',(req,res)=>{
//     res.sendFile('mainPage.html', { root: 'views' })
// })

module.exports = router