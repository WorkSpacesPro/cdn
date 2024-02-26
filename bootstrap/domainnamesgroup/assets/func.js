//选择框的颜色
var g_sel_color0 = "#ffffff"; //未选时
var g_sel_color1 = "#ff9fc5"; //选中时

var g_OurSiteKey_jsMD5 = "loveinhere-md5-js-comm-key";


//获取所有id或name为IDorName的元素，代替document.getElementsByName，和document.all
function getElementsByIDorName(IDorName)
{
	var e = document.all ? document.all : document.getElementsByTagName("*");
	var a = new Array();
	var id, name;
	IDorName = IDorName.toLowerCase();

	for (var i = 0; i < e.length; i++)
	{
		id = e[i].getAttribute("id");
		name = e[i].getAttribute("name");

		if (typeof (id) == "string") {  id = id.toLowerCase(); } 
		if (typeof (name) == "string") {name = name.toLowerCase(); }

		if (id == IDorName || name == IDorName)
		{
			a.push(e[i]);
		}
	}
	return a;
}

function trim(s)
{
	if (s == null) {return "";}
	var t=s;
	var i,j,c,cIntValue;
	for(i=0;i<t.length;i++)
	{
		c=t.charAt(i);
		if(c==" ")
		{
			if(i==t.length-1){t="";}
		}
		else
		{
			t=t.substr(i);
			break;
		}
	}
	for(i=t.length-1;i>=0;i--)
	{
		c=t.charAt(i);
		if(c==" ")
		{
			if(i==0){t="";}
		}
		else
		{
			t=t.substring(0,i+1);
			break;
		}
	}
	//alert("t="+t.replace(/ /ig,"*"));
	return t;
}
function isNum(s)
{
	var i,r=true,t=s,c;
	t=trim(t)
	if(t.length==0){return false;}
	for(i=0;i<t.length;i++)
	{
		c=t.charAt(i);    //c=t.charCodeAt(i); 
		//alert("c="+isNaN(c));
		if(!isNaN(c))
		{}
		else
		{
			r=false;
			break;
		}
	}
	//alert("r="+r);
	return r;
}
function isNum2(s)
{
	var r = false;
	s = trim(s);
	if (s == null || s == "")
	{
		return r;
	}
	
	if(!isNaN(s))
	{
		r = true;
	}
	return r;
}
function lenex(s)
{
	var i,r=0,t=s,c;
	//t=trim(t);
	for(i=0;i<t.length;i++)
	{
//		c=t.charAt(i);
//		if(isAscii_2(c))
//		{
//		r=r+1;
//		}
//		else
//		{
//		r=r+2;
//		}

		c=t.charCodeAt(i)
		if(isAscii(c))
		{
			r+=1;
		}
		else
		{
			r+=2;
		}
	}
	//alert("r="+r);
	return r;
}

