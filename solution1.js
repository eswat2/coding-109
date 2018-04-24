// — SOLUTION #1 (simple for loop + post order results)
// Log the response from each action in the order it was called. ie.
// Processed Action 1
// Processed Action 2
// ...
// Processed Action 5

function triggerActions(count) {
  // must call processAction
  let results = []
  for (let i = 0; i < count; i++) {
    processAction(i + 1, function(data) {
      results.push(data)
      if (results.length == count) {
        const list = results.sort()
        list.forEach(function(item) {
          console.log(item)
        })
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
