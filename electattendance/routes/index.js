const router = require("express").Router();
const faculty = require('../controller/facultyController')
const department = require('../controller/departmentController')
const course = require('../controller/courseController')
const student = require('../controller/studentController')

const admin = require('../controller/adminController')

router.get('/', function(req, res) {
    res.render('login', {layout:null})
    //res.render( 'admin/dashboard',{layout:'index'})
})
router.get('/user/:email', student.GetStudentById);
router.post('/attend', student.CreateAttend);
router.post('/save_coursereg', course.SavecourseReg)
router.get('/get_attend', student.GetAttend)
router.get('/dashboard', function(req, res) {
    res.render( 'admin/dashboard',{layout:'index'})
})

router.get('/attend_list', function(req, res) {
    res.render( 'admin/attendlist',{layout:'index'})
})
router.get('/student', function(req, res) {
    res.render('admin/createstudent',{layout:'index'})
})



router.get('/student_upload', function(req, res) {
    res.render('admin/studentupload',{layout:'index'})
})

router.get('/fingerPrint_upload', function(req, res) {
    res.render('admin/studentFinger',{layout:'index'})
})
router.get('/registerCourse', function(req, res) {
    res.render('admin/courseregistration',{layout:'index'})
})
router.get('/manage_student', function(req, res) {
    res.render('admin/managestudent',{layout:'index'})
})

router.get('/manageadmin', function(req, res) {
    res.render('admin/manageadmin',{layout:'index'})
})

router.post('/save_student', student.SaveStudent)
router.get('/get_student', student.GetStudent)

router.post('/upload', student.SaveCapture)
router.post('/finger', student.SaveFinger)

router.get('/department', function(req, res) {
    res.render( 'admin/createdepartment',{layout:'index'})
})

router.post('/save_department', department.SaveDept)
router.get('/get_department', department.GetDept)

router.get('/faculty', function(req, res) {
    res.render( 'admin/createfaculty',{layout:'index'})
})
router.post('/save_faculty', faculty.SaveFaculty)
router.get('/get_faculty', faculty.GetFaculty)
router.get('/managefaculty', function(req, res) {
    res.render( 'admin/managefaculty',{layout:'index'})
})

router.get('/managecourse', function(req, res) {
    res.render( 'admin/managecourse',{layout:'index'})
})

router.get('/managedepartment', function(req, res) {
    res.render( 'admin/managedepartment',{layout:'index'})
})
router.get('/course', function(req, res) {
    res.render( 'admin/createcourse',{layout:'index'})
})
router.post('/save_course', course.SaveCourse)
router.get('/get_course', course.GetCourse)

router.get('/courseregister', function(req, res) {
    res.render( 'admin/courseregistration',{layout:'index'})
})


router.get('/createadmin', function(req, res) {
    res.render( 'admin/createadmin',{layout:'index'})
})
router.post('/save_admin', admin.SaveAdmin)
router.post('/login_admin', admin.AdminLogin)
router.get('/get_admin', admin.GetAdmin)



module.exports = router;