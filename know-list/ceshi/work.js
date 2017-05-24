(function(){
			var creditesshop = document.createElement("div");
			creditesshop.id="creditesshop";
			creditesshop.style.cssText ="width:0px;height:183px;padding:7px 0px 7px 11px;box-sizing:border-box;position:absolute;left: 0px;overflow:hidden;z-index:300;";
			creditesshop.style.transition = "width 1s";
			
			var creditesshop_html ="<div id='creditesshop-title' style='width: 340px;height: 38px;line-height:38px;background: #0099e5;color:#fff;font-weight: bold;padding: 0 12px;font-size: 16px;box-sizing:border-box;'>"+
				                        "信用中国 ● 电商分站<span id='creditesshop-hide' style='float:right;font-weight: normal;font-size: 14px;cursor: pointer;'><收起</span>"+
			                        "</div>"+
									"<div class='creditesshop-body' style='width: 340px;box-sizing:border-box;padding-top:20px;'>"+
										'<img src="img/3.png" style="display: inline-block;margin:0 18px;"/>'+
										'<div style="display: inline-block;vertical-align: top;">'+
									        '<p style="font-weight: bold;margin-top:3px;margin-bottom:15px;">宅鲜配贸易（上海）有限公司</p>'+
									    	'<p style="font-size:14px;color:#666;margin-top:15px;margin-bottom:12px">已加入"信用中国实名核验"</p>'+
									    '</div>'+
									    '<div style="text-align: right;padding-right:10px;">'+
									    	'<a href="#" style="font-size:14px;text-decoration:none;color:#4181e2;">详情>></a>'+
									    '</div>'+
									"</div>";
			creditesshop.innerHTML = creditesshop_html;
			
			var creditesshopimg = document.createElement("img");
			creditesshopimg.id ="creditesshopimg";
			creditesshopimg.src="img/1.png"
			creditesshopimg.style.cssText="display: block;width: 98px;height: 98px;position:absolute;left: 6px;top:0px;z-index:200;top:42px;cursor: pointer;"
			
			var creditesbody = document.createElement("div");
			creditesbody.style.cssText="display: block;position:fixed;left: 0px;bottom:30%;z-index:999999;width:357px;height:183px;"
			
			creditesbody.append(creditesshop);
			creditesbody.append(creditesshopimg);
			
			document.getElementsByTagName("body")[0].append(creditesbody);

			var creditesshopid = document.getElementById("creditesshop");
			var creditesshopimgid = document.getElementById("creditesshopimg");
			var creditesshoptitleid = document.getElementById("creditesshop-title");
		
		    creditesshopid.onclick = function(event){
		    	if(event.target.getAttribute("id") == 'creditesshop-hide'){
		    		creditesshopid.style.width = "0px";
		    		setTimeout(function(){
		    		 creditesshop.style.background = "none";
		    		},1000);
		    	}
		    	event.stopPropagation(); 
		    }
		    creditesshopimgid .onclick = function(event){
		    	creditesshopid.style.display = "block";
		    	creditesshop.style.background = "url(img/5.png)";
		    	creditesshopid.style.width = "357px";
		    }
		    /*creditesshopshowid.onclick = function(){
		    	alert("1");
		    }*/

		  
		   
		   
		   
		   

		})();
		