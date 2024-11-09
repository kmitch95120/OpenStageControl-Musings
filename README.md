# OpenStageControl-Musings

This is a place for me to share some things I'm doing or have done with [Open Stage Control](https://openstagecontrol.ammd.net). I was recently introduced to Open Stage Control or O-S-C going forward; not to be confused with OSC [Open Sound Control](https://ccrma.stanford.edu/groups/osc).

O-S-C is server-based so it runs on a centralized computer and presents a client UI interface via a web browser. This is intriguing to me since I already have an always-on server in my show control network. Currently that is a [Raspberry Pi 400](https://www.raspberrypi.com/products/raspberry-pi-400/). Primarily that server runs [Node-RED](https://nodered.org/) and takes care of a number of protocol conversion and bridging tasks. More on that later.

Something else that is intriguing is the fact that [JavaScript](https://www.w3schools.com/js/) is the scripting language used and the UI 'widgets' can be styled with [HTML](https://www.w3schools.com/html/) and [CSS](https://www.w3schools.com/css/). These are all on my learning ToDo list, so that's also a motivating factor.

For the near-term, I'm using the Mac app version of O-S-C since it includes the Server, Launcher, and Client in a nice, self-contained package. Long-term I'll be running under [node.js](https://nodejs.org/) on the Pi400. My plan is to use [Fully Kiosk Browser](https://www.fully-kiosk.com/#get-kiosk-apps) on one or more Android tablets.

## First Project [[X-Air](X-Air/README.md)]

Since I'm already very familiar with the OSC commands used to control [Behringer X-Air](https://www.behringer.com/series.html?category=R-BEHRINGER-XAIRSERIES) digital mixers, I decided to build a simple channel strip for controlling an X-Air channel.
