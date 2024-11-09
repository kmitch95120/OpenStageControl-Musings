# Behringer X-Air Digital Mixer Control

## Background

My first experience with using OSC ([Open Sound Control](https://ccrma.stanford.edu/groups/osc)) was with a [Behringer X-Air](https://www.behringer.com/series.html?category=R-BEHRINGER-XAIRSERIES) Digital Audio Mixer.What I was trying to do was create a simple UI so a theatre tech director could load saved snapshots (i.e. mixer settings) during rehearsals without a FoH engineer being there.

## Implementation

### Modularization

My plan is to make this UI as modular as possible.

The first pass (v01) is only a single channel strip with the channel number (i.e. 15) hardcoded into the OSC messages. The next iteration will be to, ~~hopefuly~~, use a variable to assign the channel number to the channel strip so it can be duplicated with the only change being that channel number in the variable.  There's also no styling for this version. In other words, no CSS making things look pretty.

The next step (v02) uses a variable defined in the containing panel instead of the hardcoded channel number. This is shown with two channel strips for channels 15 and 16. Note that the variables property of the panel is where the channel number is set. The panel can now be copied with the ID+1 method and the only change needed is the 'chan' variable in the panel. Again, no CSS styling in this version. That will be in the next iteration.

### Two-Way Messaging via subscription

In order to receive OSC update messages from an X-Air mixer, the application must subscribe to updates and renew that subscription every 10 seconds or less.  This is done in an O-S-C custom module using the setInterval() function.

xair.js:

```javascript
setInterval(()=>{
    send('172.29.1.24', 10024, '/xremote') // XAir Mixer
}, 9000)
```

In my case, 172.29.1.24 is the IP address of my mixer. The port MUST be 10024, since that is the X-Air OSC listening port and cannot be changed.  Just to be safe, I chose to renew every 9000ms (9 seconds).

The full OSC parameter list for the X-Air mixers can be found [here](https://behringer.world/wiki/doku.php?id=x-air_osc).
