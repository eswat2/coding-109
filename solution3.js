// — SOLUTION #3 (using Promise + recursion)
// Log the response from each action in the order it was called. ie.
// Processed Action 1
// Processed Action 2
// ...
// Processed Action 5

function getOne(indx, count) {
  let result = new Promise(function(resolve, reject) {
    processAction(indx + 1, function(data) { resolve(data) })
  })
  result.then(function(data) {
    console.log(data)
    if (indx < count - 1) {
      getOne(indx + 1, count)
    }
  })
}

function triggerActions(count) {
  // must call processAction
  getOne(0, count)
}

function processAction(i, callback) {
  setTimeout(function() {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
}

triggerActions(5)

// NOTE:  add this to keep node running while it resolves...
setTimeout(function() { console.log('-- DONE') }, 5000)
