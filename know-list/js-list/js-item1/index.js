require(["../../../js/jquery/jquery.1.8.3"],function(){
	
     var base64Img =(function(){
     	
   
        var getBase64Imgae = function(img){
        	var canvas = document.createElement("canvas");
        	canvas.width = img.width;
        	canvas.height = img.height;
        	
        	var ctx = canvas.getContext("2d");
        	ctx.drawImage(img,0,0,img.width,img.height);
        	var dataurl = canvas.toDataURL('image/png');
        	return dataurl;
        };
        var imgbase64 = function(url,fun){
        	var image= new Image();
        	image.crossOrigin = "Anonymous"; //本地的跨域允许
        	image.onload = function(){
        		var imgbase64Url = getBase64Imgae(image);
        	}
        };
        var convertBase64UrlToBlob = function(urlData) {
		        var bytes = window.atob(urlData.split(',')[1]);
		        //去掉url的头，并转换为byte

				//处理异常,将ascii码小于0的转换为大于0
				var ab = new ArrayBuffer(bytes.length);
				var ia = new Uint8Array(ab);
				for (var i = 0; i < bytes.length; i++) {
					ia[i] = bytes.charCodeAt(i);
				}		
				return new Blob([ab], {
					type : 'image/png'
				});
	    };
       	
       	var  
     	
   
     })();
  
  


    
    
    



	
	
	
})