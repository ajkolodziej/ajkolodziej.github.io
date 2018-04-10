if ('serviceWorker' in navigator) {
  
  navigator.serviceWorker.register('../../service-worker.js', {scope: './'})
  .then(function(reg) {
    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
} else {
    console.log('Service Worker is not supported in this browser.')
}
