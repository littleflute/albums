

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

function _blJobClass(p)
{ 
	this.v = "v0.0.131"; 
	this.blrShowList = function(b , d){
		
		if(!d.v){
			d.v = blo0.blMDiv(d,d.id + "_v","AlbumList:",111,111,500,400,blGrey[0]);
			d.v.d = blo0.blDiv(d.v,d.v.id + "_d","d:",blGrey[1]);
			var href = "https://api.github.com/repos/littleflute/albums/issues";	
			function _loadIssues (o) {
				d.v.d.innerHTML = o.length;
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

	this.v		= "v0.0.231 ";  
	var s = this.v;
		s += "<a target='_blank' href='https://github.com/littleflute/albums/edit/master/blApp.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " blApp.js*  ";
		s += "</a>"; 
		s += "<a href='blApp.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " blApp.js ";
		s += "</a>"; 
	
	var d 	= blo0.blMDiv(document.body,"id_div_CXdMainFrame_ui",s,0,0,800,100,blGrey[2]); 
	 
	
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
