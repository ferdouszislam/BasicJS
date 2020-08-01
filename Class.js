class Character {

    constructor(name, age, isGood){

        this.name = name;
        
        this.age = age;
        
        this.isGood = isGood;

    }

    isCharacterGood() {
        return this.isGood;
    }


}

module.exports = Character; 