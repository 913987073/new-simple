module.exports = function(app){
//    首页
    app.get('/',function(req,res){
        res.render('index',{title:'我的网站首页'})
    })
//    注册页面
    app.get('/reg',function(req,res){
        res.render('reg',{title:'注册'})
    })
//    注册行为
    app.post('/reg',function(req,res){

    })
//    登陆
    app.get('/login',function(req,res){
        res.render('login',{title:'登陆'})
    })
//    登陆行为
    app.post('/login',function(req,res){

    })
//    发表
    app.get('/post',function(req,res){
        res.render('post',{title:'发表'})
    })
//    发表行为
    app.post('/post',function(req,res){

    })
//    退出
    app.get('/logout',function(req,res){

    })

}
