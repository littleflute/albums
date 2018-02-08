// 141

function _on_off_div(b,d){
		if(d.style.display=="block"){
			d.style.display="none"; 
			b.style.backgroundColor = blGrey[0]; 
		}
		else{
			d.style.display="block"; 
			b.style.backgroundColor = blGrey[5]; 
		}
};

function _blParseAlbumClass(_album)
{ 
	this.v = "v0.0.32";
	var _this = this;
	var _aplayerListTa = null;
	var _sDebug = _album.url;
	this.title = _album.title;
	this.blrCreateAplayerList = function(b,d){
		 _aplayerListTa.value = _this.blhCreateAPlayerList(_aplayerListTa.value); 
	}
	this.blrDebug = function(b,d){d.innerHTML = _sDebug;_on_off_div(b,d);}
	
	this.blhCreateAPlayerList = function(txt){
		var r = '[aplayer autoplay="true"]\n';

		var se = "var o = " + txt;
		eval(se);
 
		var _nl = o.audioList;
		var _al = o.audioList;
		var _ll = o.lrcList;
		var _path = o.url;
		var _pic = o.pic1;
		var _title = o.title;
		var _artist = o.artist;

		for(var i = 0; i < _al.length ; i++){ 
			r += '\n[mp3 ';

			r += '\n title = "'; 
			r += _nl[i];
			r += '"';

			r += '\n artist = "'; 
			r += _artist;
			r += '"';
			 
			r += '\n url = "';
			r += _path;
			r += _al[i];
			r += '"';

			r += '\n lrc = "';
			r += _path;
			r += _ll[i];
			r += '"';

			r += '\n pic = "';
			r += _path;
			r += _pic;
			r += '"';
 

			r += '\n]\n [/mp3]\n';
		}

		r += '\n[/aplayer]'; 
		return r;
	}

	this.blhGetTxt = function(){
		var r = "";
		var href = _album.url;	
		function _getIssue (o) {
			r = o.body;
			_sDebug = r;
			_aplayerListTa.value = r; 			
		}
		w3.getHttpObject( href , _getIssue );
		return r;
	}
	this.blrGetData = function(b,d){
		if(!d.v){
			d.v = blo0.blDiv(d,d.id+"v4"+_album,"","green");
			_aplayerListTa = d.v.ta = blo0.blTextarea(d.v,d.v.id+"ta","ta","grey");
			d.v.ta.style.width = "100%";
			d.v.ta.style.height = "300px";
		} 
		var txt= _this.blhGetTxt(); 
	}
}
function _blAlbumClass(_v,_list)
{ 
	var _divAPlayerList = null;
	
	this.blhFun0 = function(_Div,_oAlbum,_x,_y,_w,_h,_color){
		var sFun = "blhFun0" + _oAlbum.title;
		var d = _Div;
		d.b = blo0.blBtn(d,d.id + "_btn" + sFun, "blhFun0" ,blColor[2]);
		d.b.onclick = function(_d, _album){
			return function(){
				if(!_d.v0){					
					blo0.blShowObj2Div(_divAPlayerList, new _blParseAlbumClass(_album));					 
				}	
				_on_off_div(this,_d.v0);
			}
		}(d,_oAlbum);		
	}
	this.blhFun1 = function(_Div,_oAlbum,_x,_y,_w,_h,_color){
		var d = _Div;
		d.b = blo0.blBtn(d,d.id + "_blhFun1",_oAlbum.title ,blGrey[0]);
		d.b.onclick = function(_d, _album){
			return function(){
				if(!_d.v){
					_d.v = blo0.blMDiv(document.body,_d.id + "_v",_album.title,_x,_y,_w,_h,_color);
					_d.v.d = blo0.blDiv(_d.v,_d.v.id + _album.title,_album.url ,"grey");
					blo0.blShowObj2Div(_d.v.d, _album);					 
				}	
				_on_off_div(this,_d.v);
			}
		}(d,_oAlbum);		
	}
	for(i in _list){
		var d = blo0.blDiv(_v,_v.id + "_album" + i,"",blColor[i]);
		this.blhFun0(d,_list[i],300 + 50*i,50,500,400,blColor[i]);
		this.blhFun1(d,_list[i],300 + 50*i,50,500,400,blColor[i]);
	}
	_divAPlayerList = blo0.blDiv(_v,_v.id + "_div_4_create_aplayerList","aplyerList:",blColor[4]);
}
function _blJobClass(p)
{ 
	this.v = "v0.0.251"; 
	this.blrShowList = function(b , d){
		
		if(!d.v){
			d.v = blo0.blMDiv(d,d.id + "_v","AlbumList:",111,111,500,400,"green");
			d.v.d = blo0.blDiv(d.v,d.v.id + "_d","d:",blGrey[1]);
			var href = "https://api.github.com/repos/littleflute/albums/issues";	
			function _loadIssues (o) {
				_blAlbumClass(d.v.d,o);
			}
			w3.getHttpObject( href , _loadIssues );
		}
		_on_off_div(b,d.v);
	}
	p.d	= blo0.blDiv(p,p.id+"d","d:",blGrey[1]);	
     	blo0.blShowObj2Div(p.d,this);
	
	this.blhInit = function(){
		bl$("blrShowList").click();
	}
}


function CXdMainFrame()
{
	this.v		= "v0.0.254 ";  
	var s = this.v;
		s += "<a target='_blank' href='https://github.com/littleflute/albums/edit/master/blApp.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " blApp.js*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='blApp.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " blApp.js ";
		s += "</a>"; 
	
	var d 	= blo0.blMDiv(document.body,"id_div_CXdMainFrame_ui",s,0,0,200,100,blGrey[2]); 
	 
	
	d.d2	= blo0.blDiv(d,d.id+"d2","d2:",blGrey[1]);	
	d.d2.b1 = blo0.blBtn(d.d2,d.d2.id+"b1","blJob",blGrey[0]);	
	d.d2.b1.onclick = function(_v){ 
		return function(){  
			if(!_v.ui) {
				_v.ui= blo0.blMDiv(_v, _v.id + "_ui","blJob",1,111,800,100,blGrey[1]);
				var _blj = new _blJobClass(_v.ui);
				_blj.blhInit();
			}
			_on_off_div(this,_v.ui);
		}
	}(d.d2);
	d.d2.b1.click();
}
function CXdAPP()
{
	var _xdMF = new CXdMainFrame;   
}
var gApp = new CXdAPP; 
