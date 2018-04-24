// -- SOLUTION #2 (using Promise + unordered results)
// Log the response from each action in the order it was called. ie.
// Processed Action 1
// Processed Action 2
// ...
// Processed Action 5

function triggerActions(count) {
  // must call processAction
  for (let i = 0; i < count; i++) {
    let result = new Promise(function(resolve, reject) {
      processAction(i + 1, function(data) { resolve(data) })
    })
    result.then(function(data) { console.log(data) })
  }
}

function processAction(i, callback) {
  setTimeout(function() {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
}

triggerActions(5)
