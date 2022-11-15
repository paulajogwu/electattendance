const CourseModel = require('../model/courseModel')
const regModel = require('../model/courseRegistrationModel')
module.exports = {
  SaveCourse: function (req, res, next) {
    var name = req.body.name;
    var faculty = req.body.faculty;
    var department = req.body.department;
    var description = req.body.description;
console.log("able", name,department, faculty,description )
    if (name == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter Course Name',
        data: null,
      })

    } else if (department == '') {
        res.status(404).json({
          status: false,
          message: 'Please Select Department',
          data: null,
        })
      } 
     else if (faculty == '') {
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
      var savefaculty = new CourseModel({
        name,department, faculty,description
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

  SavecourseReg: function (req, res, next) {
    var courseName = req.body.courseName;
    var email = req.body.email;
   var firstName =  req.session.firstName;
   var lastName = req.session.lastName;


      var saveReg = new regModel({
        courseName, email,firstName,lastName
      })

      // saves to mongodb
      saveReg.save(function (err, data) {
        console.log(data)
        res.send({
          status: true,
          data: data,
          message: 'Created Successfully',
        })
       
      })

   
    
  },

  GetCourse: function (req, res, next) {
    CourseModel.find({}, function (err, data) {
      if (err) throw err
      console.log("data", data)
      res.send(data)
    })
  },
}
