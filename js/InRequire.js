//配置文件
requirejs.config({
	//基础路径
	baseUrl:'js/', //表示js文件夹路径,也可以写具体路径,paths中的路径,是在此基础上添加的,即js/...
	//映射,.js省略,选择要加载的js文件
	paths:{
		'index':'apps/index',  //使用index就代表后面的文件
		'getname':'apps/getname',
		'jquery':'libs/jquery-3.4.1'
	}
})
//引入映射文件,function的形参是映射文件对象,对内部进行操作
requirejs(['index','getname','jquery'],function(index,getname,$){
	//其他文件中函数的调用
})
