class MyDetails{
    id:number;
    age:number;
    Num:number;
    constructor(id:number,age:number,Num:number){
        this.id=id;
        this.age=age;
        this.Num=Num;
    }
    detail(){
        document.write('ID is: ', this.id.toString(), '<br>')
        document.write('AGE is: ', this.age.toString(), '<br>')
        document.write('Phone number is: ', this.Num.toString())
    }
}