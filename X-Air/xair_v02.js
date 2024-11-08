// Subscribe to updates every 9 seconds
setInterval(()=>{
    send('172.29.1.24', 10024, '/xremote') // XAir Mixer
}, 9000)

module.exports = {
    init: function() {
        console.log("X-Air custom module running...")
    }

}