const {Comment , Image} = require('../models') ;
const images = require('./images');

async function  imagesCounter(){
    return await Image.countDocuments();
}

async function commentsCounter(){
    return await Comment.countDocuments();
}

async function imagesTotalViewsCounter() {
    try {
        const result = await Image.aggregate([
            {
                $group: {
                    _id: '1',
                    viewsTotal: { $sum: '$views' }
                }
            }
        ]);

        if (result  && result[0].viewsTotal !== undefined) {
            return result[0].viewsTotal;
        } else {
            return 0;
        }
    } catch (error) {
        return 0; 
    }
} 

async function likeTotalCounter() {
    try {
        const result = await Image.aggregate([{
            $group: {
                _id: '1',
                likesTotal: { $sum: '$likes' }
            }
        }]);

        if (result  && result[0].likesTotal !== undefined) {
            return result[0].likesTotal;
        } else {
            return 0;
        }
    } catch (error) {
        return 0;
    }
}

module.exports = async () =>{
    const result = await Promise.all([
        imagesCounter() ,
        commentsCounter() ,
        imagesTotalViewsCounter() ,
        likeTotalCounter()
    ])

    return {
        images : result[0] ,
        comments : result[1] ,
        views : result[2] ,
        likes : result[3]
    }
}