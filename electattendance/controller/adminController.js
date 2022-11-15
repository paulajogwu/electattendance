const adminModel = require('../model/adminModel')

module.exports = {
  SaveAdmin: function (req, res, next) {
      
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var password = req.body.password;
  
console.log("able", fname,lname, email,password)
    if (fname == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter First Name',
        data: null,
      })

    } else if (lname == '') {
      res.status(404).json({
        status: false,
        message: 'Please Enter Last Name',
        data: null,
      })
    }
    else if (email == '') {
        res.status(404).json({
          status: false,
          message: 'Please Enter Email',
          data: null,
        })
      }
      else if (password == '') {
        res.status(404).json({
          status: false,
          message: 'Please Enter password',
          data: null,
        })
      } else {
      var saveAdmin = new adminModel({
        fname,lname, email,password
      })

      // saves to mongodb
      saveAdmin.save(function (err, data) {
        console.log(data)
        res.status(200).json({
          status: true,
          data: data,
          message: 'Registered Successfully',
        })
       
      })

   
    }
  },

  GetAdmin: function (req, res, next) {
    adminModel.find({}, function (err, data) {
      if (err) throw err
      res.send(data )
    })
  },



  AdminLogin: function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

   
    if (email == 0) {
      return   res.status(404).json({
        status: false,
        message: 'Please Enter email',
        data: null,
      });
    } else if (password == 0 ) {
      return   res.status(404).json({
        status: false,
        message: 'Please Enter password',
        data: null,
      });
    } else {

      console.log('hhr 123456',email)
      adminModel.findOne({email:email})
      .then((data) => {
        console.log('hhr',data)
        if (data == 0) {
          res.status(404).json({
            status: false,
            message: 'User does not Exist',
            data: null,
          });
        } 
        
      
         else {
          res.send({
            status: true,
            message: 'Login Successful',
            user: data,
          })
        }

      })
      .catch(() => null)


    }
  },
}


  // let user_id = data[0]._id;
          // let fname = data[0].firstName;
          // let lname = data[0].lastName;

          // req.session.user_id = user_id
          // req.session.fname = fname
          // req.session.lname = lname