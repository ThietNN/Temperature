let C = function (c,f,k){
    this.c = c;
    f = (c * 1.8) + 32
    this.f = f;
    k = c + 273.15
    this.k = k;
    this.getc = function (){
        return this.c;
    }
    this.getf = function (){
        return this.f;
    }
    this.getk = function (){
        return this.k;
    }
    this.setc = function (){
        this.c = c;
    }
}
let temperature = new C(25);
let c = temperature.getc();
let f = temperature.getf();
let k = temperature.getk();
alert(c + " độ C, " + f + " độ f, " + k + " độ K.");
