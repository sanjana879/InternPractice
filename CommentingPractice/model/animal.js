export default class Animal{

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

export class Bird extends Animal{

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

