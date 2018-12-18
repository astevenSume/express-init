function Hi(){
	var self=this;

	self.name='susan';

	self.sayHi=function(req, res, next){
		res.render('hi', {title: 'hi ' + req.params.username, layout:'layout'});
	}

	self.dosay=function(req, res, next){
		console.log('hi  请先吃饭!!!');
		next();
	}
}

// exports.hi=function(req, res, next){
// 		res.render('hi', {title: 'hi world .....'});
// }

module.exports=new Hi();