function isAscii(c)
{
	if(c<=128)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function isAscii_2(c)
{
var r=false,a,i;
a=new Array(128);
a[0]=" ";
a[1]=" ";
a[2]=" ";
a[3]=" ";
a[4]=" ";
a[5]=" ";
a[6]=" ";
a[7]=" ";
a[8]=" ";
a[9]="\t";
a[10]="\n";
a[11]=" ";
a[12]=" ";
a[13]="\r";
a[14]=" ";
a[15]=" ";
a[16]=" ";
a[17]=" "; 
a[18]=" ";
a[19]=" ";
a[20]=" ";
a[21]=" ";
a[22]=" ";
a[23]=" ";
a[24]=" ";
a[25]=" ";
a[26]=" ";
a[27]=" ";
a[28]=" ";
a[29]=" ";
a[30]=" ";
a[31]=" ";
a[32]=" ";
a[33]="!";
a[34]="\"";
a[35]="#";
a[36]="$";
a[37]="%";
a[38]="&";
a[39]="\'";
a[40]="(";
a[41]=")";
a[42]="*";
a[43]="+";
a[44]=",";
a[45]="-";
a[46]=".";
a[47]="/";
a[48]="0";
a[49]="1";
a[50]="2";
a[51]="3";
a[52]="4";
a[53]="5";
a[54]="6";
a[55]="7";
a[56]="8";
a[57]="9";
a[58]=":";
a[59]=";";
a[60]="<";
a[61]="=";
a[62]=">";
a[63]="?";
a[64]="@";
a[65]="A";
a[66]="B";
a[67]="C";
a[68]="D";
a[69]="E";
a[70]="F";
a[71]="G";
a[72]="H";
a[73]="I";
a[74]="J";
a[75]="K";
a[76]="L";
a[77]="M";
a[78]="N";
a[79]="O";
a[80]="P";
a[81]="Q";
a[82]="R";
a[83]="S";
a[84]="T";
a[85]="U";
a[86]="V";
a[87]="W";
a[88]="X";
a[89]="Y";
a[90]="Z";
a[91]="[";
a[92]="\\";
a[93]="]";
a[94]="^";
a[95]="_";
a[96]="`";
a[97]="a";
a[98]="b";
a[99]="c";
a[100]="d";
a[101]="e";
a[102]="f";
a[103]="g";
a[104]="h";
a[105]="i";
a[106]="j";
a[107]="k";
a[108]="l";
a[109]="m";
a[110]="n";
a[111]="o";
a[112]="p";
a[113]="q";
a[114]="r";
a[115]="s";
a[116]="t";
a[117]="u";
a[118]="v";
a[119]="w";
a[120]="x";
a[121]="y";
a[122]="z";
a[123]="{";
a[124]="|";
a[125]="}";
a[126]="~";
a[127]=" ";

for(i=0;i<=127;i++)
{
	if(c==a[i])
	{
	r=true;
	break;
	}
}
return r;
}

function isDate2(dat)
{
	var r = false;
	var y, m, d;
	var tag = "-", tag2 = " ", p, t = dat;

	p = t.indexOf(tag);
	if (p > -1)
	{
		y = t.substr(0, p);
		t = t.substr(p + tag.length);
		p = t.indexOf(tag);
		if (p > -1)
		{
			m = t.substr(0, p);
			t = t.substr(p + tag.length);
			p = t.indexOf(tag2);
			if (p > -1)
			{
				d = t.substr(0, p);
			}
			else
			{
				d = t.substr(p + tag.length);
			}
			//alert("y="+y+",m="+m+",d="+d);
			r = isDate(y, m, d);
		}
	}
	return r;
}

function isDate(y,m,d)
{
	var iy,im,id,r=false;
	if(isNum(y) && isNum(m) && isNum(d))
	{
	}
	else
	{
		return r;
	}
	
	try{
		iy = parseInt(y, 10);
		im = parseInt(m, 10);
		id = parseInt(d, 10);
	}
	catch(e)
	{return r;}

	switch(im)
	{
	case 1:
		if(id>=0 && id<=31)
		{r=true}
		break;
	case 2:  // 有润年问题
		if(id>=0 && id<=28)
		{r=true}
		else if(id==29)
		{
			if(isXYear(iy))
			{r=true;}
		}
		break;
	case 3:
		if(id>=0 && id<=31)
		{r=true}
		break;
	case 4:
		if(id>=0 && id<=30)
		{r=true}
		break;
	case 5:
		if(id>=0 && id<=31)
		{r=true}
		break;
	case 6:
		if(id>=0 && id<=30)
		{r=true}
		break;
	case 7:
		if(id>=0 && id<=31)
		{r=true}
		break;
	case 8:
		if(id>=0 && id<=31)
		{r=true}
		break;
	case 9:
		if(id>=0 && id<=30)
		{r=true}
		break;
	case 10:
		if(id>=0 && id<=31)
		{r=true}
		break;
	case 11:
		if(id>=0 && id<=30)
		{r=true}
		break;
	case 12:
		if(id>=0 && id<=31)
		{r=true}
		break;
	default:
		break;
	}
	return r;
}
function isXYear(y)
{
	var r=false;
	if(y%4==0)
	{
		if(y%400==0)
		{
			r=true
		}
		else if(y%100!=0)
		{
			r=true
		}
		else
		{}		
	}
	return r;
}
function repCNtoEN(s) //把中文数字转成英文数字
{
	if(s==null || s=="")
	{return s;}
	var t=s;
	t=t.replace(/０/g,"0");
	t=t.replace(/１/g,"1");
	t=t.replace(/２/g,"2");
	t=t.replace(/３/g,"3");
	t=t.replace(/４/g,"4");
	t=t.replace(/５/g,"5");
	t=t.replace(/６/g,"6");
	t=t.replace(/７/g,"7");
	t=t.replace(/８/g,"8");
	t=t.replace(/９/g,"9");
	return t;
}

function repEmailtoEN(s) //把email中文符号转成英文符号
{
	if(s==null || s=="")
	{return s;}
	var t=s;
	t=t.replace(/＠/g,"@");
	t=t.replace(/。/g,".");
	t=t.replace(/；/g,";");
	t=t.replace(/，/g,",");
	return t;
}
function isEmail(e)
{
	var r=true;
	var p1=e.indexOf("@");
	var p2=e.indexOf(".");
	var p3=-1;
	var p4=-1;
	var p5=-1;
	if(p1>0 && p2>0)
	{
		p1=e.indexOf(",");
		p2=e.indexOf("\'");
		p3=e.indexOf("\"");
		p4=e.indexOf(":");
		p5=e.indexOf("*");
		if(p1>-1 || p2>-1 || p3>-1 || p4>-1 || p5>-1)
		{
			r=false;
		}
		p1=e.indexOf("[");
		p2=e.indexOf("]");
		p3=e.indexOf("(");
		p4=e.indexOf(")");
		p5=e.indexOf("!");
		if(p1>-1 || p2>-1 || p3>-1 || p4>-1 || p5>-1)
		{
			r=false;
		}
		p1=e.indexOf("#");
		p2=e.indexOf("$");
		p3=e.indexOf("%");
		p4=e.indexOf("^");
		p5=e.indexOf("&");
		if(p1>-1 || p2>-1 || p3>-1 || p4>-1 || p5>-1)
		{
			r=false;
		}
		p1=e.indexOf("<");
		p2=e.indexOf(">");
		p3=e.indexOf("?");
		p4=e.indexOf("/");
		p5=e.indexOf("\\");
		if(p1>-1 || p2>-1 || p3>-1 || p4>-1 || p5>-1)
		{
			r=false;
		}
		p1=e.indexOf("|");
		p2=e.indexOf("+");
		p3=e.indexOf("=");
		p4=e.indexOf("`");
		p5=e.indexOf("~");
		if(p1>-1 || p2>-1 || p3>-1 || p4>-1 || p5>-1)
		{
			r=false;
		}		
	}
	else
	{
		r=false;
	}
	return r;
}
function getDT_datetime(d)
{
	var r="";
	//var d=new Date();
	r+= d.getFullYear() + "-";
	r+= (d.getMonth()+1)+ "-";
	r+= d.getDate()+" ";
	r+= d.getHours()+ ":";
	r+= d.getMinutes()+ ":";
	r+= d.getSeconds();
	return r;
}
function getDT_date(d)
{
	var r="";
	//var d=new Date();
	r+= d.getFullYear() + "-";
	r+= (d.getMonth()+1)+ "-";
	r+= d.getDate();
	return r;
}
function getDT_time(d)
{
	var r="";
	//var d=new Date();
	r+= d.getHours()+ ":";
	r+= d.getMinutes()+ ":";
	r+= d.getSeconds();
	return r;
}
function getDT_dateFirst(d)
{
	var r="";
	//var d=new Date();
	r+= d.getFullYear() + "-";
	r+= (d.getMonth()+1)+ "-";
	r+= "1";
	return r;
}
function getDT_dateLast(dt)
{
	//var dt=new Date();
	var r="";
	var y=dt.getFullYear();
	var m=dt.getMonth();
	var d="";
	
	if(m==0)
	{
		d="31";
	}
	else if(m==1)
	{
		if(isXYear(y))
		{
			d="29";
		}
		else
		{
			d="28";
		}
	}
	else if(m==2)
	{
		d="31";
	}
	else if(m==3)
	{
		d="30";
	}
	else if(m==4)
	{
		d="31";
	}
	else if(m==5)
	{
		d="30";
	}
	else if(m==6)
	{
		d="31";
	}
	else if(m==7)
	{
		d="31";
	}
	else if(m==8)
	{
		d="30";
	}
	else if(m==9)
	{
		d="31";
	}
	else if(m==10)
	{
		d="30";
	}
	else if(m==11)
	{
		d="31";
	}
	
	r+= y + "-";
	r+= (m+1)+ "-";
	r+= d;
	return r;
}

function isInTimeStep(hour1,minute1,hour2,minute2)  //检查是不是在一个时间段内
{
	var r=false;
	var d=new Date();
	var x=60;
	
	var h=d.getHours();
	var m=d.getMinutes();
	
	var t=h*x+m;
	var t1=hour1*x+minute1;
	var t2=hour2*x+minute2;

	if(t>=t1 && t<=t2)
	{
		r=true;
	}

	//alert("h="+h+",m="+m+", t="+t+",t1="+t1+",t2="+t2+",r="+r);
	return r;
}

//把 tagIDName 下所含的 A 标签中的 target 改成 _blank 或 其它的  target=="_SF" 的转成 _self
function changeATarget(tagIDName,theTarget) 
{
	var theCollID;
	var theID;
	var h=0;


	theCollID = getElementsByIDorName(tagIDName);
	if (!theCollID) { return; }
	
	if(theCollID.length==undefined)  //只有一个
	{
		theID=theCollID;
		changeATarget_2(theID,theTarget);	
	}
	else
	{
		for(h=0;h<theCollID.length;h++)
		{
			theID=theCollID[h];
			changeATarget_2(theID,theTarget);
		}	
	}
}
function changeATarget_2(theID,theTarget) 
{
	if(!theID){return;}

	var k;
	var theCollA;
	var obj;

	theCollA=theID.getElementsByTagName("A");
	if(theCollA)
	{
		for(k=0;k<theCollA.length;k++)
		{
			obj=theCollA[k];
			if(obj.target=="_SF")
			{
				obj.target="_self";
			}
			else
			{
				obj.target=theTarget;
			}
		}
	}
}



function getObjXY(obj)
{
	if (typeof(obj) != "object") { obj = document.getElementById(obj); }
	
	var addTop=0,addLeft=0,theP;
	theP=obj.parentElement;
	while(theP)
	{
		//alert(theP.tagName+", theP.offsetLeft="+theP.offsetLeft+", theP.offsetTop="+theP.offsetTop);

		if(theP.tagName!="DIV" && theP.tagName!="CENTER" && theP.tagName!="TBODY" && theP.tagName!="TR" && theP.tagName!="FORM")
		{
			addTop+=theP.offsetTop;
			addLeft+=theP.offsetLeft;
		}

		theP=theP.parentElement;
	}

	var objLeft=obj.offsetLeft+addLeft;
	var objTop=obj.offsetTop+addTop;
	
	var xy=new Array(2);
	xy[0]=objLeft;
	xy[1]=objTop;
	
	return xy;
}

function getParentElement(obj, targetTag)
{
	var r = obj.parentElement;
	var theP = r;
	while (theP)
	{
		//alert(theP.tagName);

		if (theP.tagName == targetTag)
		{
			r = theP;
			break;
		}
		theP = theP.parentElement;

	}
	return r;
}

/*
id=getUrlPara(location.search,"id");
*/
function getUrlPara(qs,paraName)
{
	var r="";
	var f="",i,k,v,t,t1,t2,kv;
	if(qs.length==0){return r;}

	if(qs.length>0)
	{
		if(qs.substr(0,1)=="?")
		{
			qs=qs.substr(1);		
		}
	}
	f=qs.split("&");
	for(i=0;i<f.length;i++)
	{
		kv=f[i].split("=")
		k=kv[0];
		v=kv[1];
		//alert("k=" + k + ", v=" + v);
		t1=k.toLowerCase();
		t2=paraName.toLowerCase();
		if(t1==t2)
		{
			r=v;
			break;
		}
	} //for
	return r;
}

function getUrlPara2(qs)
{
	if(qs==null){qs="";}
	if(qs.length>0)
	{
		if(qs.substr(0,1)=="?")
		{
			qs=qs.substr(1);
		}
	}
	return qs;
}


//close window
function clsWin()
{
    try
    {
        window.opener = window;
        var win = window.open("about:blank", "_self");
        win.close();

        //frame的时候
        top.close();

        window.open("about:blank", "_self").close()

    }
    catch (e)
    {
    }

}

//open url
function openUrl(url)
{
	var u;
	if(url!="" && url!=null)
	{
		url=url.toLowerCase();
		if(url.substring(0,7)!="http://")
		{
			u="http://"+url;
		}
		else
		{
			u=url;
		}
		open(u);
	}
}


//------
//就是选中select中提定的value的选项
function selSelectValue(objSel, val)
{
	var idx = -1;
	var v = val;
	var i;

	for (i = 0; i < objSel.length; i++)
	{
		if (objSel[i].value == v)
		{
			idx = i;
			break;
		}
	}
	if (idx != -1)
	{
		objSel.selectedIndex = idx;
	}
	return idx;
}


//拷贝如表格中一列的内容列表
/*
Response.Write(" <INPUT type=button value=\" 复制本页ID列表 \" onclick=copy_theColList(\"theIDList\")>");
*/
function copy_theColList(objStr)
{
	var obj = getElementsByIDorName(objStr);
	if (!obj) { return; }

	var i = 0;
	var l = 0;
	var txtList = "";
	if (obj)
	{
		l = obj.length;
		//alert(l);

		if (isNaN(l))
		{
			txtList = obj.innerText;
		}
		else
		{
			for (i = 0; i < l; i++)
			{
				txtList = txtList + obj[i].innerText + "\r\n";
			}
		}
	}
	//alert("txtList="+txtList);

	window.clipboardData.setData("Text", txtList);
	window.status = "复制成功！  现在马上可以粘贴到处种地方了！ 共复制 " + l + " 个。";
}

function get_rnd() { return get_rnd2(1, 1000000); }
function get_rnd2(min, max) { return parseInt((max - min + 1) * Math.random() + min); }
function get_features()
{
	return get_features_all(1);
}
function get_features2()
{
	return get_features_all(2);
}
function get_features3()
{
	return get_features_all(3);
}
function get_features4()
{
	return get_features_all(4);
}
function get_features_all(k)
{
	var swidth = screen.width;
	var sheight = screen.height;
	var sw = "";
	var sh = "";
	if (k == 1)
	{
		sw = parseInt(swidth * 0.95) + "px";
		sh = parseInt(sheight * 0.85) + "px";
	}
	else if (k == 2)
	{
		sw = parseInt(swidth * 0.7) + "px";
		sh = parseInt(sheight * 0.8) + "px";
	}
	else if (k == 3)
	{
		sw = parseInt(swidth * 0.6) + "px";
		sh = parseInt(sheight * 0.5) + "px";
	}
	else if (k == 4)
	{
		sw = parseInt(swidth * 0.7) + "px";
		sh = parseInt(sheight * 0.5) + "px";
	}
	var sFeatures = "dialogWidth:" + sw + ";dialogHeight:" + sh + ";status:0;resizable:1;scroll:1;help:0";
	return sFeatures;
}

//在网址后面加上参数  //sUrl=addUrlParam(sUrl,"rnd="+rnd);
function addUrlParam(sUrl, para)
{
	var r = "";
	var p = sUrl.indexOf("?");
	if (p > -1)
	{
		r = sUrl + "&" + para;
	}
	else
	{
		r = sUrl + "?" + para;
	}
	return r;
}

//获取FORM中的所有控件，编码成URL参数返回
function getFormFields(objForm)
{
	var i = 0;
	var eArr = objForm.elements, e;
	var l = eArr.length;
	var r = "", t = "", k = "", v = "", tp = "";
	//alert("l="+l);

	for (i = 0; i < l; i++)
	{
		e = eArr[i];
		tp = e.type;
		k = e.name;
		v = e.value;
		t = k + "=" + escape(v);
		if (i == l - 1)
		{
		}
		else
		{
			t = t + "&";
		}

		//alert(tp);
		if (tp == "checkbox" || tp == "radio")
		{
			if (e.checked)
			{
				r = r + t;
			}
		}
		else
		{
			r = r + t;
		}

	}
	//alert("r="+r);
	return r;

}

//查找内容是不是已经在数组中,返回idx,-1表示没找到
function isInArray(arr, s)
{
	var i, r = -1;
	for (i = 0; i < arr.length; i++)
	{
		if (arr[i].indexOf(s) > -1)
		{
			r = i; break;
		}
	}
	return r;
}

//-------------------------------------------------------------
/*
把 tagIDName 下所有图片缩放到指定尺寸
onload="scalePicWH_All('thePicTable',530,0);"
<body onload="scalePicWH_All(document.body,<%=maxWidth%>,0);">
*/
function scalePicWH_All(tagIDName, maxWidth, maxHeight)
{
	//return;

	var theCollID;
	var theID;
	var h = 0;

	if (typeof (tagIDName) == "object")
	{
		theCollID = tagIDName.getElementsByTagName("IMG");
	}
	else //if(typeof(tagIDName)=="string")
	{
		theCollID = getElementsByIDorName(tagIDName);
	}
	if (!theCollID) { return; }
	if (theCollID.length == undefined)  //只有一个
	{
		theID = theCollID;
		if (theID.tagName == "IMG")
		{
			scalePicWH(theID, maxWidth, maxHeight);
		}
	}
	else
	{
		for (h = 0; h < theCollID.length; h++)
		{
			theID = theCollID[h];
			if (theID.tagName == "IMG")
			{
				scalePicWH(theID, maxWidth, maxHeight);
			}
		}
	}
}
/*
缩放图片到指定尺寸（不超出maxWidth*maxHeight)
maxWidth 或 maxHeight =0 表示不缩放
//onload=scalePicWH(this,0,80) //不要用这种
onreadystatechange=scalePicWH(this,0,80)  //这种要好一些
*/
function scalePicWH(img, maxWidth, maxHeight)
{
	//alert("img.uniqueID=" + img.uniqueID + " maxWidth=" + maxWidth + ",maxHeight=" + maxHeight + " width=" + img.width + ",height=" + img.height);
	scalePicWH_main(img, maxWidth, maxHeight);
	window.setTimeout("scalePicWH_main('" + img.uniqueID + "'," + maxWidth + "," + maxHeight + ")", 1000);
	window.setTimeout("scalePicWH_main('" + img.uniqueID + "'," + maxWidth + "," + maxHeight + ")", 3000);
}
function scalePicWH_main(img, maxWidth, maxHeight)
{
	if (typeof (img) == "object")
	{
	}
	else //if(typeof(img)=="string")
	{
		img = document.getElementById(img);
	}

	//	var theID=document.getElementById("msgDiv2");
	//	if(theID)
	//	{
	//		theID.innerHTML=theID.innerHTML+"<BR>img.uniqueID="+img.uniqueID+",src="+img.src+",maxWidth="+maxWidth+",maxHeight="+maxHeight;
	//	}

	if (typeof (img) == "object")
	{
		if (img == null) { return; } 
		
		if (img.width && img.height)
		{
		}
		else
		{
			return;
		}

		var imgWidth = img.width;
		var imgHeight = img.height;
		
		
		if ((imgWidth > maxWidth && maxWidth > 0) && (imgHeight > maxHeight && maxHeight > 0))
		{
			var widthRate = imgWidth / maxWidth;
			var heightRate = imgHeight / maxHeight;
			if (widthRate > heightRate)
			{
				img.style.width = maxWidth;
				img.width = maxWidth;
				//img.height=imgHeight*(maxWidth/imgWidth);
			}
			else
			{
				img.style.height = maxHeight;
				img.height = maxHeight;
				//img.width=imgWidth*(maxHeight/imgHeight);
			}
		}
		else if (imgWidth > maxWidth && maxWidth > 0)
		{
			img.style.width = maxWidth;
			img.width = maxWidth;
			//img.height=imgHeight*(maxWidth/imgWidth);
		}
		else if (imgHeight > maxHeight && maxHeight > 0)
		{
			img.style.height = maxHeight;
			img.height = maxHeight;
			//img.width=imgWidth*(maxHeight/imgHeight);	
		}
	}
}
//-------------------------------------------------------------

/*
要同func.js一起用
onkeyup="return CounterKeyUp(event,this,200,counterStr);"
<span style="width:250px;text-align:right"> 还可以输入<input type="text" readonly name="counterStr" value="1000" size="5" style="text-align:center">个字符</span>
<span style=\"width:250px;text-align:right\"> 还可以输入<input type=\"text\" readonly name=\"counterStr\" value=\"1000\" size=\"5\" style=\"text-align:center\">个字符</span>
*/
function CounterKeyUp(eventObj, field, maxlimit, countfield)
{
	var charCount = 0;
	var l = lenex(field.value);
	var l2 = l - maxlimit;

	if (countfield != null)
	{
		charCount = maxlimit - l;
		if (charCount > 0)
		{
			countfield.value = maxlimit - l;
		}
		else
		{
			countfield.value = charCount;
		}
	}

	if (l > maxlimit)
	{
		var keyCode;
		if (document.all)
		{
			keyCode = eventObj.keyCode;
		}
		else
		{
			keyCode = eventObj.which;
		}
		if (keyCode != 8)  //BS
		{
			if (l2 == 1 || l2 == 2 || l2 % 10 == 0)
			{
				alert("已超过最大可输入的字数 " + maxlimit + " 个，目前多 " + l2 + " 个字符。请删除一些。  ");
			}
			//field.value = field.value.substring(0, maxlimit+1);
			return false;
		}
	}
}

/*
要同func.js一起用
检查输入的内容是不是超过了最大长度
maxLen=0不限长度
if(!checkMaxLen(f2.name,100,"[姓名]")){return;}
*/
function checkMaxLen(obj, maxLen, showStr, isUnicode)
{
    if (typeof (isUnicode) == undefined)
    {
        isUnicode = false;
    }

    var r = true;
    var v = trim(obj.value);
    var l = 0;
    if (isUnicode)
    {
        l = v.length;
    }
    else
    {
        l = lenex(v);
    }

    if (maxLen != 0 && l > maxLen)
    {
        alert(showStr + " 长度不能大于 " + maxLen + " 个字符！      \n\n目前多 " + (l - maxLen) + " 个字符！");
        //obj.select();
        obj.focus();
        r = false;
    }
    return r;
}

/*检查内容是不是空的
if(!checkIsNull(f2.name,"[姓名]")){return;}
*/
function checkIsNull(obj, showStr)
{
	var r = false;
	var v = trim(obj.value);
	if (v==null || v=="")
	{
		alert("请输入" + showStr + "！        ");
		//obj.select();
		obj.focus();
		r = true;
	}
	return r;
}
function checkIsNull2(obj)
{
	var r = false;
	var v = trim(obj.value);
	if (v == null || v == "")
	{
		r = true;
	}
	return r;
}

//------
function control_dis(obj)
{
	control_disabled(obj, 20);
}
function control_disabled(obj, t)
{
	var objT;
	if (typeof (obj) == "object")
	{
		objT = obj;
	}
	else
	{
		objT = document.getElementById(obj);
	}
	if (typeof (objT) != "object") { return; }
	objT.disabled = true;

	if (objT.id == null || objT.id == "")
	{
		objT.id = objT.uniqueID;  //注意:这里会改变id,在html4里不用这行,xhmtl中要用这行
	}
	window.setTimeout("control_enabled('" + objT.uniqueID + "')", t * 1000);
}
function control_enabled(obj)
{
	var objT;

	if (typeof (obj) == "object")
	{
		objT = obj;
	}
	else
	{
		objT = document.getElementById(obj);
	}
	if (typeof (objT) != "object") { return; }
	try
	{
		objT.disabled = false;
	}
	catch (e) { }
}
//------

/*
要同func.js一起用

<input type="button" value="上月" onclick=getDT_lastMonth(fm.dat1,fm.dat2)>
<input type="button" value="本月" onclick=getDT_theMonth(fm.dat1,fm.dat2)>
<input type="button" value="近三天" onclick=getDT_lastXDay(fm.dat1,fm.dat2,3)>

<input type="button" value="去年" onclick=getDT_lastYear(fm.dat1,fm.dat2)>
<input type="button" value="本年" onclick=getDT_theYear(fm.dat1,fm.dat2)>
<input type="button" value="清除" onclick=clearObj12(fm.dat1,fm.dat2)>

Response.Write("<input type=\"button\" value=\"上月\" onclick=getDT_lastMonth(fm.dat1,fm.dat2)>");
Response.Write("<input type=\"button\" value=\"本月\" onclick=getDT_theMonth(fm.dat1,fm.dat2)>");
Response.Write("<input type=\"button\" value=\"3天\" onclick=getDT_lastXDay(fm.dat1,fm.dat2,3)>");
Response.Write("<input type=\"button\" value=\"1天\" onclick=getDT_lastXDay(fm.dat1,fm.dat2,1)>");

<input type=\"button\" value=\"清除\" onclick=clearObj12(fm.dat1,fm.dat2)>

*/
function getDT_all(obj1, obj2, k)  //各种方式
{
	if (k == "lastMonth")
	{
		getDT_lastMonth(obj1, obj2);
	}
	else if (k == "theMonth")
	{
		getDT_theMonth(obj1, obj2)
	}

	else if (k == "theYear")
	{
		getDT_theYear(obj1, obj2)
	}
	else if (k == "lastYear")
	{
		getDT_lastYear(obj1, obj2)
	}

	else
	{
		var c = k;
		if (c == "" || isNaN(c))
		{
			clearObj12(obj1, obj2)
		}
		else
		{
			getDT_lastXDay(obj1, obj2, c)
		}
	}
}

function getDT_lastMonth(obj1, obj2)  //上月
{
	var d = new Date();
	d.setMonth(d.getMonth() - 1);
	obj1.value = getDT_dateFirst(d) + " 0:0:0";
	obj2.value = getDT_dateLast(d) + " 23:59:59";
}
function getDT_theMonth(obj1, obj2)  //本月
{
	var d = new Date();
	obj1.value = getDT_dateFirst(d) + " 0:0:0";
	obj2.value = getDT_dateLast(d) + " 23:59:59";
}
function getDT_lastXDay(obj1, obj2, c) //最近c天
{
	var d = new Date();
	obj2.value = getDT_date(d) + " 23:59:59";

	d.setHours(24 * -1 * c);
	obj1.value = getDT_date(d) + " 0:0:0";
}

function getDT_theYear(obj1, obj2)  //本年
{
	var d = new Date();
	obj1.value = d.getFullYear() + "-1-1 0:0:0";
	obj2.value = d.getFullYear() + "-12-31 23:59:59";
}
function getDT_lastYear(obj1, obj2)  //去年
{
	var d = new Date();
	d.setYear(d.getFullYear() - 1);
	obj1.value = d.getFullYear() + "-1-1 0:0:0";
	obj2.value = d.getFullYear() + "-12-31 23:59:59";
}

function clearObj12(obj1, obj2)  //清除
{
	obj1.value = "";
	obj2.value = "";
}

function setCookie(cookieName, cookieValue)
{
	var today = new Date();
	var expire = new Date();
    expire.setTime(today.getTime() + 1000 * 3600 * 24 * 30 * 365);
	document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString() + "; path=/";
}

function readCookie(cookieName)
{
	var theCookie = "" + document.cookie;
	var i = theCookie.indexOf(cookieName + "=");
	if (i == -1 || cookieName == "") return "";
	var j = theCookie.indexOf(';', i);
	if (j == -1) j = theCookie.length;
	return unescape(theCookie.substring(i + cookieName.length + 1, j));
}

//------
/*
删除节点
do_removeNode(fm.sel);
*/
function do_removeNode(nodeName)
{
	var l, i,obj;
	if (typeof (nodeName) != "object") { return; }
	if (typeof (nodeName.length) == "undefined")
	{
		l = 0;
	}
	else
	{
		l = nodeName.length;
	}
	if (l > 0)
	{
		for (i = l - 1; i >= 0; i--)
		{
			//nodeName[i].removeNode(true);
			
			obj = nodeName[i];
			obj.parentNode.removeChild(obj);
		}
	}
	else
	{
		//nodeName.removeNode(true);
		obj = nodeName;
		obj.parentNode.removeChild(obj);
	}
}

/*
选择所有复选框
obj_selall 是"全选"复选框
obj_sel 是ID前面的复选框

<type="checkbox" name="sel" value="">

do_SelAll(fm.selall,fm.sel);
*/
function do_SelAll(obj_selall, obj_sel)
{
	if (typeof (obj_sel) != "object") { return; }
	var l, i;
	var r = !(!obj_selall.checked);
	l = obj_sel.length;
	if (l > 0)
	{
		for (i = 0; i < l; i++)
		{
			obj_sel[i].checked = r;
		}
	}
	else
	{
		obj_sel.checked = r;
	}
}
/*
用这种方式 checkbox所在的TD 要有个ID，一般都是 "td_"+F_id
theTD_id_prefix 是td的ID的前缀
onclick=\"do_SelAll2(fm.selall,fm.sel,'td_',g_color1,g_color0);\"
*/
function do_SelAll2(obj_selall, obj_sel, theTD_id_prefix, color1, color0)
{
	if (typeof (obj_sel) != "object") { return; }
	var l, i, o;
	var r = !(!obj_selall.checked);
	l = obj_sel.length;
	if (l > 0)
	{
		for (i = 0; i < l; i++)
		{
			obj_sel[i].checked = r;
			o = document.getElementById(theTD_id_prefix + obj_sel[i].value);
			if (obj_sel[i].checked)
			{
				o.style.backgroundColor = color1;
			}
			else
			{
				o.style.backgroundColor = color0;
			}
		}
	}
	else
	{
		obj_sel.checked = r;
		o = document.getElementById(theTD_id_prefix + obj_sel.value);
		if (obj_sel.checked)
		{
			o.style.backgroundColor = color1;
		}
		else
		{
			o.style.backgroundColor = color0;
		}
	}
}

/*
反选
do_ReSel(fm.sel);
*/
function do_ReSel(obj_sel)
{
	if (typeof (obj_sel) != "object") { return; }
	var l, i;
	l = obj_sel.length;
	if (l > 0)
	{
		for (i = 0; i < l; i++)
		{
			obj_sel[i].checked = !obj_sel[i].checked;
		}
	}
	else
	{
		obj_sel.checked = !obj_sel.checked;
	}
}
/*
用这种方式 checkbox所在的TD 要有个ID，一般都是 "td_"+F_id
theTD_id_prefix 是td的ID的前缀
do_ReSel2(fm.sel,'td_',g_color1,g_color0);

onclick=\"do_ReSel2(fm.sel,'td_','#ff9fc5','#ffffff');\"
onclick=\"do_ReSel2(fm.sel,'td_',g_color1,g_color0);\"

*/
function do_ReSel2(obj_sel, theTD_id_prefix, color1, color0)
{
	if (typeof (obj_sel) != "object") { return; }
	var l, i, o;
	l = obj_sel.length;
	if (l > 0)
	{
		for (i = 0; i < l; i++)
		{
			obj_sel[i].checked = !obj_sel[i].checked;
			o = document.getElementById(theTD_id_prefix + obj_sel[i].value);
			if (obj_sel[i].checked)
			{
				o.style.backgroundColor = color1;
			}
			else
			{
				o.style.backgroundColor = color0;
			}
		}
	}
	else
	{
		obj_sel.checked = !obj_sel.checked;
		o = document.getElementById(theTD_id_prefix + obj_sel.value);
		if (obj_sel.checked)
		{
			o.style.backgroundColor = color1;
		}
		else
		{
			o.style.backgroundColor = color0;
		}
	}
}
/*
点击选中复选框，TD背景要变颜色
onclick=clkSel(fm.sel,F_id,"td_"+F_id,"#ff84b2","#ffffff");
onclick=\"clkSel(fm.sel,'" + F_id + "','td_" + F_id + "','#ff9fc5','#ffffff');\"
onclick=\"clkSel(fm.sel,'" + F_id + "','td_" + F_id + "',g_sel_color1,g_sel_color0);\"
*/
function clkSel(obj_sel, theSelValue, theTD_id, color1, color0)
{
	//alert(theSelValue);
	var l, i, o;
	l = obj_sel.length;
	if (l > 0)
	{
		for (i = 0; i < l; i++)
		{
			if (obj_sel[i].value == theSelValue)
			{
				o = document.getElementById(theTD_id);
				obj_sel[i].checked = !obj_sel[i].checked;
				if (obj_sel[i].checked)
				{
					o.style.backgroundColor = color1;
				}
				else
				{
					o.style.backgroundColor = color0;
				}
			}
		} //for
	}
	else
	{
		o = document.getElementById(theTD_id);
		obj_sel.checked = !obj_sel.checked;
		if (obj_sel.checked)
		{
			o.style.backgroundColor = color1;
		}
		else
		{
			o.style.backgroundColor = color0;
		}
	}
}

/*
点击选中复选框，TD背景要变颜色，按[Ctrl+点击]会选中或反选从第1个开始到当前的复选框
onclick=clkSel2(fm.sel,F_id,"td_"+F_id,"#ff84b2","#ffffff");
onclick=\"clkSel2(fm.sel,'" + F_id + "','td_" + F_id + "','#ff9fc5','#ffffff');\"
onclick=\"clkSel2(fm.sel,'" + F_id + "','td_" + F_id + "',g_sel_color1,g_sel_color0);\"
*/
function clkSel2(obj_sel, theSelValue, theTD_id, color1, color0)
{
	//alert("theSelValue=" + theSelValue + ",event.ctrlKey=" + event.ctrlKey);

	var l, i, o;
	var sv, idx;
	l = obj_sel.length;
	if (l > 0)
	{
		for (i = 0; i < l; i++)
		{
			if (obj_sel[i].value == theSelValue)
			{
				o = document.getElementById(theTD_id);
				sv = !obj_sel[i].checked;
				obj_sel[i].checked = sv;
				if (obj_sel[i].checked)
				{
					o.style.backgroundColor = color1;
				}
				else
				{
					o.style.backgroundColor = color0;
				}
				idx = i;
				break;
			}
		} //for


		if (event.ctrlKey)
		{
			for (i = 0; i < idx; i++)
			{
				o = getParentElement(obj_sel[i]);
				obj_sel[i].checked = sv;
				if (obj_sel[i].checked)
				{
					o.style.backgroundColor = color1;
				}
				else
				{
					o.style.backgroundColor = color0;
				}
			} //for
		}

	}
	else
	{
		o = document.getElementById(theTD_id);
		obj_sel.checked = !obj_sel.checked;
		if (obj_sel.checked)
		{
			o.style.backgroundColor = color1;
		}
		else
		{
			o.style.backgroundColor = color0;
		}
	}
}

function cancelBubble()
{
	window.event.cancelBubble = true;
}


/*
点击选中复选框，TD背景要变颜色
theSetValue=true or false

clkSel_setValue(fm.sel, id, "td_" + id, true, g_sel_color1, g_sel_color0);

*/
function clkSel_setValue(obj_sel, theSelValue, theTD_id, theSetValue, color1, color0)
{
	//alert(theSelValue);
	var l, i, o;
	l = obj_sel.length;
	if (l > 0)
	{
		for (i = 0; i < l; i++)
		{
			if (obj_sel[i].value == theSelValue)
			{
				o = document.getElementById(theTD_id);
				obj_sel[i].checked = theSetValue;
				if (obj_sel[i].checked)
				{
					o.style.backgroundColor = color1;
				}
				else
				{
					o.style.backgroundColor = color0;
				}
			}
		} //for
	}
	else
	{
		o = document.getElementById(theTD_id);
		obj_sel.checked = theSetValue;
		if (obj_sel.checked)
		{
			o.style.backgroundColor = color1;
		}
		else
		{
			o.style.backgroundColor = color0;
		}
	}
}
//------
function do_goPage(fm, k, method)
{
	if (typeof (method) == "undefined") { method="get"; }
	if (!fm) { return; }
	var PageNo = fm.PageNo.value;
	var iPageNo = parseInt(PageNo);
	var r;
	switch (k)
	{
		case 1:
			r = 1;
			break;
		case 2:
			r = iPageNo - 1;
			break;
		case 3:
			r = iPageNo + 1;
			break;
		case 4:
			r = fm.PageTotal.value;
			break;
		default:
			r = fm.goPageNo.value;
			break;
	}
	fm.PageNo.value = r;
	do_ordByChange(fm, method);
}

/*
当控件 class=notGetSend,就要排队掉,不GET发送，不然长度会太长
*/
function do_ordByChange(fm, method)
{
	do_ordByChange_doit(fm, method);
}
function do_ordByChange_doit(fm, method)
{
	if (typeof (method) == "undefined") { method = "get"; }
    if (!fm) { return; }

    var s; 
    var url;
	try
    {
        s = $(fm).find(":input").not("input[name='sel']").not(".notGetSend").serialize();
        url = location.pathname + "?" + s;
        //alert(url);
        if (method.toLowerCase() == "get")
        {
            location.href = url;
            return;
        }
    }
    catch (e)
    {}

    try
    {
        do_removeNode(fm.sel);
    }
    catch (e)
    {}

    fm.target = "_self";
    fm.method = method;
    fm.action = location.pathname;
    fm.submit();
    
}

/*
attachEvt_MOverOut_FocusBlur("aa,bb,cc");
让按纽当鼠标移上时自动有焦点
exclusionListName是要排除的ID或NAME列表,逗号分隔
*/
function attachEvt_MOverOut_FocusBlur()
{
	attachEvt_MOverOut_FocusBlur(null);
}
function attachEvt_MOverOut_FocusBlur(exclusionListName)
{
	var i, k, theCollA, obj, a, id, nm, b;
	if (exclusionListName)
	{
		a = exclusionListName.split(",");
		for (i = 0; i < a.length; i++)
		{
			a[i] = a[i].toLowerCase();
		}
	}

	theCollA = document.getElementsByTagName("input");
	if (theCollA)
	{
		for (k = 0; k < theCollA.length; k++)
		{
			obj = theCollA[k];
			id = obj.id.toLowerCase();
			nm = obj.name.toLowerCase();
			b = false;
			if (exclusionListName)
			{
				for (i = 0; i < a.length; i++)
				{
					if (a[i] == id || a[i] == nm)
					{
						//alert("a[" + i + "]=" + a[i] + " id=" + id + " nm=" + nm);
						b = true;
						break;
					}
				}
			}
			if (b) { continue; }
			t = obj.type.toLowerCase();
			if (t == "button" || t == "reset")
			{
				try
				{
					obj.addEventListener("mouseover", function () { event.srcElement.focus(); });
					obj.addEventListener("mouseout", function () { event.srcElement.blur(); });
				} catch (exc)
				{
					try
					{
						obj.attachEvent("onmouseover", function () { event.srcElement.focus(); });
						obj.attachEvent("onmouseout", function () { event.srcElement.blur(); });
					} catch (exc2)
					{
					}
				}

			}
		}
	}


	theCollA = document.getElementsByTagName("label");
	if (theCollA)
	{
		for (k = 0; k < theCollA.length; k++)
		{
			obj = theCollA[k];
			id = obj.id.toLowerCase();
			b = false;
			if (exclusionListName)
			{
				for (i = 0; i < a.length; i++)
				{
					if (a[i] == id)
					{
						b = true;
						break;
					}
				}
			}
			if (b) { continue; }
			t = obj.tagName.toLowerCase();
			if (t == "label")
			{
				if (obj.htmlFor)
				{

					try
					{
						obj.attachEvent("mouseenter", function () { if (event.srcElement.htmlFor) { document.getElementById(event.srcElement.htmlFor).focus(); } });
						obj.attachEvent("mouseleave", function () { if (event.srcElement.htmlFor) { document.getElementById(event.srcElement.htmlFor).blur(); } });

					} catch (exc)
					{
						try
						{
							obj.attachEvent("onmouseenter", function () { if (event.srcElement.htmlFor) { document.getElementById(event.srcElement.htmlFor).focus(); } });
							obj.attachEvent("onmouseleave", function () { if (event.srcElement.htmlFor) { document.getElementById(event.srcElement.htmlFor).blur(); } });
						} catch (exc2)
						{
						}
					}
				}
			}
		}
	}


}


//这个以后不要了
//这个不行的，fromID的上级元素的下级，只能是一个toID元素
function copyHtmlTo(fromID, toID)
{
	try
	{
		document.getElementById(toID).innerHTML = document.getElementById(fromID).parentNode.cloneNode(true).innerHTML;
	}
	catch (e) { }
}

function copyInnerHTMLTo(fromID, toID)
{
	try
	{
		document.getElementById(toID).innerHTML = document.getElementById(fromID).cloneNode(true).innerHTML;
	}
	catch (e) { }
}

function checkIsSel(obj_sel)
{
	var r = false;

	if (typeof (obj_sel) != "object") { return r; }
	var l, i;
	l = obj_sel.length;
	if (l > 0)
	{
		for (i = 0; i < l; i++)
		{
			if (obj_sel[i].checked)
			{
				r = true;
				break;
			}
		}
	}
	else
	{
		if (obj_sel.checked)
		{
			r = true;
		}
	}
	return r;
}


//保留两位小数   
//功能：将浮点数四舍五入，取小数点后2位  
function toDecimal(x)
{
	var f = parseFloat(x);
	if (isNaN(f))
	{
		return;
	}
	f = Math.round(x * 100) / 100;
	return f;
}


//保留2位小数，如：2，会在2后面补上00.即2.00  
function toDecimal2(x)
{
	var f = parseFloat(x);
	if (isNaN(f))
	{
		return false;
	}
	var f = Math.round(x * 100) / 100;
	var s = f.toString();
	var rs = s.indexOf('.');
	if (rs < 0)
	{
		rs = s.length;
		s += '.';
	}
	while (s.length <= rs + 2)
	{
		s += '0';
	}
	return s;
}

/*
sb.Append(webInfo.getInput_Textarea("member_remark", "选填，可以告诉我们...", "3", "80", "title=\"选填，可以告诉我们...\" style=\"color:#808080;\" onfocus=do_textInput_default(this,true,'#808080','#000000'); onblur=do_textInput_default(this,false,'#808080','#000000');"));
*/
function do_textInput_default(obj, b, style_color_default, style_color)
{
	if (!obj) { return; }

	var t = obj.title;
	var v = obj.value;

	if (b)  //focus
	{
		if (v == t)
		{
			obj.value = "";
		}
		obj.style.color = style_color;
	}
	else //blur
	{
		if (v == "" || v == null)
		{
			obj.value = t;
			obj.style.color = style_color_default;
		}
		else
		{
			obj.style.color = style_color;
		}
	}
}

function check_keypress(kind)
{
	if (typeof (kind) == "undefined") { kind=0; }

	var r = false;
	var k = event.keyCode;

	if(kind==1)
	{
		if (
		k == 49 || k == 50 || k == 51 || k == 52  //1234
		|| k == 81 || k == 87 || k == 69 || k == 82 //QWER
		|| k == 65 || k == 83 || k == 68 || k == 70 //ASDF
		|| k == 90 || k == 88 || k == 67 || k == 86 //ZXCV
		|| k == 109 || k == 107   //最右边的-+
		)
		{
			r = true;
		}
	}
	else if(kind==2)
	{
		if (
		k == 71 || k == 72 || k == 74 || k == 75 || k == 76 || k == 59 || k == 39 //GHJK L;' 向下
		|| k == 103 || k == 104 || k == 106 || k == 107 || k == 108

		|| k == 66 || k == 78 || k == 77 || k == 44 || k == 46 || k == 47 //BNM ,./
		|| k == 98 || k == 110 || k == 109
		)
		{
			r = true;
		}
	}
	else if(kind==3)
	{
		if (
		k == 84 || k == 89 || k == 55 || k == 73 || k == 79 || k == 80  //TYUI OP 向上
		|| k == 116 || k == 121 || k == 117 || k == 105 || k == 111 || k == 112
		) 
		{
			r = true;
		}
	}
	
	else  //kind=0
	{
		if(
		(k >= 48 && k <= 57)      //0-9
		|| (k >= 65 && k <= 90)   //A-Z
		|| (k >= 97 && k <= 122)  //a-z
		|| k == 109 || k == 107   //最右边的-+
		)
		{
			r=true;
		}
	}

	return r;
}


//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

//jquery:

/*
$ajax错误时的信息
get_ajaxErrorMsg(textStatus,jqXHR.status,jqXHR.responseText)
*/
function get_ajaxErrorMsg(textStatus, status, responseText) {
    var isTest = false;
    isTest = true;  //test

    var msg = '';
    if (status === 0) {
        msg = '未连接。\n 请检查网络。';
    }
    else if (status == 404) {
        msg = '请求的页面未找到　[404]。';
    }
    else if (status == 500) {
        msg = '服务器内部错误　[500]。\n';
        if (isTest) {
            var blk = window.open("about:blank");
            blk.document.write(responseText);
        }
    }
    else if (textStatus === 'parsererror') {
        msg = '请求的 JSON 解析失败。';
        if (isTest) {
            var blk = window.open("about:blank");
            blk.document.write(responseText);
        }
    }
    else if (textStatus === 'timeout') {
        msg = '超时。';
    }
    else if (textStatus === 'abort') {
        msg = 'Ajax 请求中断。';
    }
    else {
        msg = '其它错误：\n' + responseText;
    }
    return msg;
}

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------