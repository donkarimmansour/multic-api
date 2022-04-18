const CvsRquest = require("../models/cv")



// getAllCvs
const getAllCvs = (sort = '{"updatedAt" : 1}' , limit = 0 , skip = 0 , filter = '{"firstname" : { "$ne": "xxxlxxx" }}' ,  select = null,  expend = null) => {
    return new Promise((resolve, reject) => {

        CvsRquest.find({}, (errFind, Cvs) => {

            if (errFind) {console.log(errFind);
                reject(errFind)
                return
            }

            if (Cvs.length <= 0) {
                reject("there are no Cvs")
                return
            }

            resolve(Cvs)


        })
        .populate(expend)
        .select(select)
        .sort(JSON.parse(sort))
        .limit(parseInt(limit))
        .skip(parseInt(skip))
        .setQuery({ ...JSON.parse(filter) })

    })
}



// get Cvs Count
const getConCount = (filter) => {

    return new Promise((resolve, reject) => {

        CvsRquest.find({}, (errFind, Cvs) => {

            if (errFind) {
                reject(errFind)
                return
            }

            if (Cvs.length <= 0) {
                reject("there are no Cvs")
                return
            }

            resolve(Cvs)
 

        }).count({ ...JSON.parse(filter) })

    })
}



// create Cv
const createCv = (type , presentation , certificate , certificateName , userId , cvId , birthday , gender) => {
    return new Promise((resolve, reject) => {
        //create
        CvsRquest.create({
            type , presentation , certificate , certificateName , userId , cvId , birthday , gender
        }, (errCreate, doc) => {
            if (errCreate) {
                reject(errCreate)
                return
            }

             resolve(doc)
        }) 

    })
}


// edit Cv
const editCv = (id, type , presentation , certificate , certificateName , cvId , birthday , gender) => {

    return new Promise((resolve, reject) => {

        // check id
        CvsRquest.findOne({}, (errFind, cv) => {
            if (errFind)
                reject(errFind)

            if (!cv) {
                reject("id not exist")

            } else {
                //delete
                CvsRquest.updateOne({} , {
                    type , presentation , certificate , certificateName ,
                     cvId , birthday , gender , updatedAt: Date.now()
                }
                    , (errUpdate, doc) => {
                        if (errUpdate) {
                            reject(errUpdate)
                            return
                        }

                        if (doc.modifiedCount > 0) {
                            resolve("modified")

                        } else {
                            reject("something went wrong")
                        }

                    }).where("_id").equals(id)
            }//else
        }).where("_id").equals(id)

    })
}




// delete Cv
const deleteCv = (id) => {

    return new Promise((resolve, reject) => {

        // check id
        CvsRquest.findOne({}, (errFind, cv) => {
            if (errFind)
                reject(errFind)

            if (!cv) {
                reject("id not exist")

            } else {
                //delete
                CvsRquest.deleteOne({}
                    , (errUpdate, doc) => {
                        if (errUpdate) {
                            reject(errUpdate)
                            return
                        }

                        if (doc.deletedCount > 0) {
                            resolve("deleted")

                        } else {
                            reject("something went wrong")
                        }

                    }).where("_id").equals(id)
            }//else
        }).where("_id").equals(id)

    })
}




module.exports = {
    getAllCvs, createCv , deleteCv , getConCount , editCv
}
