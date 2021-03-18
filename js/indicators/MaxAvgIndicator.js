class MaxAvgIndicator extends Indicator {
    constructor(name, units, decimals, maxValues, actualValues, tendencialValues, optimitzationValues) 
    {
        super(name, units, decimals);
        var arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
        this.maxValue = arrAvg(maxValues);
        this.actualValue = arrAvg(actualValues);
        this.tendencialValue = arrAvg(tendencialValues);
        this.optimitzationValue = arrAvg(optimitzationValues);
        this.extremValue = Math.max(this.actualValue, this.tendencialValue, this.optimitzationValue);
        this.factor = 1;
    }

    setFactor(factor) 
    {
        this.factor = factor;
    }

    optimitzationRelativeValue() 
    {
        return this.optimitzationValue / this.maxValue;
    }

    actualRelativeValue() 
    {
        return this.actualValue / this.maxValue;
    }

    tendentialRelativeValue() 
    {
        return this.tendencialValue / this.maxValue;
    }

    optimitzationHistogramValue()
    {
        return this.optimitzationValue / this.extremValue;
    }

    actualHistogramValue()
    {
        return this.actualValue / this.extremValue;
    }

    tendencialHistogramValue()
    {
        return this.tendencialValue / this.extremValue;
    }

    optimitzationAbsoluteValue() 
    {
        return this.optimitzationValue  * this.factor;
    }

    actualAbsoluteValue() 
    {
        return this.actualValue * this.factor;
    }

    tendencialAbsoluteValue()
    {
        return this.tendencialValue * this.factor;
    }
}