function Tab(){
    this.init()
}
Tab.prototype = {
    constructor: Tab,
    init: function(){
        this.tabBtn=document.getElementsByTagName('span') 
        this.content=document.getElementsByTagName('li')
        this.bind()
    },
    bind: function(){
        var _this = this
        for(var i=0;i<this.tabBtn.length;i++){
            _this.tabBtn[i].onclick = function(target){
                for(j=0;j<_this.tabBtn.length;j++){
                    if(_this.tabBtn[j]==target){
                        _this.tabBtn[j].classList.add('active')
                        _this.content[j].classList.add('show')
                    }else{
                        _this.tabBtn[j].classList.remove('active')
                        _this.content[j].classList.remove('show')
                    }
                }
            }
        }
    }
}
var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);