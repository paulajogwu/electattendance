const deptModel = require('../model/departmentModel')

module.exports = {
  SaveDept: function (req, res, next) {
    var name = req.body.name;
    var faculty = req.body.faculty;
    var description = req.body.description;
console.log("able", name, faculty,description )
    if (name == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter Department Name',
        data: null,
      })

    } else if (faculty == '') {
      res.status(404).json({
        status: false,
        message: 'Please Select Faculty',
        data: null,
      })
    } 
    else if (description == '') {
        res.status(404).json({
          status: false,
          message: 'Please Enter Description',
          data: null,
        })
      }else {
      var savefaculty = new deptModel({
        name, faculty,description
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

  GetDept: function (req, res, next) {
    deptModel.find({}, function (err, data) {
      if (err) throw err
      res.send(data)
    })
  },
}
