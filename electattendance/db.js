require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Attend', {
    //useNewUrlParser: true, mongodb+srv://Paulson:Paul1ajogwu@cluster0.5eidjpa.mongodb.net/Attend
   //useFindAndModify: false 
   useNewUrlParser: true,
    useUnifiedTopology: true
}, err => { 
    if (!err) { 
        console.log('DB connection successful')
    } else {
        console.log('Error connecting to DB' + err)
    }
});






// const {
//     hostname,
//     host,
//     protocol
//   } = window.location;
//   const dynHost = (hostname === 'localhost') || (hostname === '127.0.0.1') ? 'localhost:3000' : host;
//   const loginForm =  document.getElementById("form")
  
  
//   loginForm.addEventListener('submit',() => {
//   event.preventDefault()
//   const formData = new FormData(loginForm);
//   console.log(formData)
//   const data = new URLSearchParams();
//   for (const pair of formData) {
//   data.append(pair[0], pair[1]);
//   }
//   console.log(data)
//   axios({
//   url: `${protocol}//${dynHost}/api/user/login`, 
//   method: 'post',
//   data, 
//   })
//   .then((res) => {
//   console.log(res);
//   Swal.fire(res.data.message);
//   localStorage.setItem("userId", res.data.user._id);
//   localStorage.setItem("jwt", res.data.token);
//   location.href='../dashboard/dashboard.html';
  
//   })
//   .catch((err) => {
//   Swal.fire('an error occured pls try again later ');
//   console.log();
//   })
//   });
  