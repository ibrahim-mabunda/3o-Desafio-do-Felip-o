class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'atacou';
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Hero('Kayanne', 20, 'mago');
heroi1.atacar(); 

const heroi2 = new Hero('Nessim', 17, 'guerreiro');
heroi2.atacar(); 

const heroi3 = new Hero('Angelo', 23, 'monge');
heroi3.atacar(); 

const heroi4 = new Hero('Muhammad', 10, 'ninja');
heroi4.atacar(); 
