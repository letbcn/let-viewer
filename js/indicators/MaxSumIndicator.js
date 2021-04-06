
class MaxSumIndicator extends Indicator {
    constructor(name, units, decimals, maxValues, actualValues, tendencialValues, optimitzationValues) 
    {
        super(name, units, decimals);
        this.arrSum = arr => arr.reduce((a,b) => a + b, 0);
        this.maxValue = arrSum(maxValues);
        this.actualValue = arrSum(actualValues);
        this.tendencialValue = arrSum(tendencialValues);
        this.optimitzationValue = arrSum(optimitzationValues);
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