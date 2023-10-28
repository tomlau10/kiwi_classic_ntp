# Intro
As a long-time user of Kiwi Browser, I have always preferred the classic new tab page (ntp) homepage over the modern one. Recently, however, I encountered issues with the gnews section due to some CORS problems. Originally I wanted to simply patch it using a tampermonkey script, but no... unfortunately it cannot override pages with `chrome-search://*` :(

After researching possible solutions, I found that the only way to override the ntp and fix the issue is using a **Chrome extension**. While there are many ntp extensions available, I decided to create an extension based on the classic version that I love :)

## Major patches
- Updated code to the latest version from [kiwibrowser/src.next](https://github.com/kiwibrowser/src.next)
- Converted into a Chrome extension
- Used Kiwi Browser's proxied gnews API to bypass CORS issues
- Added Google's favicon API as fallback (`logos.kiwibrowser.com` has some nice high-res favicons, such as [GitHub](https://logos.kiwibrowser.com/github.com), that Google's API doesn't have... so I decided to keep Kiwi Browser's as the primary API)

## How to use
1. Download this repository as a zip file
1. Go to Kiwi Browser's extension settings and enable Developer Mode
1. Add the extension through the zip file
1. Change the homepage setting to **modern** (or set to **custom** with `chrome://newtab`)

---
# Original README

Copyright 2019 Geometry OU / Kiwi Browser

Licensed under https://creativecommons.org/licenses/by-nc-sa/4.0/


This is the New Tab Page of Kiwi Browser, open-source and free to use in non-commercial projects.


The New Tab Page is in two parts:
 - A list of most visited websites, ordered on a grid of tiles
 - A list of recent news


The main concept behind this New Tab Page is that a tile grid of the most visited websites is displayed on screen.
The resulting HTML is stored in a local cache (localStorage.cachedGrid).

Once the page is loaded, the pre-rendered version of the tile grid (localStorage.cachedGrid) is instantly displayed on screen (fake-bookmarks-grid) and then swapped with a dynamic / customizable grid rendered in JS (that supports drag and drop).


The list of tiles to be displayed is provided by an internal API: chrome.embeddedSearch.newTabPage.mostVisited (the most visited websites by the user).

If the user has manually added a website (or moved one of the tile), the list is provided by localStorage.storedItems instead of newTabPage.mostVisited.

If you need favicons, you can grab them from:
 - local: chrome-search://favicon or chrome-search://ntpicon/size/24@2x/https://cnn.com (local favicons)
or
 - from Google's server (https://s2.googleusercontent.com/s2/favicons?domain_url=cnn.com&alt=404&sz=32 - T&C of Google applies)
or
 - from Kiwi Browser's server (https://logos.kiwibrowser.com/cnn.com - No analytics, no logs, no identifier to send).

For security reasons, the new tab page should only establish connection to HTTPS servers.
CORS (loading requests from remote servers), XHR and CSP policies can be adapted if you need, feel free to ask on Discord (or open an issue).

You can directly test and develop the new tab page online by going with your favorite browser (Chrome or Kiwi Browser) on https://kiwibrowser.github.io/ntp/local_ntp.html (or on your own copy, by forking the repository or self-hosting the html file).

Have fun,
Arnaud.
