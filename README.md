# DISIntercomExample
Example that makes use of the DIS intercom PDUs from a web page.

HTML5 allows access to the microphone on desktops. So why not grab the audio,
stuff it into a DIS intercom PDU, and send it. Because the audio APIs expect
the html and javascript to be served up from a real http server, there's 
a nodejs http server in the root directory. To start it you should install
nodejs, then type

~~~~
npm install connect serve-static
node server.js
~~~~

This downloads the files necessary for nodejs to run the web server, then starts
it, using the server.js file. The server.js file in turn specifies that the content
will be served up on port 8282 from the content directory.

Makes use of the javascript implementation of DIS.

The W3C specification for media capture is here:

https://w3c.github.io/mediacapture-main/getusermedia.html

WebRTC is here:

https://webrtc.org/
