const facultyModel = require('../model/facultyModel')

module.exports = {
  SaveFaculty: function (req, res, next) {
    var name = req.body.name;
    var description = req.body.description;
console.log("able", name, description)
    if (name == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter Faculty Name',
        data: null,
      })

    } else if (description == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter Description',
        data: null,
      })
    } else {
      var savefaculty = new facultyModel({
        name,
        description
      })

      // saves to mongodb
      savefaculty.save(function (err, data) {
        console.log(data)
        res.status(200).json({
          status: true,
          data: data,
          message: 'Added Successfully',
        })
       
      })

   
    }
  },

  GetFaculty: function (req, res, next) {
    facultyModel.find({}, function (err, data) {
      if (err) throw err
      res.send(data)
    })
  },
}
