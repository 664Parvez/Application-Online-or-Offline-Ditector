window.addEventListener('online', () => {
    let online = document.getElementById('online')
    setInterval (() => {
        online.style.display = 'none'
    }, 5000)
    online.style.display = 'block'
})

window.addEventListener('offline', () => {
    let offline = document.getElementById('offline')
    setInterval (() => {
        offline.style.display = 'none'
    }, 5000)
    offline.style.display = 'block'
}) 


