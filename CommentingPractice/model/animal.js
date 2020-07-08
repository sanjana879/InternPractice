class Animal{

    constructor(){
        var name;
        var group;
    }

    getName(){
        return name;
    }

    setName(tempName){
        name = tempName;
    }

    getGroup(){
        return group;
    }

    setGroup(tempGroup){
        group = tempGroup;
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
        return featherColor;
    }

    setFeatherColor(tempFeatherColor){
        featherColor = tempFeatherColor;
    }

    getWingSpan(){
        return wingSpan;
    }

    setFeatherColor(tempWingSpan){
        wingSpan = tempWingSpan;
    }

    getEggSize(){
        return eggSize;
    }

    setEggSize(tempEggSize){
        eggSize = tempEggSize;
    }
}