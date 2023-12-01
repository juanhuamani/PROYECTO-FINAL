const path = require('path')
const {randomNumber} = require('../helpers/libs')
const fs = require('fs-extra')
const ctrl = {};

ctrl.index = (req , res)=>{
    res.send('Index img')
}

ctrl.create = async (req , res)=>{
    const imgUrl = randomNumber()
    const ext = path.extname(req.file.originalname).toLowerCase()
    const imageTempPath = req.file.path 
    const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`)

    if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
        await fs.rename(imageTempPath , targetPath);
    }

    res.send('works!')
}

ctrl.like = (req , res)=>{
    res.send('Index img')
}

ctrl.comment = (req , res)=>{
    res.send('Index img')
}

ctrl.remove = (req , res)=>{
    res.send('Index img')
}

module.exports = ctrl
