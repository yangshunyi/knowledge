require.config({
	paths:{
		"jquery":"../../js/jquery/jquery.1.8.3"
	},
	shim:{                                    //shim 简意为"垫"，申请依赖模块
		"jquery.vticker":{
			deps:["jquery"]
		}
	}
	
})


require(["jquery","jquery.vticker"],function(){
	$(function(){
		$('.dowebok').vTicker({
			pause: 1000,
			mousePause: true,
	   });
	})
});