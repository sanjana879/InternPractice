class Animal{

    constructor(){
        var name;
        var group;
        var heterotroph;
    }

    getName(){
        return this.name;
    }

    setName(tempName){
        this.name = tempName;
    }

    getGroup(){
        return this.group;
    }

    setGroup(tempGroup){
        this.group = tempGroup;
    }

    getHeterotroph(){
        return heterotroph;
    }
}

class Bird extends Animal{

    constructor(){
        super();
        var featherColor;
        var wingSpan;
        var eggSize;
    }

    getFeatherColor(){
        return this.featherColor;
    }

    setFeatherColor(tempFeatherColor){
        this.featherColor = tempFeatherColor;
    }

    getWingSpan(){
        return this.wingSpan;
    }

    setWingSpan(tempWingSpan){
        this.wingSpan = tempWingSpan;
    }

    getEggSize(){
        return this.eggSize;
    }

    setEggSize(tempEggSize){
        this.eggSize = tempEggSize;
    }

    getHeterotroph(){
        return this.heterotroph;
    }

    setHeterotroph(tempHeterotroph){
        this.heterotroph = tempHeterotroph;
    }
}

let a = new Animal();
a.setName("Rooster");
a.setGroup("Bird");

let b = new Bird();
b.setName("Eagle");
b.setGroup("Bird");
b.setFeatherColor("Brown/White");
b.setWingSpan("2 meters");
b.setEggSize("Large");
b.setHeterotroph("Carnivore");

console.log(a.getName());
console.log(a.getGroup());

console.log("The " + b.getName() + " is a " + b.getFeatherColor() + " " + b.getGroup() + " and a(n) " + b.getHeterotroph());
console.log("With a wingspan of " + b.getWingSpan() + " and lays " + b.getEggSize() + " eggs.");