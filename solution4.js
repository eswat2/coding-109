// — SOLUTION #4 (alternative using Promise.all)
// Log the response from each action in the order it was called. ie.
// Processed Action 1
// Processed Action 2
// ...
// Processed Action 5

function triggerActions(count) {
  // must call processAction
  const list = []
  for (let i = 0; i < count; i++) {
    list.push(new Promise(function(resolve, reject) {
      processAction(i + 1, function(data) { resolve(data) })
    }))
  }
  Promise.all(list).then(function(responses) {
    responses.map(function(response, t) {
      console.log(response)
    })
  })
}
// NOTE:  you can't change the implementation of processAction...
function processAction(i, callback) {
  setTimeout(function() {
    callback("Processed Action " + i);
  }, Math.random() * 1000);
}

triggerActions(5)
