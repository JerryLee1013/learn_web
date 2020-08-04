		/*
			参数：
				obj：要执行动画的对象；
				attr：要执行动画的样式；比如：left top width height
				target：要执行动画的边界目标；
				speed：动画的移动速度；
				callback：动画执行结束时，调用回调函数；
		 */
		function move(obj,attr,target,speed,callback){
			clearInterval(obj.timer);
			var currentValue = parseInt(getStyle(obj,attr));
			if(currentValue>=target){
				speed = -speed;
			}
			// 向执行动画的对象中添加一个timer属性，用来保存自己的定时器标识；
			obj.timer = setInterval(function(){
				var oldValue = parseInt(getStyle(obj,attr));
				var newValue = oldValue+speed;
				if((speed>0 && newValue>target) || (speed<0 && newValue<target)){
					newValue=target;
					clearInterval(obj.timer);
					// 如果传入的参数有回调函数就执行，没有就不执行
					callback && callback();
				}
				obj.style[attr] = newValue+"px";
				
			},30);
		}
	
		function getStyle(obj, name) {
		    // 兼容代码方法1
		    if (window.getComputedStyle) {
		        return getComputedStyle(obj, null)[name];
		    } else {
		        return obj.currentStyle[name];
		    }
		}