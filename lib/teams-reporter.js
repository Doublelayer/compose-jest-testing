module.exports = class JestFailureTeamsReporter {
  constructor(globalConfig, options) {
    this.globalConfig = globalConfig;
    this.options = options;
  }

  onTestResult(test, testResult, aggregatedResult) {
    console.log('onTestResult:');
    console.log('test: ', test);
    console.log('testResult: ', testResult);
    console.log('aggregatedResult: ', aggregatedResult);
  }

  onRunComplete(contexts, results) {
    console.log(contexts);
    results.testResults.forEach((result) => {
      console.log(result);
      result.testResults.forEach((test) => {
        if (test.status === 'failed') {
          console.log(test);
        }
      });
    });
  }
};
