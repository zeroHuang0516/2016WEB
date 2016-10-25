
var left=0;
var leftList=document.createElement("input");
	leftList.type="button";
	leftList.value=left+" items left";
	leftList.style="margin-top:0px;font-size:15px;color:#555;width:525px;height:60px;background:transparent;border:0;text-align:right;display:inline;vertical-align:middle;align:center;outline:medium";
function isEnterPressed(ele) {
    if(event.keyCode == 13 && ele.value!="") {
        createOneList(ele);
        left++;
        leftList.value=left+" items left";
        ele.value="";  
    }
}


function createOneList(ele){
	var newDiv=document.createElement("div");
		newDiv.align="center";
		newDiv.style="margin-top:10px;margin-right: auto; margin-left: auto;width:516px;height:60px;background:#f4f9fc;border:1px solid #BBBBBB;border-radius:0px;background-image: -webkit-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -moz-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -ms-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -o-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: linear-gradient(to bottom, #f4f9fc, #e6e6e6);text-align:center;outline:medium";
	var newbtnList=document.createElement("input");
		newbtnList.id="btnList";
		newbtnList.type="button";
		newbtnList.value=ele.value;
		newbtnList.style="font-size:25px;color:#555;width:400px;height:60px;background:transparent;border:0;text-align:center;display:inline;vertical-align:middle;outline:medium";
	var checkBtn=document.createElement("input");
		checkBtn.id="cktBtn";
        checkBtn.type="button";
        checkBtn.style="font-size:25px;color:black;width:40px;height:40px;border-radius:40px;background:#f4f9fc;border:3px dashed #BBBBBB;background-image: -webkit-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -moz-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -ms-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -o-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: linear-gradient(to bottom, #f4f9fc, #e6e6e6);text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
        checkBtn.display="inline";
        checkBtn.onclick= function(){clickEvent(this,newbtnList,closeBtn)};
    var closeBtn=document.createElement("input");
        closeBtn.id="clsBtn";
        closeBtn.type="button";
        closeBtn.value="x";
        closeBtn.style="font-size:25px;color:transparent;width:40px;height:40px;background:transparent;border:0;text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
        closeBtn.display="inline";
        

    newDiv.appendChild(checkBtn);
    newDiv.appendChild(newbtnList);
    newDiv.appendChild(closeBtn);
    newDiv.onmouseover=function(){mouseOver(closeBtn,newbtnList,checkBtn,this)};
    newDiv.onmouseout=function(){mouseOut(closeBtn,newbtnList,checkBtn,this)};
    closeBtn.onclick=function(){closeEvent(newDiv,checkBtn)};

    var ultarget=document.getElementById('todoList');
    ultarget.appendChild(newDiv);
    ultarget.appendChild(leftList);
}



