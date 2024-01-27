class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
    mean() {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      return sum / this.data.length;
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
      this.data.forEach(value => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      });
      let mode;
      let maxFrequency = 0;
      for (const value in frequencyMap) {
        if (frequencyMap[value] > maxFrequency) {
          mode = Number(value);
          maxFrequency = frequencyMap[value];
        }
      }
      return mode;
    }
  
    // Measures of Dispersion
    range() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    variance() {
      const dataMean = this.mean();
      const squaredDifferences = this.data.map(value => Math.pow(value - dataMean, 2));
      const sumSquaredDiff = squaredDifferences.reduce((acc, val) => acc + val, 0);
      return sumSquaredDiff / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    // Quartiles
    quartiles() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const q1 = sortedData[Math.floor(sortedData.length * 0.25)];
      const q2 = sortedData[Math.floor(sortedData.length * 0.5)];
      const q3 = sortedData[Math.floor(sortedData.length * 0.75)];
      return { q1, q2, q3 };
    }
  }
  
  // Example usage:
  const data = [5, 7, 8, 2, 3, 10, 7, 7];
  const stats = new DescriptiveStatistics(data);
  
  console.log("Mean:", stats.mean());
  console.log("Median:", stats.median());
  console.log("Mode:", stats.mode());
  console.log("Range:", stats.range());
  console.log("Variance:", stats.variance());
  console.log("Standard Deviation:", stats.standardDeviation());
  console.log("Quartiles:", stats.quartiles());
  