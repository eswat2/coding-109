// -- SOLUTION #5 (using Promise + ordered results + responsive)
// Log the response from each action in the order it was called. ie.
// Processed Action 1
// Processed Action 2
// ...
// Processed Action 5

function triggerActions(count) {
  // must call processAction
  const output = {}
  output.index = 0
  for (let i = 0; i < count; i++) {
    let result = new Promise(function(resolve, reject) {
      processAction(i + 1, function(data) { resolve({ data, i }) })
    })
    result.then(function(data) {
      console.log(data.i)
      output[data.i] = data.data
      while (output.hasOwnProperty(output.index)) {
        console.log(output[output.index])
        output.index += 1
      }
    })
  }
}

function processAction(i, callback) {
  setTimeout(function() {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
}

triggerActions(5)
