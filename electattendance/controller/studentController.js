const StudentModel = require('../model/studentModel')
const courseRegModel = require('../model/courseRegistrationModel')

const attendModel = require('../model/attendanceModel')
var formidable = require("formidable");
var fs = require("fs");
var path = require('path');
const { randomInt } = require('crypto');
module.exports = {


  GetAttend: function (req, res, next) {
    attendModel.find({}, function (err, data) {
      if (err) throw err
      res.send(data)
    })
  },
  
  CreateAttend: async (req, res) => {
    
    const courseName = req.body.course;
    const fingerPrint = req.body.fingerPrint;
    const atDate = req.body.date;
    const firstName =  req.session.firstName;
    const lastName = req.session.lastName;
    const email = req.session.email;


    if (atDate == '') {
      res.send({
        status: false,
        message: 'Please Select a Date',
        data: null,
      })
    } else  if (courseName == '') {
      res.send({
        status: false,
        message: 'Please Select a Course',
        data: null,
      })
    }else {
      var saveAttendance = new attendModel({
        courseName,
        atDate,
        firstName,
        lastName,
        email
      })

      // saves to mongodb
      saveAttendance.save(function (err, data) {
        console.log(data)
        res.status(200).send({
          status: true,
          data: data,
          message: 'Attendance recorded Successfully',
        })
       
      })}
 
//       const checkfinger = await StudentModel.findOne({ fingerPrint: fingerPrint })
//         .then((user) => user)
//         .catch(() => null)
// if(checkfinger){
//   console.log('exist')
//   res.send({
//     status: true,
//     message: 'Successful',
//     //user: null,
//   })
// }else{
//   console.log('No exist')
//   res.send({
//     status: false,
//     message: 'Student Record does not Exist',
//     user: null,
//   })
// }

        // console.log('hhhhhhhhhhhhhhhh',user)
        // if (!user) {
          // res.send({
          //   status: false,
          //   message: 'Student Record does not Exist',
          //   user: null,
          // })
        // } else {
        //   const email = user.email;

        //   courseRegModel.findOne({email:email})
        //   .then((data)=>{

        //     if(!data){
        //       res.send({
        //         status: false,
        //         message: 'Student did not register for this Course',
        //         user: null,
        //       })
        //     }else{


              // res.send({
              //   status: true,
              //   message: 'Successful',
              //   //user: null,
              // })
        //     }

        //   })


  
  
         
        // }

    
    
  },


  SaveStudent: function (req, res, next) {
    var firstName = req.body.firstName
    var middleName = req.body.middleName
    var lastName = req.body.lastName
    var email = req.body.email
    var phone = req.body.Phone
    var dateofbirth = req.body.dateofBirth
    var department = req.body.department
    var matricNo = req.body.matric
    var faculty = req.body.faculty
    var gender = req.body.gender

    if (firstName == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter first Name',
        data: null,
      })
    } else if (middleName == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter middle Name',
        data: null,
      })
    } else if (lastName == '') {
      res.status(404).json({
        status: false,
        message: 'Please last Name',
        data: null,
      })
    } else if (email == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter email',
        data: null,
      })
    } else if (phone == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter phone',
        data: null,
      })
    } else if (dateofbirth == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter date of birth',
        data: null,
      })
    } else if (department == '') {
      res.status(404).json({
        status: false,
        message: 'Please Select Department',
        data: null,
      })
    } else if (matricNo == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter matric No',
        data: null,
      })
    } else if (faculty == '') {
      res.status(404).json({
        status: false,
        message: 'Please Select Faculty',
        data: null,
      })
    } else if (gender == '') {
      res.status(404).json({
        status: false,
        message: 'Please Select Gender',
        data: null,
      })
    } else {
    
      var saveStudent = new StudentModel({
        firstName,
        middleName,
        lastName,
        email,
        phone,
        dateofbirth,
        department,
        matricNo,
        faculty,
        gender
      })

      // saves to mongodb
      saveStudent.save(function (err, data) {
        console.log(data)
       var user_id = data._id;
       var firstName = data.firstName;
       var lastName = data.lastName;
       var email = data.email;

        req.session.user_id = user_id
        req.session.firstName = firstName
        req.session.lastName = lastName
        req.session.email = email
          
        res.send(data)
      })

      
      //redirect('/student_upload')
    }
  },

  GetStudent: function (req, res, next) {
    StudentModel.find({}, function (err, data) {
      if (err) throw err
      res.send(data)
    })
  },
  GetStudentById: function (req, res, next) {
    const  {email} = req.params
    StudentModel.find({email:email}, function (err, data) {
      //if (err) throw err
      if (data == 0) {
        res.send({
          status: false,
          message: 'E-mail does not Exist',
          data: null,
        });
      }else{
        res.status(200).json({
          status: false,
         // message: 'Successfull',
          data: data,
        });
      }
 
    })
  },

  SaveCapture: function (req, res, next) {



    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
      var dates = Date.now()
      var oldpath = files.webcam.filepath;
      var newpaths = "./public/uploads/" + dates + files.webcam.originalFilename;

      console.log("=======", dates, oldpath, newpaths)
      var newpath = "../uploads/" + dates + files.webcam.originalFilename;

      fs.rename(oldpath, newpaths, function (err) {
        //if (err) throw err;
      });
      var id =  req.session.user_id;
console.log('id123456789',id)
      const savefaculty = new StudentModel({
        _id:id,
        image: newpaths,
      });
      StudentModel.updateOne({_id:id }, savefaculty)
      .then(
       () => {
          console.log("000000")
          res.status(201).json({
            message: 'Photo upload successful!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );

      // saves to mongodb
      // savefaculty.save(function (err, data) {
      //   console.log(data)
      //   res.status(200).json({
      //     status: true,
      //     data: data,
      //     message: 'Added Successfully',
      //   })

      // })

    });


  },


  
  SaveFinger: function (req, res, next) {



    var fingerPrint = req.body.fingerPrint;
  
      var id =  req.session.user_id;

      console.log('123456789',id)

      const savefaculty = new StudentModel({
        _id:id,
        fingerPrint: fingerPrint,
      });
      StudentModel.updateOne({_id:id }, savefaculty)
      .then(
       () => {
          console.log("000000")
          res.status(201).json({
            message: 'Finger Print Upload  successful!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );

    


  },
}




// const multer = require('multer')

// const multerStorage = multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cd(null,'public/upload');
//   },
//   filename:(req,file,cb)=>{
//     const ext = file.mimetype.split('/')[1]
//     cd(null,`files/admin-${file.fieldname}-${Date.now()}.${ext}`)
//   }
// })

// const multerFilter = (req,file,cb)=>{
//   if(file.mimetype.split('/')[1]==='pdf'){
//     cb(null,true)
//   }else{
//     cb(new Error('Not a PDF File!'), false)
//   }
// }
// const upload = multer({
//   storage: multerStorage,
//   fileFilter:null
// })

// exports.saveUpload =  upload.single('uploaded_file'),async (req,res)=>{

// }