class MetaSalario{

    constructor(valor1, valor2){
        this.meta = valor1;
        this.salario = valor2;
        
        
    }

    calculoAumento(){
        let meta = (this.meta)
        if (meta >= 2000){
            
            return ("Seu salário foi aumentado. Agora você ganha R$" + (this.salario * 1.10))
        }else{
            return ("Seu salário não foi aumentado. Você continua ganhando R$" + (this.salario))
        }
    };

}

var metaSalario = new MetaSalario(2500, 5000);

metaSalario.calculoAumento();
console.log (metaSalario.calculoAumento());