

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('pwa/serviceWorker.js')
        .then((reg) => {
            console.log('service worker had installed', reg);
        })
}

