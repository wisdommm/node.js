var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content': 'qi dai xia yi jie ke'
	'cid':348
})

var option = {
	hostname: 'www.imooc.com'
	port: 80,
	path: '/course/document',
	method: 'POST',
	header:{
		'Accept':'application/json, text/javascript, */*; q=0.01'
		'Accept-Encoding':'gzip, deflate'
		'Accept-Language':'zh-CN,zh;q=0.8'
		'Cache-Control':'no-cache'
		'Connection':'keep-alive'
		'Content-Length':postData.length 
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
		'Cookie':'imooc_uuid=71c91415-e3c0-4723-b4e9-a52658f8798a; loginstate=1; apsid=hjMDFlOWU2NGQzMTBkODdjNzkyYzhhMzdmMmE3MzcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDU4ODEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4MTU2MDY5ODlAcXEuY29tAAAAAAAAAAAAAAAAAAAAADAwMTQwYzBmNjY3NDk5NTVmMzM2ZmViYjY2YWQ0ZDA4nZNEVJ2TRFQ%3DMD; PHPSESSID=d1el68suofrhfeqlp7ea9i85q5; jwplayer.volume=-1; cvde=55bf2ab9c8213-49; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1437465608,1437553971,1437631199,1438327406; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1438745538'
		'Host':'www.imooc.com'
		'Origin':'http://www.imooc.com'
		'Pragma':'no-cache'
		'Referer':'http://www.imooc.com/video/6697'
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36'
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(option,function(res){
	console.log('Status', + res.statusCode)
	console.log('header', + JSON.stringify(res.header))

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})
	res.on('end',function(){
		console.log('评论完毕！')
	})
	res.on('reeor',function(e){
		console.log('error' + e.message)
	})

})
req.write(postData)
req.end





