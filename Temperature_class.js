class C{
    constructor(c) {
    this.c = c;
}
    getc(){
        return this.c;
    }
    getf(){
        return (this.c *18) +32;
    }
    getk(){
        return this.c + 273.15;
    }
}

let temperature = new C(25);
alert(temperature.getc() + " độ C, " + temperature.getf() + " độ f, " + temperature.getk() + " độ K.");