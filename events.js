var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

//addEventListener

life.on('方法',function(who){
	console.log('给'+who+'倒水')
})
life.on('方法',function(who){
	console.log('给'+who+'11')
})
life.on('方法',function(who){
	console.log('给'+who+'22')
})
life.on('方法',function(who){
	console.log('给'+who+'33')
})
life.on('方法',function(who){
	console.log('给'+who+'44')
})
life.on('方法',function(who){
	console.log('给'+who+'55')
})
life.on('方法',function(who){
	console.log('给'+who+'66')
})
life.on('方法',function(who){
	console.log('给'+who+'77')
})
life.on('方法',function(who){
	console.log('给'+who+'88')
})
life.on('方法',function(who){
	console.log('给'+who+'99')
})
life.on('方法',function(who){
	console.log('给'+who+'00')
})
life.on('方法1',function(who){
	console.log('给'+who+'99')
})
life.on('方法1',function(who){
	console.log('给'+who+'00')
})

life.emit('方法' , 'pengy')
life.emit('方法1' , 'pengyyy')