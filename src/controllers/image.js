const path = require('path')
const fs = require('fs-extra')

const {randomNumber} = require('../helpers/libs')
const {Image} = require('../models/index')

const ctrl = {};

ctrl.index =async (req , res)=>{
    const image = await Image.findOne({filename : {$regex : req.params.image_id}})
    res.render('image', {image})
}

ctrl.create = async (req , res)=>{
    const  saveImage = async () =>{
        const imgUrl = randomNumber();
        const images = await Image.find({filename : imgUrl});
        if(images.length > 0){
            saveImage();
        }else{
            const ext = path.extname(req.file.originalname).toLowerCase();
            const imageTempPath = req.file.path ;
            const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);
    
            if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
                await fs.rename(imageTempPath , targetPath);
                const newImg = new Image({
                    title :  req.body.title ,
                    filename : imgUrl + ext ,
                    description : req.body.description ,
    
                })
                const imageSaved = await newImg.save();
                res.redirect('/images/' + imgUrl)
            }
            else{
                await fs.unlink(imageTempPath );
                res.status(500).json({error : 'Only images '})
            }
            
        }
    }
    saveImage();

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
