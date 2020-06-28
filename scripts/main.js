let myImage = document.querySelectorAll('img');
// 这两个声明也可在for循环内声明
var faceIndex = 1
var newSrc = ''

for(let i=0;i<myImage.length;i++){
	myImage[i].setAttribute('index',i)  // 给每张图片添加一个编号，方便后面切换回原来图片时使用
	// 给每张图片加点击事件
	myImage[i].onclick = function(e) {
		var emojiIndex = e.target.getAttribute('index');		// 获取图片编号
	    let mySrc = e.target.getAttribute('src');		//获取图片地址
	    /*console.log(mySrc)
	    console.log(newSrc)*/

	    // 因为你有20张图需要展示，但是只有11张图源，所以需要进行判断，防止11张后面重复的图片切换有问题，还有我把你HTML文件里图片弄成了有规律的（情况所需）
	    if(emojiIndex < 11) {
	    	emojiIndex++
	    }else {
	    	emojiIndex = emojiIndex - 10		// 减10的原因是，之前设定的编号是从零开始
	    }
	    // 判断该图片是否已经被更换
	    if(mySrc != newSrc && mySrc.indexOf('emoji') != -1) {		// 判断的条件是：1、点击获取到的图片是否与原来的图不同；2、查询点击的图片是否是表情类图片（这一个条件你可以先隐藏掉然后连续点几张然后再点回来你就知道为什么加了）
	      e.target.setAttribute('src', 'images/face'+faceIndex+'.png');
	      newSrc = e.target.getAttribute('src');
	      // 这个判断中的作用是，点击第一次后，切换的图片会变成face1，点击第三次后，切换的图片会变成face2
	      if(faceIndex < 20) {
		    	faceIndex++
		    }else {
		    	faceIndex = 1
		    }
		    // console.log(faceIndex)
	    } else {		// 当图片之前被点击过执行else里面的命令（切换回原来的图片）
	      e.target.setAttribute('src', 'images/emoji'+emojiIndex+'.gif');
	    }
	}
}

// 我目前能想到的办法是这样的，至于更好的效果，你可以自己再研究一下，哪看不明白的，可以再问
