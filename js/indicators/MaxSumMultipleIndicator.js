class MaxSumMultipleIndicator {
    constructor(maxValues1, maxValues2, actualValues1, actualValues2, tendencialValues1, tendencialValues2, optimitzationValues1, optimitzationValues2) 
    {
        this.arrSum = arr => arr.reduce((a,b) => a + b, 0);
        this.maxValue1 = this.arrSum(maxValues1);
        this.maxValue2 = this.arrSum(maxValues2);
        this.actualValue1 = this.arrSum(actualValues1);
        this.actualValue2 = this.arrSum(actualValues2);
        this.tendencialValue1 = this.arrSum(tendencialValues1);
        this.tendencialValue2 = this.arrSum(tendencialValues2);
        this.optimitzationValue1 = this.arrSum(optimitzationValues1);
        this.optimitzationValue2 = this.arrSum(optimitzationValues2);
        this.extremValue = Math.max(this.actualValue1, this.tendencialValue1, this.optimitzationValue1);
        this.factor = 1;
    }
    
    setFactor(factor) 
    {
        this.factor = factor;
    }

    optimitzationRelativeValue() 
    {
        return (this.optimitzationValue1 / this.optimitzationValue2)  / (this.maxValue1 / this.maxValue2);
    }

    actualRelativeValue() 
    {
        return (this.actualValue1 / this.actualValue2) / (this.maxValue1 / this.maxValue2);
    }

    tendentialRelativeValue() 
    {
        return (this.tendencialValue1 / this.tendencialValue2) / (this.maxValue1 / this.maxValue2);
    }

    optimitzationHistogramValue()
    {
        return this.optimitzationValue1 / this.extremValue;
    }

    actualHistogramValue()
    {
        return this.actualValue1 / this.extremValue;
    }

    tendencialHistogramValue()
    {
        return this.tendencialValue1 / this.extremValue;
    }

    optimitzationAbsoluteValue() 
    {
        return (this.optimitzationValue1 / this.optimitzationValue2)  * this.factor;
    }

    actualAbsoluteValue() 
    {
        return (this.optimitzationValue1 / this.optimitzationValue2) * this.factor;
    }

    tendencialAbsoluteValue()
    {
        return (this.tendencialValue1 / this.tendencialValue2) * this.factor; 
    }
}