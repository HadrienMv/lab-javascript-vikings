// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage
        if(this.health>0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage
        if(this.health>0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let saxonAttackedIndex = Math.floor(Math.random() * (this.saxonArmy.length-1))
        let vikingAttackerIndex = Math.floor(Math.random() * (this.vikingArmy.length-1))
        
        let resultFight = this.saxonArmy[saxonAttackedIndex].receiveDamage(this.vikingArmy[vikingAttackerIndex].strength)

        if(this.saxonArmy[saxonAttackedIndex].health <1) {
            this.saxonArmy.splice(saxonAttackedIndex,1)
            return resultFight
        }
        else {
            return resultFight
        }
    }

    saxonAttack() {
        let vikingAttackedIndex = Math.floor(Math.random() * (this.vikingArmy.length-1))
        let saxonAttackerIndex = Math.floor(Math.random() * (this.saxonArmy.length-1))
        
        let resultFight = this.vikingArmy[vikingAttackedIndex].receiveDamage(this.saxonArmy[saxonAttackerIndex].strength)

        if(this.vikingArmy[vikingAttackedIndex].health <1) {
            this.vikingArmy.splice(vikingAttackedIndex,1)
            return resultFight
        }
        else {
            return resultFight
        }
    }

    showStatus() {
        if(this.saxonArmy.length == 0) {
            return `Vikings have won the war of the century!`
        }
        else if(this.vikingArmy.length == 0) {
            return `Saxons have fought for their lives and survived another day...`
        }
        else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}