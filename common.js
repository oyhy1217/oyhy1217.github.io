//显示标准格式时间
function getDateTime(time) {
    //获取年
    var year = time.getFullYear();
    //获取月
    var month = time.getMonth() + 1;
    //获取日
    var day = time.getDate();
    //获取时
    var hour = time.getHours();
    //获取分
    var minute = time.getMinutes();
    //获取秒
    var second = time.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    return year + "年" + month + "月" + day + "日 " + hour + ":" + minute + ":" + second;
}



//根据id属性值获取对象
function my$(id) {
    return document.getElementById(id);//返回值为所获取的对象
}



//设置任意元素的文本内容
function setInnerText(element,txt) {
    if(typeof(element.textContent)=="undefined"){
        //IE8
        element.innerText=txt;
    }else{
        //谷歌或者火狐
        element.textContent=txt;
    }
}



//获取任意元素的文本内容
function getInnerText(element) {
    if(typeof(element.textContent)=="undefined"){
        //IE8
        return element.innerText;
    }else{
        //谷歌或者火狐
        return element.textContent;
    }
}



//获取任意一个元素的第一个子元素
function getFirstElement(element) {
    //判断浏览器是否支持firstElementChild属性
    if(element.firstElementChild){
        //支持---->谷歌、火狐
        return element.firstElementChild;
    }else{
        //不支持---->IE8
        //第一步，获取当前元素的第一个子节点
        var node=element.firstChild;
        //第二步，判断当前元素的第一个子节点是不是标签（元素）
        while(node.nodeType!=1){
            node=node.nextSibling;//第一个子节点不是标签（元素），转到下一个子节点，进行判断是不是标签（元素），直到找到第一个子元素
        }
        return node;//第一个子节点是标签（元素），直接返回该节点，该节点就是我们要寻找的第一个子元素
    }
}



//获取任意一个元素的最后一个子元素
function getLastElement(element) {
    //判断浏览器是否支持lastElementChild属性
    if(element.lastElementChild){
        //支持---->谷歌、火狐
        return element.lastElementChild;
    }else{
        //不支持---->IE8
        //第一步，获取当前元素的最后一个子节点
        var node=element.lastChild;
        //第二步，判断当前元素的最后一个子节点是不是标签（元素）
        while(node.nodeType!=1){
            node=node.previousSibling;//最后一个子节点不是标签（元素），转到上一个子节点，进行判断是不是标签（元素），直到找到最后一个子元素
        }
        return node;//最后一个子节点是标签（元素），直接返回该节点，该节点就是我们要寻找的最后一个子元素
    }
}



//获取当前元素的前一个兄弟元素
function getPreviousElement(element) {
    //判断浏览器是否支持previousElementSibling属性
    if(element.previousElementSibling){
        //支持---->谷歌、火狐
        return element.previousElementSibling;
    }else{
        //不支持---->IE8
        //第一步，获取当前元素的前一个兄弟节点
        var node=element.previousSibling;
        //第二步，判断当前元素的前一个兄弟节点是不是标签（元素）
        while(node.nodeType!=1){
            node=node.previousSibling;//前一个兄弟节点不是标签（元素），转到上一个子节点，进行判断是不是标签（元素），直到找到前一个兄弟元素
        }
        return node;//前一个兄弟节点是标签（元素），直接返回该节点，该节点就是我们要寻找的前一个兄弟元素
    }
}



//获取当前元素的后一个兄弟元素
function getNextElement(element) {
    //判断浏览器是否支持previousElementSibling属性
    if(element.nextElementSibling){
        //支持---->谷歌、火狐
        return element.nextElementSibling;
    }else{
        //不支持---->IE8
        //第一步，获取当前元素的后一个兄弟节点
        var node=element.nextSibling;
        //第二步，判断当前元素的后一个兄弟节点是不是标签（元素）
        while(node.nodeType!=1){
            node=node.nextSibling;//后一个兄弟节点不是标签（元素），转到下一个子节点，进行判断是不是标签（元素），直到找到后一个兄弟元素
        }
        return node;//后一个兄弟节点是标签（元素），直接返回该节点，该节点就是我们要寻找的后一个兄弟元素
    }
}



//获取当前元素的所有兄弟元素
function getSiblings(element) {
    //判断当前元素的合法性
    if(!element)return;
    //定义一个空数组用来存储当前元素的所有兄弟元素
    var elements=[];
    //第一步，获取当前元素前面的所有兄弟元素
    var node=element.previousSibling;//第1步，获取当前元素的前一个兄弟节点
    while(node){
        if(node.nodeType===1){//第2步，判断当前元素的前一个兄弟节点是不是标签（元素）
            elements.push(node);//前一个兄弟节点是标签（元素），将此节点添加到数组中
        }
        node=node.previousSibling;//前一个兄弟节点不是标签（元素），转到上一个子节点，进行判断是不是标签（元素）
    }
    //第二步，获取当前元素后面的所有兄弟元素
    node=element.nextSibling;//第1步，获取当前元素的后一个兄弟节点
    while(node){
        if(node.nodeType===1){//第2步，判断当前元素的后一个兄弟节点是不是标签（元素）
            elements.push(node);//后一个兄弟节点是标签（元素），将此节点添加到数组中
        }
        node=node.nextSibling;//后一个兄弟节点不是标签（元素），转到下一个子节点，进行判断是不是标签（元素）
    }
    return elements;//返回值
}



//将元素匀速移动到目标位置
function animate(element,target) {
    //每次调用这个函数的时候先清除之前的计时器
    clearInterval(element.setId);
    //设置计时器
    element.setId = setInterval(function () {
        //获取元素的当前位置
        var current = element.offsetLeft;
        //每次移动的像素
        var step = 9;
        //判断移动的步数应该是正数还是负数
        step = current < target ? step : -step;
        //当前的位置=之前的当前位置+每次移动的像素
        current = current + step;
        if (Math.abs(target - current) < Math.abs(step)) {
            //清除计时器
            clearInterval(element.setId);
            element.style.left = target + "px";
        } else {
            element.style.left = current + "px";
        }
    }, 20);
}