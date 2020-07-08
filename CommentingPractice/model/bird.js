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

    setFeatherColor(tempEggSize){
        eggSize = tempEggSize;
    }
}