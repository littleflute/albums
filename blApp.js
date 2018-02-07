
function _blJobClass(p)
{ 
	this.v = "v0.0.113"; 
	this.blrShowList = function(blrSetB , blrSetV){
		
			function _loadIssues (o) {
				for(i in o){
					var b = blo0.blBtn ( blrSetV .v.d,blrSetV .v.d.id + "_API_" + i,"api"+i,blColor[i]); 
					b.onclick = function( _d , _txt, _i ){
						return function(){
							if(!this.v){
								this.v = blo0.blDiv( _d , this.id + "_v", "apiV_ " + _i, blGrey[2]); 													this.v.b = blo0.blBtn( this.v , this.v.id + "_btn", "run", "green"); 
								this.v.b.d = this.v;
								this.v.b.onclick = function(){
									var a = _txt;
									var b = a.split("api:");
									var c = " var f = " + b[1];
									eval(c);
									f(this,this.d);
									;
								};			
							}			
							_on_off_div(this,this.v);
						}
					}(blrSetV.v.d,o[i].body, i); 
 				}
			}
			w3.getHttpObject( href , _loadIssues );
	}
	p.d	= blo0.blDiv(p,p.id+"d","d:",blGrey[1]);	
     	blo0.blShowObj2Div(p.d,this);
	
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

	this.v		= "v0.0.222 ";  
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
	}(d.d2)
}
function CXdAPP()
{
	var _xdMF = new CXdMainFrame;   
}
var gApp = new CXdAPP; 
