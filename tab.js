function Tab(node){
    this.node=node
    this.init()
}
Tab.prototype = {
    constructor: Tab,
    init: function(){
        this.tabBtn=this.node.querySelectorAll('.tab-name>span') 
        this.content=this.node.querySelectorAll('.tab-content>li')
        this.bind()
    },
    bind: function(){
        var _this = this
        for(var i=0;i<this.tabBtn.length;i++){
            var index = i
            _this.tabBtn[i].onclick = function(e){
                for(j=0;j<_this.tabBtn.length;j++){
                    if(_this.tabBtn[j]==e.target){
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