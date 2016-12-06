# DISIntercomExample
Example that makes use of the DIS intercom PDUs from a web page. This is a non-working
work in progress.

HTML5 allows access to the microphone on desktops. So why not grab the audio,
stuff it into a DIS intercom PDU, and send it? Likewise receive DIS audio and
play it on the desktop speakers. It's a cheap and easy way to 
get web-based interoperability with the DIS intercom PDUs with no extra hardware. 
The web page can connect to a web server via websockets, and the web server can 
be connected to a conventional ethernet TCP/IP network interface. This all means
that web clients should be able to interoperate with existing DIS intercom applications.

## Implementation Notes

The W3C audio APIs expect the html and javascript to be served up from a real http server,
so for development purposes I've included a nodejs static web server in the distribution.
Install nodejs from https://nodejs.org , then type

~~~~
npm install connect serve-static
node server.js
~~~~

This downloads the files necessary for nodejs to run a web server, then starts
it. The server.js file is the implementation of the web server. The html and
javascript files are served from the 'content' directory on port 8282. Connect
to the web server at http://localhost:8282.

This application makes use of the javascript implementation of DIS, available at
http://github.com/open-dis/open-dis/javascript . The files are already present
in the content directory.

The W3C specification for media capture is here:

https://w3c.github.io/mediacapture-main/getusermedia.html

WebRTC is here:

https://webrtc.org/
