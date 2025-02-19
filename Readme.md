# Projecto de Heróis 🦸‍♂️🦸‍♀️

## Descrição do Código

Este projecto define uma classe **Hero** que representa um herói com propriedades e métodos específicos. Vamos explorar o código em detalhes:

### Classe Hero

A classe **Hero** é definida com três propriedades principais:
- **nome**: O nome do herói.
- **idade**: A idade do herói.
- **tipo**: O tipo de herói (por exemplo, mago, guerreiro, monge, ninja).

#### Constructor

O constructor da classe inicializa essas propriedades:

```javascript
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // ...código existente...
}
```

#### Método de Atacar

O método de **atacar** define o comportamento de ataque do herói com base no seu tipo. Aqui está uma tabela que mostra os diferentes tipos de heróis e seus ataques correspondentes:

| Tipo      | Ataque               |
|-----------|----------------------|
| mago      |  magia           |
| guerreiro |  espada          |
| monge     |  artes marciais  |
| ninja     |  shuriken        |
| *outros*  | atacou               |

O método usa um `switch` para determinar o ataque correcto e imprime uma mensagem no console:

```javascript
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
```

### Exemplo de Uso

Aqui estão alguns exemplos de como criar instâncias da classe **Hero** e chamar o método **atacar**:

```javascript
const heroi1 = new Hero('Amando', 23, 'guerreiro');
heroi1.atacar(); // o guerreiro atacou usando espada

const heroi2 = new Hero('Felix', 28, 'mago');
heroi2.atacar(); // o mago atacou usando magia
```

### Conclusão

Este código é uma implementação simples e elegante de uma classe de heróis com diferentes tipos e comportamentos de ataque. É fácil de entender e expandir para incluir mais tipos de heróis e ataques. 🚀
