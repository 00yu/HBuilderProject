/*
	JavaScript一种直译式脚本语言，是一种动态类型、弱类型(var声明变量或者省略var)、基于原型的语言，
	内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分(浏览器中即可执行),广泛用于客户端的脚本语言
	组成部分：
		ECMAScript:js基础语法(规定 关键字 运算符 语句 函数等等...)
		BOM:浏览器对象模型
		DOM:文档对象模型
	作用：
		修改html页面的内容
		修改html的样式
		完成表单的验证
	注意：
		js可以在页面上直接写，也可以单独出去
		js文件的后缀名 .js
	js和html整合
		方式1：在页面上直接写
			将js代码放在<script></script>标签中，一般放在head标签中
		方式2：独立的js文件
			通过script标签的src属性导入
	js中变量声明：
		var 变量名=初始化值;
		var 变量名;
			变量名=初始化值;
		注意:
			var可以省略 建议不要省略
			一行要以分号结尾，最后一个分号可以省略，建议不要省略
	js的数据类型:
		原始类型：(5种)
			Null
			String
			Number
			Boolean
			Undefined
			通过typeof运算符可以判断一个值或者变量是否属于原始类型，若属于原始类型，它还可以判断出属于哪种原始类型
				typeof 变量值;
		引用类型：
	js:事件驱动函数
		方式1：
			function 函数名(参数){
				函数体;
			}
		注意：函数不用声明返回值类型
			参数不需要加类型
			函数调用的时候
				函数名(参数)
		方式2：
			var 函数名=function(参数){
				函数体;
			}
	js中的事件:
		常见的事件：
			单击：onclick
			表单提交：onsubmit 加载在form表单上的 onsubmit="return 函数名()" 注意函数返回值为boolean类型
			页面加载：onload
	js事件和函数的绑定：
		方式1：
			通过标签的事件属性 <xxx onclick="函数名(参数)"></xxx>
		方式2：
			给元素派发事件
				document.getElementById("id值").onclick=function(){...}
				document.getElementById("id值").onclick=函数名
			注意：内存中应该存在该元素才可以派发事件
			a.将方式2放入html的最后面
			b.在页面加载成功之后再运行方式2的js代码 onload事件
	js获取元素：
		方式1：
			var obj=document.getElementById("id值");
	获取元素的value值
		obj.value;
	获取元素标签体的内容
		obj.innierHTML;
	
	运算符：
		比较运算符： > >= <= <
		若两边都是数字 和java一样
		若一边为数字，另一边为字符串形式的数字，将字符串形式的数字转换成数字再进行比较 3>"2"
		若一边为数字，另一边为字符串，返回false 3和"hello"不能比较
		两边都是字符串的时候，比较ascii值
	等性运算符： == ===
		==：只判断值是否相等 66=="66"返回true
		===：不仅判断值是否相等，还要判断类型是否相同 66==="66"返回false
		
 */