class Former{

    constructor(){
        this.avatabel();
        

    }

    avatabel(){
        $('.table1').hide();
        $('.box1').click(()=>{
            $('.table1').show().slideDown(1000);
        });
    }

}

let former = new Former();