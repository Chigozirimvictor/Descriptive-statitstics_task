class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
    mean() {
      return this.data.reduce((acc, val) => acc + val, 0) / this.data.length;
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
      if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    mode() {
      const frequencyMap = {};
      this.data.forEach((value) => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      });
      let maxFrequency = 0;
      let modes = [];
      for (const value in frequencyMap) {
        if (frequencyMap[value] > maxFrequency) {
          maxFrequency = frequencyMap[value];
          modes = [value];
        } else if (frequencyMap[value] === maxFrequency) {
          modes.push(value);
        }
      }
      return modes.length === Object.keys(frequencyMap).length ? [] : modes;
    }
  
    // Measures of Dispersion
    range() {
      return Math.max(...this.data) - Math.min(...this.data);
    }
  
    variance() {
      const mean = this.mean();
      const squaredDifferences = this.data.map((value) => (value - mean) ** 2);
      return squaredDifferences.reduce((acc, val) => acc + val, 0) / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    quartiles() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
      const lowerHalf = sortedData.slice(0, middle);
      const upperHalf = sortedData.slice(-middle);
      return [this.median(lowerHalf), this.median(), thigitgits.median(upperHalf)];
    }
  
    interquartileRange() {
      const quartiles = this.quartiles();
      return quartiles[2] - quartiles[0];
    }
  }
  
  // Example usage:
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const stats = new DescriptiveStatistics(data);
  
  console.log('Mean:', stats.mean());
  console.log('Median:', stats.median());
  console.log('Mode:', stats.mode());
  console.log('Range:', stats.range());
  console.log('Variance:', stats.variance());
  console.log('Standard Deviation:', stats.standardDeviation());
  console.log('Quartiles:', stats.quartiles());
  console.log('Interquartile Range:', stats.interquartileRange());