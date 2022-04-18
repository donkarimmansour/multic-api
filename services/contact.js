const ContactsRquest = require("../models/contact")



// getAllContacts
const getAllContacts = (sort = '{"createdAt" : 1}', limit = 0 , skip = 0) => {
    return new Promise((resolve, reject) => {

        ContactsRquest.find({}, (errFind, Contacts) => {

            if (errFind) {console.log(errFind);
                reject(errFind)
                return
            }

            if (Contacts.length <= 0) {
                reject("there are no Contacts")
                return
            }

            resolve(Contacts)


        })
            .sort(JSON.parse(sort))
            .limit(parseInt(limit))
            .skip(parseInt(skip))

    })
}



// get Contacts Count
const getConCount = (filter) => {

    return new Promise((resolve, reject) => {

        ContactsRquest.find({}, (errFind, Contacts) => {

            if (errFind) {
                reject(errFind)
                return
            }

            if (Contacts.length <= 0) {
                reject("there are no Contacts")
                return
            }

            resolve(Contacts)
 

        }).count({ ...JSON.parse(filter) })

    })
}



// create Contact
const createContact = (firstname , lastname , email , phone , comment) => {
    return new Promise((resolve, reject) => {
        //create
        ContactsRquest.create({
            firstname , lastname , email , phone , comment
        }, (errCreate, doc) => {
            if (errCreate) {
                reject(errCreate)
                return
            }

             resolve(doc)
        }) 

    })
}



// delete Contact
const deleteContact = (id) => {

    return new Promise((resolve, reject) => {

        // check id
        ContactsRquest.findOne({}, (errFind, cntct) => {
            if (errFind)
                reject(errFind)

            if (!cntct) {
                reject("id not exist")

            } else {
                //delete
                ContactsRquest.deleteOne({}
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
    getAllContacts, createContact , deleteContact , getConCount
}
