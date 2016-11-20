//登录按钮
$('#login').on('click', function() {
	//接口
	var url = 'http://112.74.58.212:8081/login';
	//手机号
	var acount = $('#acount').val();
	//密码
	var pwd = $('#pwd').val();
	//md5密码加密
	var pwd_md5 = hex_md5(pwd);
	var GetJsonData = {
		acount: acount,
		pwd: pwd_md5
	}
	if(acount ==""){
		alert("用户名不能为空");
		return false;
	}else if(pwd ==""){
		alert("密码不能为空");
	}
	$.ajax({
		data: GetJsonData,
		type: "post",
		url: url,
		dataType: "json",
		success: function(data) {
			console.log(JSON.stringify(data));
			if(data.status==100){
				console.log(data.msg);
				window.location.href = "temp/index.html";
			}else{
				alert(data.msg);
			}
		},
		error: function() {
			alert('服务器断开，请稍后再试！')
		}
	});
});