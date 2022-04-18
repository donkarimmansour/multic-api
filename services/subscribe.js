const SubscribesRquest = require("../models/subscribe")



// getAllSubscribes
const getAllSubscribes = (sort = '{"createdAt" : 1}', limit = 0 , skip = 0) => {
    return new Promise((resolve, reject) => {

        SubscribesRquest.find({}, (errFind, Subscribes) => {

            if (errFind) {console.log(errFind);
                reject(errFind)
                return
            }

            if (Subscribes.length <= 0) {
                reject("there are no Subscribes")
                return
            }

            resolve(Subscribes)


        })
            .sort(JSON.parse(sort))
            .limit(parseInt(limit))
            .skip(parseInt(skip))

    })
}



// get Subscribe Count
const getSubCount = (filter) => {

    return new Promise((resolve, reject) => {

        SubscribesRquest.find({}, (errFind, Subscribes) => {

            if (errFind) {
                reject(errFind)
                return
            }

            if (Subscribes.length <= 0) {
                reject("there are no Subscribe")
                return
            }

            resolve(Subscribes)
 

        }).count({ ...JSON.parse(filter) })

    })
}


// create Subscribe
const createSubscribe = (email) => {
    return new Promise((resolve, reject) => {
        //create
        SubscribesRquest.create({
            email
        }, (errCreate, doc) => {
            if (errCreate) {
                reject(errCreate)
                return
            }

             resolve(doc)
        })

    })
}

// delete Subscribe
const deleteSubscribe = (id) => {

    return new Promise((resolve, reject) => {

        // check id
        SubscribesRquest.findOne({}, (errFind, sbscrb) => {
            if (errFind)
                reject(errFind)

            if (!sbscrb) {
                reject("id not exist")

            } else {
                //delete
                SubscribesRquest.deleteOne({}
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
    getAllSubscribes, createSubscribe , getSubCount , deleteSubscribe
}
