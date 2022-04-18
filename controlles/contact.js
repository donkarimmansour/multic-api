const ContactsModel = require("../services/contact")
const codes = require("../common/codes")



// get All Contacts 
const getAllContacts = (req, res) => { 
    const { sort , limit , skip} = req.query ;

    ContactsModel.getAllContacts( sort , limit , skip).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// get contact Count
const getConCount = (req, res) => { 
    const { filter} = req.query ;

    ContactsModel.getConCount( filter).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// delete Contact
const deleteContact = (req, res) => {
    const {id} = req.params ;

    ContactsModel.deleteContact(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}



// create Contact
const createContact = (req, res) => {
    const {firstname , lastname , email , phone , comment} = req.body ;
    ContactsModel.createContact(firstname , lastname , email , phone , comment).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

module.exports = {
   getAllContacts , createContact , deleteContact , getConCount
}