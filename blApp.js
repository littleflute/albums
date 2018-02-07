
function _blJobClass(p)
{ 
	this.v = "v0.0.51";
	var ta0 = null;
	var ta1 = null;
	var ta2 = null; 
	var fs = [];
	var _v4Files = null;
	var _strPath = null;
	var _pic = null;
	var ff = function(){
		var a = ta1.value.split(".mp3,");
		blo0.blShowObj2Div(_v4Files.d,a);
		var s = '[aplayer autoplay="true"]';
		var b = a[a.length-1].split(".jpg,"); 
		_pic = _strPath + "/" + b[1].replace("\n","");

		for(var i = 0; i < a.length - 1 ; i++){
			var _title = a[i].replace("\n","");
			s += '\n[mp3 ';
			s += ' url = "';
			s += _strPath + "/" + _title;
			s += '.mp3"';

			s += ' pic = "';
			s += _pic;
			s += '.jpg"';

			s += ' lrc="https://littleflute.github.io/Songs/mp3/%E6%88%91%E7%9A%84%E6%98%8E%E5%A4%A9%20-%20%E9%83%91%E6%99%BA%E5%8C%96.lrc"';
			
			s += ' title = "';
			s += _title;
			s += '" artist = "BobMarley" ';

			s += '] [/mp3]\n';
		}
		s += '[/aplayer]';
		ta2.value = s;
	};
	this.blrRun = function(b,d){
		b.style.backgroundColor = blGrey[0];
		if(ta0) eval(ta0.value);
	}
	this.blrSetPath = function(b,d){
		_strPath = ta1.value;
	}
	this.blrGetFiles = function(b,d){
		if(!d.v) {
			_v4Files = d.v = blo0.blMDiv(document.body,d.id+"_v","files",110,50,800,100,blGrey[1]);
			d.v.d = blo0.blDiv(d.v,d.v.id+"d","d:",blGrey[2]);
		}
		ff();_on_off_div(b,d.v);

	}
	this.blrCode4Files = function(b,d){
		ta0.value = ff;
	}
	this.blrTA0 = function(b,d){
		if(!d.ta) {ta0 = d.ta = blo0.blTextarea(d,d.id+"_ta","",blGrey[0]);d.ta.style.width="95%";}
		_on_off_div(b,d);
	}
	this.blrTA1 = function(b,d){
		if(!d.ta) {ta1 = d.ta = blo0.blTextarea(d,d.id+"_ta","ta1",blGrey[1]);d.ta.style.width="95%";}
		_on_off_div(b,d);
	}
	this.blrTA2 = function(b,d){
		if(!d.ta) {ta2 = d.ta = blo0.blTextarea(d,d.id+"_ta","ta2",blGrey[1]);d.ta.style.width="95%";}
		_on_off_div(b,d);
	}

	p.ui = blo0.blDiv(p,p.id+"_ui","jobUI",blGrey[0]);	
	blo0.blShowObj2Div(p.ui,this); 
	this.blhInit = function(){
		bl$("blrTA0").click();
		bl$("blrTA1").click();
		bl$("blrTA2").click();
		bl$("blrRun").click();
	}
}


function CXdMainFrame()
{
	this.v		= "v0.0.213 ";  
	var s = this.v;
		s += "<a target='_blank' href='https://github.com/littleflute/vc6/edit/master/XdHtml/2.html'"
		s += " style='color:lightblue;'";
		s +=">";
		s += " 2.html*  ";
		s += "</a>"; 
		s += "<a href='2.html'";
		s += " style='color:yellow;'";
		s +=">";
		s += " 2.html ";
		s += "</a>"; 
		s += "<a href='index.html'";
		s += " style='color:green;'";
		s +=">";
		s += " index.html ";
		s += "</a>"; 
	var d 	= blo0.blMDiv(document.body,"id_div_CXdMainFrame_ui",s,0,0,800,100,blColor[1]);
	d.d1	= blo0.blDiv(d,d.id+"d1","d1",blColor[0]);	blo0.blhInitUI(d.d1);  var b = bl$("blhInitUI_btn1");	b.click();	b.click();	 
	
	d.d2	= blo0.blDiv(d,d.id+"d2","plxs:",blColor[1]);	

	_load_plx_btn(blo0,d.d2,"_xdPlxSpiter","https://littleflute.github.io/xd/js/plx/xdPlxSpiter.js","lightblue"); 
	_load_plx_btn(blo0,d.d2,"_xdPlxSet","https://littleflute.github.io/xd/js/plx/xdPlxSet.js","lightblue"); 
	
	d.d3	= blo0.blDiv(d,d.id+"d3","d3:",blColor[2]);	
	d.d3.b1 = blo0.blBtn(d.d3,d.d3.id+"b1","blJob",blGrey[0]);	
	d.d3.b1.onclick = function(_v){ 
		return function(){  
			if(!_v.ui) {
				_v.ui= blo0.blMDiv(_v, _v.id + "_ui","blJob",110,110,800,100,blGrey[1]);
				var _blj = new _blJobClass(_v.ui);
				_blj.blhInit();

			}
			_on_off_div(this,_v.ui);
		}
	}(d.d3)


var mfUI =  blo0.blMDiv(document.body,"xdxdxd",s,50,50,800,100,blColor[1]);
	mfUI.style.position = "fixed";
	mfUI.style.top = "120px";
	mfUI.style.left = "10px"; 
	mfUI.style.width = "100px";
	mfUI.style.height = "50px"; 

}
function CXdAPP()
{
	var _xdMF = new CXdMainFrame;   
}
var gApp = new CXdAPP; 
