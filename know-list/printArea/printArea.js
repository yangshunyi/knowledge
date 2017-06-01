require.config({
	paths:{
		"jquery":"../../js/jquery/jquery.1.8.3"
	},
	shim:{                                    //shim 简意为"垫"，申请依赖模块
		"jquery.PrintArea":{
			deps:["jquery"]
		}
	}
	
})


require(["jquery","jquery.PrintArea"],function(){
	$(function(){
		$("#print-bnt").on("click",function(){
			$("#print").printArea();
		})
		
		
		
		
	})

});