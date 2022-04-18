const fs = require("fs")
const fileRquest = require("../models/file")


//get Single Image
const getSingleImage = (id) => {

    return new Promise((resolve, reject) => { 

            fileRquest.findById( id , (errFind, img) => {

                if (errFind) {
                    reject(errFind)
                    return
                }
    
                if (!img) {
                    reject("id not exist")
                    return
                }
    
                resolve(img)

            })
                
    })
}


//create Single Image
const createSingleImage = (imageUrl) => {

    return new Promise((resolve, reject) => { 

            fileRquest.create({
               imageUrl
            }, (errCreate, doc) => {
                if (errCreate) {

                    if (fs.existsSync("./public/images/" + imageUrl)) {
                            fs.unlink("./public/images/" + imageUrl, () => { })
                    }

                    reject(errCreate)
                    return
                }

                resolve(doc["_id"])
            })
                
    })
}



module.exports = {
    createSingleImage  , getSingleImage
}
