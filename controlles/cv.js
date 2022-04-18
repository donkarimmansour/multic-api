const CvServices = require("../services/cv")
const codes = require("../common/codes")



// get All Cvs 
const getAllCvs = (req, res) => { 
    const { sort , limit , skip , filter , select , expend}  = req.query ;

    CvServices.getAllCvs( sort , limit , skip , filter , select , expend).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}


// get Cv Count
const getConCount = (req, res) => { 
    const { filter} = req.query ;

    CvServices.getConCount( filter).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// delete Cv
const deleteCv = (req, res) => {
    const {id} = req.params ;

    CvServices.deleteCv(id).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// edit Cv
const editCv = (req, res) => {
    const {id} = req.params ;
    const {type , presentation , certificate , certificateName  , cvId , birthday , gender} = req.body ;

    CvServices.editCv(id , type , presentation , certificate , certificateName  , cvId , birthday , gender).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

// create Cv
const createCv = (req, res) => {
    const {type , presentation , certificate , certificateName , userId , cvId , birthday , gender} = req.body ;
    
    CvServices.createCv(type , presentation , certificate , certificateName , userId , cvId , birthday , gender).then(result => {
        res.status(codes.ok).json({err: false, msg : result})
    }).catch(result => {
        res.status(codes.badRequest).json({err: true, msg : result})
    })
}

module.exports = {
   getAllCvs , createCv , deleteCv , getConCount , editCv
}