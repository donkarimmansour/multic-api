const fileModel = require("../services/file")
const fs = require("fs")
const sharp = require("sharp")
const codes = require("../common/codes")

//create Single Image
const createSingleImage = (req, res) => {

    const { filename } = req.file

        fileModel.createSingleImage(filename)
          .then(result => {

            res.status(codes.ok).json({ err: false , msg : result })

          }).catch(erri => res.status(codes.badRequest).json({ err: true, msg: erri }))

}



//get Single Image View
const getSingleImageView = (req, res) => {
  const { id } = req.params

  fileModel.getSingleImage(id).then(result => {
    fs.readFile(`public/images/${result.imageUrl}`, function (err, data) {
      if (err) res.status(codes.badRequest).json({ err: true, msg: err })
      else {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(data);
      }
    });

  }).catch(err => res.status(codes.badRequest).json({ err: true, msg: err }))


}



//get Single Image Download
const getSingleImageDownload = (req, res) => {
  const { id } = req.params

  fileModel.getSingleImage(id).then(result => {
    res.download(`public/images/${result.imageUrl}`, err => {
      if (err) {
        res.status(codes.badRequest).json({ err: true, msg: "There was an error fetching your file" })
      }
    })

  }).catch(err => res.status(codes.badRequest).json({ err: true, msg: err }))


}



module.exports = { 
    createSingleImage ,
    getSingleImageDownload ,
    getSingleImageView ,
}
