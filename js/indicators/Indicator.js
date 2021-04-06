
class Indicator 
{
    constructor(name, units, decimals) {
        this.name = name;
        this.units = units;
        this.decimals = decimals;
    }

    getName() {
        return this.name;
    }

    getUnits() {
        return this.units;
    }

    getDecimals() {
        return this.decimals;
    }
}