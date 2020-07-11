const User = require('../models/user'); 
const Task = require('../models/task')
// render signup 
module.exports.signup = function(req,res){
    if(req.isAuthenticated()){
      return  res.redirect('/users/profile');
    }
    return res.render('user_sign_up',{
        title:"sign up"
    })
}

// render signin 
module.exports.signin = function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        title:"sign in"
    })
}

// get the signup data 
module.exports.create =  function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
  
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
  
        if(!user){
            console.log(req.body)
            User.create(req.body,function(err,user){
              if(err){
                  console.log('error in creating user in signing up',err);
                  return;
              }
              return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })
  
  }
  
  // sign in and create a session for the user
  module.exports.createSession = function(req,res){
      return res.render('main');
  }

  // get the signup data 
module.exports.createtask =  function(req,res){
            Task.create({
                num:req.body.num,
                image:req.body.image,
                description:req.body.description

            },
                function(err,task1){
              if(err){
                  console.log('error in creating task',err);
                  return;
              }
               console.log('*********',task1);
              return res.redirect('back');
            })
    }

module.exports.fetch = function(req,res){
    console.log(req.body);
    Task.find({num: req.body.id} , (err,tasks) => {
        if(err){
            console.log("Error in fetching task");
            return ;
        }
        return res.render('eval',{
            task:tasks
        })
    })
}