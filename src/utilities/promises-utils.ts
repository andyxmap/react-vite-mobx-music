export function MakeQueryablePromise(promise:any) {
    // Don't create a wrapper for promises that can already be queried.
    if (promise.isResolved) return promise;
    
    var isResolved = false;
    var isRejected = false;

    // Observe the promise, saving the fulfillment in a closure scope.
    var result = promise.then(
       function(v:any) { isResolved = true; return v; }, 
       function(e:any) { isRejected = true; throw e; });
    result.isFulfilled = function() { return isResolved || isRejected; };
    result.isResolved = function() { return isResolved; }
    result.isRejected = function() { return isRejected; }
    return result;
}