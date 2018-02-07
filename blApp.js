
function _blJobClass(p)
{ 
	this.v = "v0.0.53"; 

	this.blhInit = function(){
	}
}


function CXdMainFrame()
{

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

	this.v		= "v0.0.221 ";  
	var s = this.v;
		s += "<a target='_blank' href='https://github.com/littleflute/vc6/edit/master/XdHtml/2.html'"
		s += " style='color:blue;'";
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
	var d 	= blo0.blMDiv(document.body,"id_div_CXdMainFrame_ui",s,0,0,800,100,blGrey[2]); 
	 
	
	d.d2	= blo0.blDiv(d,d.id+"d2","d2:",blGrey[1]);	
	d.d2.b1 = blo0.blBtn(d.d2,d.d2.id+"b1","blJob",blGrey[0]);	
	d.d2.b1.onclick = function(_v){ 
		return function(){  
			if(!_v.ui) {
				_v.ui= blo0.blMDiv(_v, _v.id + "_ui","blJob",110,110,800,100,blGrey[1]);
				var _blj = new _blJobClass(_v.ui);
				_blj.blhInit();
			}
			_on_off_div(this,_v.ui);
		}
	}(d.d2)
}
function CXdAPP()
{
	var _xdMF = new CXdMainFrame;   
}
var gApp = new CXdAPP; 
