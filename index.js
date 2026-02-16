class Heroi {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attackType(type) {
        let attackType
        if(type == "mago") {
            attackType = "magia"
        }else if(type == "guerreiro") {
            attackType = "espada"
        }else if(type == "monge") {
            attackType = "artes marciais"
        }else {
            attackType = "shuriken"
        }
        return attackType
    }

    attack() {
        let type = this.type
        let attackType = this.attackType(type)
        console.log("O héroi " + this.name + " que é um " + type + " atacou usando " + attackType)
    }
}

let heroi1 = new Heroi("Joao", 21, "mago")

heroi1.attack()