function mouseOver(ele,ele2,ele3,ele4){
	if(ele3.value==""){
		ele.style="font-size:25px;color:#c62d1f;width:40px;font-weight:500;height:40px;background:transparent;border:0;text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		ele2.style="font-size:25px;color:black;width:400px;height:60px;background:transparent;border:0;text-align:center;display:inline;vertical-align:middle;outline:medium";
		ele3.style="font-size:25px;color:black;width:40px;height:40px;border-radius:40px;background:#f4f9fc;border:3px dashed #BBBBBB;background-image: -webkit-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -moz-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -ms-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -o-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: linear-gradient(to bottom, #f4f9fc, #e6e6e6);text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		ele4.style="margin-top:10px;margin-right: auto; margin-left: auto;width:516px;height:60px;background:white;border:1px solid #BBBBBB;border-radius:0px;text-align:center;outline:medium";
	}
	else if(ele3.value==">"){
		ele.style="font-size:25px;color:#c62d1f;width:40px;font-weight:500;height:40px;background:transparent;border:0;text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		ele2.style="font-size:25px;color:#ccc;width:400px;height:60px;background:transparent;border:0;text-align:center;display:inline;vertical-align:middle;text-decoration: line-through;outline:medium";
		ele3.style="font-size:25px;color:#0066FF;width:30px;height:30px;border-radius:30px;font-weight:500;background:transparent;border:0;text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		ele4.style="margin-top:10px;margin-right: auto; margin-left: auto;width:516px;height:60px;background:white;border:1px solid #BBBBBB;border-radius:0px;text-align:center;outline:medium";
	}
}
function mouseOut(ele,ele2,ele3,ele4){
	
	if(ele3.value==">"){
		ele.style="font-size:25px;color:transparent;width:40px;height:40px;background:transparent;border:0;text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		ele2.style="font-size:25px;color:#ccc;width:400px;height:60px;background:transparent;border:0;text-align:center;display:inline;vertical-align:middle;text-decoration: line-through;outline:medium";
		ele3.style="font-size:25px;color:#0066FF;width:30px;height:30px;border-radius:30px;font-weight:500;background:transparent;border:0;text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		ele4.style="margin-top:10px;margin-right: auto; margin-left: auto;width:516px;height:60px;background:white;border:1px solid #BBBBBB;border-radius:0px;text-align:center;outline:medium";
	}
	else if(ele3.value==""){
		ele.style="font-size:25px;color:transparent;width:40px;height:40px;background:transparent;border:0;text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		ele2.style="font-size:25px;color:#555;width:400px;height:60px;background:transparent;border:0;text-align:center;display:inline;vertical-align:middle;outline:medium";	
		ele3.style="font-size:25px;color:black;width:40px;height:40px;border-radius:40px;background:#f4f9fc;border:3px dashed #BBBBBB;background-image: -webkit-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -moz-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -ms-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -o-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: linear-gradient(to bottom, #f4f9fc, #e6e6e6);text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		ele4.style="margin-top:10px;margin-right: auto; margin-left: auto;width:516px;height:60px;background:#f4f9fc;border:1px solid #BBBBBB;border-radius:0px;background-image: -webkit-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -moz-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -ms-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -o-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: linear-gradient(to bottom, #f4f9fc, #e6e6e6);text-align:center;outline:medium";
	}
}

function clickEvent(ele,ele2,ele3){
	if(ele.value==""){
		ele.value=">";
		ele.style="font-size:25px;color:#0066FF;width:30px;height:30px;border-radius:30px;font-weight:500;background:transparent;border:0;text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		ele2.style="font-size:25px;color:#ccc;width:400px;height:60px;background:transparent;border:0;text-align:center;display:inline;vertical-align:middle;text-decoration: line-through;outline:medium";
		ele3.style="font-size:25px;color:#c62d1f;width:40px;font-weight:500;height:40px;background:transparent;border:0;text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		left--;
		leftList.value=left+" items left";
	}
	else if(ele.value==">"){
		ele.value="";
		ele.style="font-size:25px;color:black;width:40px;height:40px;border-radius:40px;background:#f4f9fc;border:3px dashed #BBBBBB;background-image: -webkit-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -moz-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -ms-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: -o-linear-gradient(top, #f4f9fc, #e6e6e6);background-image: linear-gradient(to bottom, #f4f9fc, #e6e6e6);text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		ele2.style="font-size:25px;color:#555;width:400px;height:60px;background:transparent;border:0;text-align:center;display:inline;vertical-align:middle;outline:medium";
		ele3.style="font-size:25px;color:#c62d1f;width:40px;font-weight:500;height:40px;background:transparent;border:0;text-decoration: none;vertical-align:middle;text-align:center;outline:medium";
		left++;
		leftList.value=left+" items left";
	}
}

function closeEvent(ele,ele2){
	ele.remove();
	if(ele2.value==""){
		left--;
		leftList.value=left+" items left"; // 複數處理!!!!
	}
	else if(ele.value==">"){
		left++;
		leftList.value=left+" items left"; //將Count作成API
	}
}













