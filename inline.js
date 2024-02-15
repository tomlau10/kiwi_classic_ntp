window.chrome.embeddedSearch = { newTabPage: {} }

// inline scripts originated in local_ntp.html
if (window.chrome.embeddedSearch.newTabPage.isIncognito) document.getElementsByTagName('html')[0].style.backgroundColor = 'black';

if (window.chrome.embeddedSearch.newTabPage.isIncognito) document.body.style.backgroundColor = 'black';

function replaceInnerHTML(oldDiv, html) {
  var newDiv = oldDiv.cloneNode(false);
  newDiv.innerHTML = html;
  oldDiv.parentNode.replaceChild(newDiv, oldDiv);
};

function preconnectTo(url) {
  // let's not fb know that we started the browser
  if (url.includes("facebook"))
    return;
  var hint = document.createElement("link");
  hint.rel = "preconnect";
  hint.href = url;
  document.head.appendChild(hint);
}

function changeThemeColor(targetColor) {
  var metaThemeColor = document.querySelector("meta[name=theme-color]");
  metaThemeColor.setAttribute("content", targetColor);
  document.getElementById('ntpOverlay').style.backgroundColor = targetColor;
}

function goToPage2() {
  document.getElementById('ntpSlide1').style.display = 'none';
  document.getElementById('ntpSlide2').style.display = 'block';
  document.getElementById('centeredBlock').style.backgroundColor = '#282828';
  changeThemeColor('#000');
}

var locales = {};
locales['English | Australia'] = '?hl=en-AU&gl=AU&ceid=AU:en';
locales['English | Botswana'] = '?hl=en-BW&gl=BW&ceid=BW:en';
locales['English | Canada'] = '?hl=en-CA&gl=CA&ceid=CA:en';
locales['English | Ethiopia'] = '?hl=en-ET&gl=ET&ceid=ET:en';
locales['English | Ghana'] = '?hl=en-GH&gl=GH&ceid=GH:en';
locales['English | India'] = '?hl=en-IN&gl=IN&ceid=IN:en';
locales['English | Indonesia'] = '?hl=en-ID&gl=ID&ceid=ID:en';
locales['English | Ireland'] = '?hl=en-IE&gl=IE&ceid=IE:en';
locales['English | Israel'] = '?hl=en-IL&gl=IL&ceid=IL:en';
locales['English | Kenya'] = '?hl=en-KE&gl=KE&ceid=KE:en';
locales['English | Latvia'] = '?hl=en-LV&gl=LV&ceid=LV:en';
locales['English | Malaysia'] = '?hl=en-MY&gl=MY&ceid=MY:en';
locales['English | Namibia'] = '?hl=en-NA&gl=NA&ceid=NA:en';
locales['English | New Zealand'] = '?hl=en-NZ&gl=NZ&ceid=NZ:en';
locales['English | Nigeria'] = '?hl=en-NG&gl=NG&ceid=NG:en';
locales['English | Pakistan'] = '?hl=en-PK&gl=PK&ceid=PK:en';
locales['English | Philippines'] = '?hl=en-PH&gl=PH&ceid=PH:en';
locales['English | Singapore'] = '?hl=en-SG&gl=SG&ceid=SG:en';
locales['English | South Africa'] = '?hl=en-ZA&gl=ZA&ceid=ZA:en';
locales['English | Tanzania'] = '?hl=en-TZ&gl=TZ&ceid=TZ:en';
locales['English | Uganda'] = '?hl=en-UG&gl=UG&ceid=UG:en';
locales['English | United Kingdom'] = '?hl=en-GB&gl=GB&ceid=GB:en';
locales['English | United States'] = '?hl=en-US&gl=US&ceid=US:en';
locales['English | Zimbabwe'] = '?hl=en-ZW&gl=ZW&ceid=ZW:en';
locales['Bahasa Indonesia | Indonesia'] = '?hl=id&gl=ID&ceid=ID%3Aid';
locales['Čeština | Česko'] = '?hl=cs&gl=CZ&ceid=CZ%3Acs';
locales['Deutsch | Deutschland'] = '?hl=de&gl=DE&ceid=DE%3Ade';
locales['Deutsch | Österreich'] = '?hl=de&gl=AT&ceid=AT%3Ade';
locales['Deutsch | Schweiz'] = '?hl=de&gl=CH&ceid=CH%3Ade';
locales['Español | Argentina'] = '?hl=es-419&gl=AR&ceid=AR%3Aes-419';
locales['Español | Chile'] = '?hl=es-419&gl=CL&ceid=CL%3Aes-419';
locales['Español | Colombia'] = '?hl=es-419&gl=CO&ceid=CO%3Aes-419';
locales['Español | Cuba'] = '?hl=es-419&gl=CU&ceid=CU%3Aes-419';
locales['Español | Estados Unidos'] = '?hl=es-419&gl=US&ceid=US%3Aes-419';
locales['Español | México'] = '?hl=es-419&gl=MX&ceid=MX%3Aes-419';
locales['Español | Perú'] = '?hl=es-419&gl=PE&ceid=PE%3Aes-419';
locales['Español | Venezuela'] = '?hl=es-419&gl=VE&ceid=VE%3Aes-419';
locales['Français | Belgique'] = '?hl=fr&gl=BE&ceid=BE%3Afr';
locales['Français | Canada'] = '?hl=fr-CA&gl=CA&ceid=CA:fr';
locales['Français | France'] = '?hl=fr&gl=FR&ceid=FR%3Afr';
locales['Français | Maroc'] = '?hl=fr&gl=MA&ceid=MA%3Afr';
locales['Français | Sénégal'] = '?hl=fr&gl=SN&ceid=SN%3Afr';
locales['Français | Suisse'] = '?hl=fr&gl=CH&ceid=CH%3Afr';
locales['Italiano | Italia'] = '?hl=it&gl=IT&ceid=IT%3Ait';
locales['Latviešu | Latvija'] = '?hl=lv&gl=LV&ceid=LV%3Alv';
locales['Lietuvių | Lietuva'] = '?hl=lt&gl=LT&ceid=LT%3Alt';
locales['Magyar | Magyarország'] = '?hl=hu&gl=HU&ceid=HU%3Ahu';
locales['Nederlands | België'] = '?hl=nl&gl=BE&ceid=BE%3Anl';
locales['Nederlands | Nederland'] = '?hl=nl&gl=NL&ceid=NL%3Anl';
locales['Norsk | Norge'] = '?hl=no&gl=NO&ceid=NO%3Ano';
locales['Polski | Polska'] = '?hl=pl&gl=PL&ceid=PL%3Apl';
locales['Português | Brasil'] = '?hl=pt-BR&gl=BR&ceid=BR%3Apt-419';
locales['Português | Portugal'] = '?hl=pt-PT&gl=PT&ceid=PT%3Apt-150';
locales['Română | România'] = '?hl=ro&gl=RO&ceid=RO%3Aro';
locales['Slovenčina | Slovensko'] = '?hl=sk&gl=SK&ceid=SK%3Ask';
locales['Slovenščina | Slovenija'] = '?hl=sl&gl=SI&ceid=SI%3Asl';
locales['Svenska | Sverige'] = '?hl=sv&gl=SE&ceid=SE%3Asv';
locales['Tiếng Việt | Việt Nam'] = '?hl=vi&gl=VN&ceid=VN%3Avi';
locales['Türkçe | Türkiye'] = '?hl=tr&gl=TR&ceid=TR%3Atr';
locales['Ελληνικά | Ελλάδα'] = '?hl=el&gl=GR&ceid=GR%3Ael';
locales['Български | България'] = '?hl=bg&gl=BG&ceid=BG%3Abg';
locales['Русский | Россия'] = '?hl=ru&gl=RU&ceid=RU%3Aru';
locales['Русский | Украина'] = '?hl=ru&gl=UA&ceid=UA%3Aru';
locales['Српски | Србија'] = '?hl=sr&gl=RS&ceid=RS%3Asr';
locales['Українська | Україна'] = '?hl=uk&gl=UA&ceid=UA%3Auk';
locales['עברית | ישראל'] = '?hl=he&gl=IL&ceid=IL%3Ahe';
locales['العربية | الإمارات العربية المتحدة'] = '?hl=ar&gl=AE&ceid=AE%3Aar';
locales['العربية | المملكة العربية السعودية'] = '?hl=ar&gl=SA&ceid=SA%3Aar';
locales['العربية | لبنان'] = '?hl=ar&gl=LB&ceid=LB%3Aar';
locales['العربية | مصر'] = '?hl=ar&gl=EG&ceid=EG%3Aar';
locales['मराठी | भारत'] = '?hl=mr&gl=IN&ceid=IN%3Amr';
locales['हिन्दी | भारत'] = '?hl=hi&gl=IN&ceid=IN%3Ahi';
locales['বাংলা | বাংলাদেশ'] = '?hl=bn&gl=BD&ceid=BD%3Abn';
locales['தமிழ் | இந்தியா'] = '?hl=ta&gl=IN&ceid=IN%3Ata';
locales['മലയാളം | ഇന്ത്യ'] = '?hl=ml&gl=IN&ceid=IN%3Aml';
locales['తెలుగు | భారతదేశం'] = '?hl=te&gl=IN&ceid=IN%3Ate';
locales['ไทย | ไทย'] = '?hl=th&gl=TH&ceid=TH%3Ath';
locales['中文 | 中国'] = '?hl=zh-CN&gl=CN&ceid=CN:zh-Hans';
locales['中文 | 台灣'] = '?hl=zh-TW&gl=TW&ceid=TW%3Azh-Hant';
locales['中文 | 香港'] = '?hl=zh-HK&gl=HK&ceid=HK%3Azh-Hant';
locales['日本語 | 日本'] = '?hl=ja&gl=JP&ceid=JP%3Aja';
locales['한국어 | 대한민국'] = '?hl=ko&gl=KR&ceid=KR%3Ako';

function locale_to_readabletext(string) {
  string = string.replace('%3A', ':');
  for (var locale in locales) {
    if (locales[locale].replace('%3A', ':') == string)
      return locale;
  }
  return null;
}

var news_are_already_onscreen = false;
var instant_grid_done = false;
function instant_grid() {
  instant_grid_done = true;
  //  console.log('Calling instant grid generation');
  if (typeof localStorage.cachedGrid != "undefined") {
    replaceInnerHTML(document.getElementById('fake-bookmarks-grid'), localStorage.cachedGrid);
    document.getElementById('fake-bookmarks-grid').style.cssText = localStorage.cachedGridStyle;
    document.getElementById('fake-bookmarks-grid').style.display = 'block';
    document.getElementById('add-button-spacer').style.display = 'none';
  }
}

if (window.chrome.embeddedSearch.newTabPage.isIncognito) {
  document.body.style.backgroundColor = 'black';
  document.getElementById('incognito').style.display = 'block';
} else {
  try {
    instant_grid();
    window.setTimeout(function () { if (!instant_grid_done) instant_grid(); }, 1);
  }
  catch (err) {
    console.log("Instant init failed, retrying later");
  }
}

function timeago(a) {
  var result = timeago_format(a);
  if (result[0] > 1)
    return result[0] + " " + result[1] + "s ago";
  return result[0] + " " + result[1] + " ago";
}

function timeago_format(a) {
  var b = Math.floor((new Date() - (a * 1000)) / 1000);
  var c = b / 31536000;
  if (c > 1) {
    return [Math.abs(Math.floor(c)), "year"]
  }
  c = b / 2592000;
  if (c > 1) {
    return [Math.abs(Math.floor(c)), "month"]
  }
  c = b / 86400;
  if (c > 1) {
    return [Math.abs(Math.floor(c)), "day"]
  }
  c = b / 3600;
  if (c > 1) {
    return [Math.abs(Math.floor(c)), "hour"]
  }
  c = b / 60;
  if (c > 1) {
    return [Math.abs(Math.floor(c)), "minute"]
  }
  return [Math.abs(Math.floor(b)), "second"]
}

var must_clear_news = false;
function render_news_loading() {
  must_clear_news = true;
  document.getElementById('news').innerHTML = '<div style="clear:both;text-align:center;width: 100%"><br />&nbsp;<br /><div class="lds-dual-ring"></div></div>';
}

function add_gnews(is_primary, title, news_time, source, source_logo, link, image) {
  var innerDiv = document.createElement('div');
  // never display images
  if (!image)
    image = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  var creationTime = news_time;
  var timeagoInstance = timeago();
  innerDiv.className = 'newsItem';
  innerDiv.innerHTML = '<div style="float: right; height: 128px;"><img crossorigin="anonymous" src="' + image + '" class="newsImage" /></div>'
    + '<div style="position: relative; left: 10px; font-size: medium">'
    + '<span class="newsAttribution"><img src="' + source_logo + '" onerror="this.style.display=\'none\'" style="max-height: 12px;" />&nbsp;&nbsp;<a style="color: #333" href="' + link + '">' + source + '</a></span>'
    + '<div class="newsTitle"><a style="color: #333" href="' + link + '">'
    + title + '</a></div>'
    + '<span class="newsTime">'
    + timeago(creationTime) + '</span></a></div>';
  innerDiv.querySelector("img.newsImage").addEventListener("load", (e) => {
    let img = e.target;
    img.style.opacity = 1;
    img.style.visibility = 'visible';
  });
  document.getElementById('news').appendChild(innerDiv);
  var spacer = document.createElement('div');
  spacer.style.clear = 'both';
  innerDiv.appendChild(spacer);
}

var has_valid_foryou_entries = false;
var last_offset_rendered = 0;
function render_gnews(answer, start_offset, n) {
  if (must_clear_news) {
    must_clear_news = false;
    document.getElementById('news').innerHTML = '';
  }
  let parser = new DOMParser();
  const doc = parser.parseFromString(answer, 'text/html');
  const articles = doc.querySelectorAll('article');
  //          console.log(articles);
  var added = 0;
  for (var i = start_offset; i < articles.length && added < n; i++, last_offset_rendered++) {
    var item = articles[i];

    // Extracting the link
    const oldLinkElement = item.querySelector('a[href^="./article"]');
    const newLinkElement = item.querySelector('a.WwrzSb');
    const linkElement = oldLinkElement || newLinkElement;
    const link = linkElement ? linkElement.href.replace('./', 'https://news.google.com/').replace(chrome.runtime.getURL(""), 'https://news.google.com/') : false;

    // Extracting the image
    const oldImageElement = item.querySelector('figure img');
    const newImageElement = item.querySelector('div.oovtQ img.qEdqNd');
    const imageElement = oldImageElement || newImageElement;
    const image = imageElement ? imageElement.src.replace(chrome.runtime.getURL(""), 'https://news.google.com/') : false;

    // Extracting title
    const oldTitleElement = item.querySelector('h4');
    const newTitleElement = item.querySelector('h4.gPFEn') || item.querySelector('a.gPFEn');
    const titleElement = oldTitleElement || newTitleElement;
    const title = titleElement ? titleElement.innerText : false;

    // Extracting source name
    const oldSourceElement = item.querySelector('div.wsLqz');
    const newSourceElement = item.querySelector('div.vr1PYe');
    const sourceElement = oldSourceElement || newSourceElement;
    const sourceName = sourceElement ? sourceElement.innerText : false;
    const source = sourceName;

    // Extracting source image
    const oldSourceImageElement = item.querySelector('div.wsLqz > img');
    const newSourceImageElement = item.querySelector('div.oovtQ img.qEdqNd');
    const sourceImageElement = oldSourceImageElement || newSourceImageElement;
    const sourceImage = sourceImageElement ? sourceImageElement.src : false;
    const source_image = sourceImage;

    // Extracting time and datetime
    const timeElement = item.querySelector('time');
    const timeText = timeElement ? timeElement.innerText : false;
    const time = timeText;
    const datetimeText = timeElement ? timeElement.getAttribute('datetime') : false;
    const datetime = datetimeText;

    var is_primary = false;
    if (image)
      is_primary = true;

    if (link && image && title) {
      // Constructing the mainArticle object
      const mainArticle = {
          "title": title,
          "link": link,
          "image": image,
          "source": sourceName,
          "source_image": sourceImage,
          "time": timeText,
          "datetime": datetimeText,
          "related": []
      };
      console.log(mainArticle);
      var publication_time = new Date(datetime);
      var news_time = Math.floor(publication_time.getTime() / 1000);
      var source_logo = source_image;

      //                  console.log('Title: ' + title);
      add_gnews(is_primary, title, news_time, source, source_logo, link, image);
      added++;
      news_are_already_onscreen = true;
      localStorage.needFetch = false;
    }
  }
  if (articles.length > (i + 1) && document.getElementById('news').childElementCount <= 29) {
    document.getElementById('newsMore').innerHTML = '<div style="color: #8AB4F8; font-size: 24px; width: 100%; text-align: center"><b>...</b></div><br />&nbsp;<br />';
  } else {
    document.getElementById('newsMore').innerHTML = '';
  }
}

var closeImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAACNvAAAjbwE1/Af7AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANVQTFRF////11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK11pK2F9P2WBR2WJT2mVW33pt5ZSJ5peN6J+V6KGY/PHv/PHw/PPy/PTz/fb1////fP+U/wAAADd0Uk5TAAEDBAYLDA4VHB4fNDg8PUJDR0pbc3yCg4SGiImVlqWnq661uLq/wsPFy9DT2d7m6+zt8/n6/uYUS2MAAANwSURBVHjazVvnWiJBEBwjBjwRCSfgkWHJectAUnTf/5FuDeehIhN3euv3fFu1aaa7upsxFUSiiXS+7LS6/fG432055Xw6EY0wKziI52o9bESvlosfBEq+H7tqTLAVk8bv2H5A9GfXQwhheH1mnv001YEEOqlTo/TRkgtJuKWoMfrzCpRQOTdCf1GHMuoX2vTHRWiheKxFv5ccQROj5J46/682DKD9S5F+N+PCCNzMrtLbd2AMjsKXcDmAQQwuJel3si6Mws3uSJ06BRhHQeKMOqwiAFQPRfmPmggEzSMx/pMOAkLnROj+A+P3FQg8g8MmAkST+x3sVxEoqpx/YaeAgFHYvh9kETiyW/dfN3gB7pZd+XgACxj8eDLtOrAC56fTOQNLyPwQ/7i2BLgbY6S9NqyhvSlOTMIikhv+gJFNAaPvf0IRVlH8lv/AMr7mTHXbAupf8k9Yx+fMtWJfQOVT/g8CrPsHJe7q28XsRvzad8v5PXdRac1/4W7C9yvPe5iK8k8fPW91y92Q/7s4Ke4l556PJ0EF06eX1QvuutSHAH4cvPTEFbzxezN+jPzhvwm81EdhBe/8DwKfzD8371r8tvgKhBf6+PMeiQ9hToEMP4ZvMXpM5tPiXFqKH4i9CriCMQWS/Lh6FdCAKQWy/Gi8+u8TGFIgzY/Ji7sfl9i+t1LI8wNxX0AOZhSo8CPnC6jBiAIlftR8AT2YUKDGjx5jEdljfCOVIj8QUYhFNpAp8/tRSQL6CtT5kWBpaCvQ4Eea5aGrQIcfeVaGpgItfpSZoinxQavHD4e1oKXg+VmLHy3WhZ4CPX50WR/6CtT50Wdj9dRm+vb4vWd1fozpBZC/AvKPkPw3JN+IyLdi8sOI/DgmD0jIQzLyoJQ8LKdPTMhTM/LklDw9Jzco6C0acpOK3KYjNypFrNqbB1mr9vGOv/RM3KyeyZvVS+7CjoRdv5C36+fcdSmJgsXtyn+o4gUL/4WtuCWTtYKFQMnmfr68E97gcDNbcAsm6yUb+qIVedmOvnBJXrqlL16Tl+/pGxjIWzjom1jI23joG5noW7nIm9no2/noGxrpWzrJm1rp23rpG5vpW7vpm9vp2/vpBxzoRzzoh1xCMOZDP+hEP+oVgmE3+nG/EAw8hmDkMwRDryEY+w3B4HMYRr9DMPwexPj/X+Yt8H/u7e31AAAAAElFTkSuQmCC';
document.getElementById('add-button').addEventListener('click', create_new_item);

var longpress = false;
var presstimer = null;
var longtarget = null;
var iseditable = false;

function load_more_news() {
  localStorage.lastOffsetRendered = last_offset_rendered;
  render_gnews(localStorage.cachedGNews, last_offset_rendered, 10);
}

function process_cancel(e) {
  console.log('We received process_cancel');
  console.log(e);
  if (iseditable) {
    e.preventDefault();
    return;
  }
  if (presstimer !== null) {
    clearTimeout(presstimer);
    presstimer = null;
  }

  this.classList.remove("longpress");
};

function process_body_click(e) {
  if (iseditable) {
    toggle_edit_mode();
    e.preventDefault();
  }
}

function process_click(e) {
  console.log('We received process_click');
  console.log(e);
  if (iseditable)
    return;
  e.preventDefault();
  if (presstimer !== null) {
    clearTimeout(presstimer);
    presstimer = null;
  }

  this.classList.remove("longpress");

  if (longpress) {
    return false;
  }
};

function process_start(e) {
  if (iseditable)
    return;
  //    e.preventDefault();

  if (e.type === "click" && e.button !== 0) {
    return;
  }

  longpress = false;

  this.classList.add("longpress");

  presstimer = setTimeout(function () {
    toggle_edit_mode();
    longpress = true;
  }, 550);

  return false;
};

function arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => binary += String.fromCharCode(b));

  return window.btoa(binary);
};

function invalidate_image(item) {
  console.log("Invalidating item: " + item.title);
  var parser = document.createElement('a');
  parser.href = item.title;
  var rootDomain = psl.get(parser.hostname);
  console.log("Invalidating rootDomain: " + rootDomain);
  item.src = "data:image/svg+xml;base64," + btoa(jdenticon.toSvg(parser.hostname, 64));
  localStorage.setItem('icon-' + rootDomain, item.src);
  localStorage.setItem('lastShown-' + rootDomain, Math.floor(Date.now() / 1000));
}

function remove_favorite(e) {
  console.log("Removing favorite");
  console.log(e);
  item = e.target;
  item = item.parentNode;
  console.log("Removing item");
  globalGrid.disconnect(item);
}

var nItemsAdded = 0;

function add_favorite_idea(name, click_url, impression_url, image_url) {
  var rootDomain = 'idea-' + name;
  var innerDiv = document.createElement('div');
  innerDiv.className = 'grid-item grid-idea';
  var cachedImage = localStorage.getItem('icon-' + rootDomain);
  localStorage.setItem('lastShown-' + rootDomain, Math.floor(Date.now() / 1000));
  var imageUri = null;
  var randomId = Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9);
  if (cachedImage != null) {
    imageUri = cachedImage;
    console.log('Loading icon for ' + rootDomain + ' from cache');
  } else {
    console.log('Fetching icon for ' + rootDomain);
    loadingImage = "data:image/svg+xml;base64," + btoa('<svg width="85px"  height="85px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-tail">    <defs>      <filter id="tail-0.a4db4fdd84ecd" x="-100%" y="-100%" width="300%" height="300%" color-interpolation-filters="sRGB">        <feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur>        <feColorMatrix mode="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 60 -40" result="cm"></feColorMatrix>      </filter>    </defs>    <g ng-attr-filter="url(#{{config.filterid}})" filter="url(#tail-0.a4db4fdd84ecd)" transform="rotate(54 50 50)">      <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="4s" begin="0s" repeatCount="indefinite"></animateTransform>      <g transform="rotate(333.474 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="19" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.13333333333333333 0 0.03333333333333333 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(331.178 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="18" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.16666666666666669 0 0.06666666666666667 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(328.576 50.0001 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="17" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.2 0 0.1 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(325.612 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="16" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.23333333333333334 0 0.13333333333333333 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(322.212 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="15" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.26666666666666666 0 0.16666666666666666 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(318.287 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="14" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.30000000000000004 0 0.2 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(314.708 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="13" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.33333333333333337 0 0.23333333333333334 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(309.018 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="12" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.3666666666666667 0 0.26666666666666666 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(302.443 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="11" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.4 0 0.3 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(294.767 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="10" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.43333333333333335 0 0.3333333333333333 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(285.715 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="9" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.4666666666666667 0 0.36666666666666664 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(274.96 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="8" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.5 0 0.4 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(263.29 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="7" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.5333333333333333 0 0.43333333333333335 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(247.243 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="6" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.5666666666666667 0 0.4666666666666667 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(233.28 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="5" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.6 0 0.5 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(210.448 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="4" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.6333333333333333 0 0.5333333333333333 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(189.723 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="3" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.6666666666666666 0 0.5666666666666667 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(167.547 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="2" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.7 0 0.6 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(151.39 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="1" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.7333333333333333 0 0.6333333333333333 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(134.242 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="0" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.7666666666666666 0 0.6666666666666666 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>    </g>  </svg>');
    imageUri = loadingImage;
    try {
      fetch(image_url).then(function (response) {
        return response.arrayBuffer();
      })
        .then(function (answer) {
          localStorage.setItem('icon-' + rootDomain, 'data:image/png;base64,' + arrayBufferToBase64(answer));
          localStorage.setItem('lastShown-' + rootDomain, Math.floor(Date.now() / 1000));
          document.getElementById('icon' + randomId).src = 'data:image/png;base64,' + arrayBufferToBase64(answer);
          console.log('Icon for ' + rootDomain + ' is now fetched');
        });
    } catch (err) {
      console.log('Fetch failed for: ' + err.message);
    }
  }
  if (impression_url && impression_url != 'about:blank')
    navigator.sendBeacon(impression_url);
  innerDiv.innerHTML = '<a id="tile_target" href="' + click_url + '"><img border="0" class="grid-image" title="' + name + '" src="' + imageUri + '" id="icon' + randomId + '" onError="invalidate_image(this)" width="64" style="max-height: 64px; border-radius: 4px;" /><span style="width: 60px; line-height: 15px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block">' + name + '</span></a>';
  innerDiv.style.minHeight = '64px';

  //  innerDiv.querySelector('#closeImg').addEventListener("touchstart", remove_favorite);
  //  innerDiv.querySelector('#tile_target').addEventListener("touchstart", process_start);
  document.body.addEventListener("click", process_body_click);
  //  innerDiv.querySelector('#tile_target').addEventListener("touchend", process_cancel);
  document.getElementById('ideas-grid').appendChild(innerDiv);
}

function add_favorite(item) {
  var parser = document.createElement('a');
  parser.href = item.url;
  // Our intent is buzz.blogspot.com to stay buzz.blogspot.com
  // and m.wikipedia.org to become wikipedia.org
  var rootDomain = psl.get(parser.hostname);
  var innerDiv = document.createElement('div');
  innerDiv.className = 'grid-item';
  var cachedImage = localStorage.getItem('icon-' + rootDomain);
  localStorage.setItem('lastShown-' + rootDomain, Math.floor(Date.now() / 1000));
  var imageUri = null;
  var randomId = Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9);
  if (nItemsAdded++ < 10) {
    console.log('Favorite - Preconnecting to: ' + item.url);
    preconnectTo(item.url);
    if (item.url.startsWith('http://'))
      preconnectTo(item.url.replace('http://', 'https://'));
  }
  if (cachedImage != null) {
    imageUri = cachedImage;
    console.log('Loading icon for ' + rootDomain + ' from cache');
  } else {
    console.log('Fetching icon for ' + rootDomain);
    loadingImage = "data:image/svg+xml;base64," + btoa('<svg width="85px"  height="85px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-tail">    <defs>      <filter id="tail-0.a4db4fdd84ecd" x="-100%" y="-100%" width="300%" height="300%" color-interpolation-filters="sRGB">        <feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur>        <feColorMatrix mode="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 60 -40" result="cm"></feColorMatrix>      </filter>    </defs>    <g ng-attr-filter="url(#{{config.filterid}})" filter="url(#tail-0.a4db4fdd84ecd)" transform="rotate(54 50 50)">      <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="4s" begin="0s" repeatCount="indefinite"></animateTransform>      <g transform="rotate(333.474 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="19" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.13333333333333333 0 0.03333333333333333 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(331.178 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="18" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.16666666666666669 0 0.06666666666666667 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(328.576 50.0001 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="17" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.2 0 0.1 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(325.612 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="16" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.23333333333333334 0 0.13333333333333333 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(322.212 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="15" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.26666666666666666 0 0.16666666666666666 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(318.287 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="14" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.30000000000000004 0 0.2 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(314.708 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="13" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.33333333333333337 0 0.23333333333333334 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(309.018 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="12" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.3666666666666667 0 0.26666666666666666 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(302.443 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="11" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.4 0 0.3 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(294.767 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="10" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.43333333333333335 0 0.3333333333333333 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(285.715 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="9" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.4666666666666667 0 0.36666666666666664 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(274.96 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="8" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.5 0 0.4 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(263.29 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="7" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.5333333333333333 0 0.43333333333333335 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(247.243 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="6" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.5666666666666667 0 0.4666666666666667 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(233.28 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="5" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.6 0 0.5 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(210.448 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="4" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.6333333333333333 0 0.5333333333333333 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(189.723 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="3" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.6666666666666666 0 0.5666666666666667 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(167.547 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="2" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.7 0 0.6 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(151.39 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="1" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.7333333333333333 0 0.6333333333333333 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>      <g transform="rotate(134.242 50 50)">        <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">          <circle cx="0" cy="0" r="0" ng-attr-fill="{{config.fill}}" ng-attr-transform="scale({{config.scale}})" fill="#ff7c81" transform="scale(0.48)"></circle>        </g>        <animateTransform attributeName="transform" calcMode="spline" type="rotate" values="0 50 50;360 50 50" keyTimes="0;1" ng-attr-dur="{{config.speed2}}" keySplines="0.7666666666666666 0 0.6666666666666666 1" repeatCount="indefinite" dur="1"></animateTransform>      </g>    </g>  </svg>');
    imageUri = loadingImage;
    try {
      fetch('https://logos.kiwibrowser.com/' + rootDomain).then(function (response) {
        return response.ok ? response : fetch(`https://www.google.com/s2/favicons?domain=${item.url}&sz=128`);
      })
        .then((response) => {
          return response.ok ? response.arrayBuffer() : new ArrayBuffer();
        })
        .then(function (answer) {
          localStorage.setItem('icon-' + rootDomain, 'data:image/png;base64,' + arrayBufferToBase64(answer));
          document.getElementById('icon' + randomId).src = 'data:image/png;base64,' + arrayBufferToBase64(answer);
          console.log('Icon for ' + rootDomain + ' is now fetched');
        });
    } catch (err) {
      console.log('Fetch failed for: ' + err.message);
    }
  }
  innerDiv.innerHTML = '<img id="closeImg" src="' + closeImg + '" class="closeImg closeImgInvisible" height="20" width="20" style="position: absolute; right: 0px; border: 0px;" /><a id="tile_target" href="' + item.url + '"><img border="0" class="grid-image serverIdea" title="' + item.url + '" src="' + imageUri + '" id="icon' + randomId + '" width="64" style="max-height: 64px; border-radius: 4px;" /><span style="width: 60px; line-height: 15px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block">' + rootDomain + '</span></a>';
  innerDiv.style.minHeight = '64px';
  innerDiv.querySelector(`#icon${randomId}`).addEventListener("error", (e) => {
    invalidate_image(e.target);
  });

  innerDiv.querySelector('#closeImg').addEventListener("touchstart", remove_favorite);
  innerDiv.querySelector('#tile_target').addEventListener("touchstart", process_start);
  document.body.addEventListener("click", process_body_click);
  innerDiv.querySelector('#tile_target').addEventListener("touchend", process_cancel);
  document.getElementById('bookmarks-grid').appendChild(innerDiv);
}

var globalGrid = false;
var bookmarksGrid = document.getElementById("bookmarks-grid");
var ideasGrid = document.getElementById("ideas-grid");

function save_grid_snapshot() {
  if (!document.getElementById('bookmarks-grid').style.cssText)
    return;
  // Maximum 1 update per 0.1s (100ms)
  if ((typeof localStorage.cachedGridUpdate == "undefined") || ((Date.now() / 1000) - localStorage.cachedGridUpdate) >= 0.1) {
    var parser = document.createElement('span');
    parser.innerHTML = document.getElementById('bookmarks-grid').innerHTML;
    var elementsToIgnore = parser.getElementsByClassName('grid-idea');
    for (var i = 0; i < elementsToIgnore.length; i++)
      elementsToIgnore[i].remove();
    localStorage.cachedGrid = parser.innerHTML;
    localStorage.cachedGridStyle = document.getElementById('bookmarks-grid').style.cssText;
    //    console.log("Saving grid snapshot and style is " + localStorage.cachedGridStyle);
    localStorage.cachedGridUpdate = (Date.now() / 1000);
  }
}

function add_to_storage(el) {
  var storedItems = JSON.parse(localStorage.storedItems);
  offset = storedItems.length;
  var url = el.querySelector('#tile_target').href;
  storedItems[offset] = { url: url }
  localStorage.storedItems = JSON.stringify(storedItems);
  console.log("Add to storage, adding to offset " + offset + " the URL: " + url);
}

function swap_if_ready() {
  if (bookmarksGrid.style.cssText.includes("height")) {
    document.getElementById('fake-bookmarks-grid').style.display = 'none';
    document.getElementById('add-button-spacer').style.display = 'none';
    bookmarksGrid.classList.remove("full-hidden");
  }
}

function fetch_tiles_from_most_visited() {
  if (window.chrome.embeddedSearch.newTabPage.isIncognito) {
    localStorage.triedToLoadMostVisited = 99999;
    return;
  }
  if (typeof localStorage.triedToLoadMostVisited == "undefined")
    localStorage.triedToLoadMostVisited = 0;
  localStorage.triedToLoadMostVisited = parseInt(localStorage.triedToLoadMostVisited) + 1;
  if ((typeof localStorage.cachedTilesUpdate == "undefined") || ((Date.now() / 1000) - localStorage.cachedTilesUpdate) > 43200) {
    console.log("Fetching tiles from most visited because:");
    if (typeof localStorage.cachedTilesUpdate == "undefined")
      console.log(" it is the first time");
    else
      console.log(" last update is out of date");
    if (typeof localStorage.useCustomTiles == "undefined" || localStorage.useCustomTiles == "false") {
      if (chrome.embeddedSearch.newTabPage.mostVisitedAvailable) {
        localStorage.storedItems = JSON.stringify([]);
        var pages = chrome.embeddedSearch.newTabPage.mostVisited;
        var storedItems = JSON.parse(localStorage.storedItems);
        for (var i = 0; i < Math.min(8, pages.length); ++i) {
          offset = storedItems.length;
          storedItems[offset] = { url: chrome.embeddedSearch.newTabPage.getMostVisitedItemData(pages[i].rid).url }
          add_favorite(storedItems[offset]);
        }
        localStorage.storedItems = JSON.stringify(storedItems);
        localStorage.cachedTilesUpdate = (Date.now() / 1000);
      }
    }
  } else {
    console.log("Not fetching tiles from most visited, as we have to do once every day");
    if (typeof localStorage.storedItems != "undefined") { var storedItems = JSON.parse(localStorage.storedItems); for (var i = 0; i < storedItems.length; i++) { add_favorite(storedItems[i]); } }
  }
}

function toggle_edit_mode() {
  if (globalGrid.isDragifierOn()) {
    iseditable = false;
    globalGrid.dragifierOff();
    Array.prototype.forEach.call(document.getElementsByClassName("grid-item"), function (el) { if (!el.classList.contains('grid-idea')) { el.style.WebkitAnimation = 'none'; } });
    Array.prototype.forEach.call(document.getElementsByClassName('closeImg'), function (el) { el.classList.add('closeImgInvisible'); });
  } else {
    iseditable = true;
    globalGrid.dragifierOn();
    Array.prototype.forEach.call(document.getElementsByClassName("grid-item"), function (el) { if (!el.classList.contains('grid-idea')) { el.style.WebkitAnimation = 'shadow-inset-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'; } });
    Array.prototype.forEach.call(document.getElementsByClassName('closeImg'), function (el) { el.classList.remove('closeImgInvisible'); });
  }
  window.setTimeout(function () { save_grid_snapshot(); }, 100);
}

function select_locale(locale) {
  localStorage.newsLocale = locales[locale];
  localStorage.removeItem('cachedNewsUpdate');
  localStorage.removeItem('cachedGNews');
  document.location.reload();
}

function configure_news() {
  document.getElementById("localeDropdown").classList.toggle('show');
  var buf = '<ul class="localesList">';
  for (var locale in locales) {
    if (locale_to_readabletext(localStorage.newsLocale) == locale)
      buf += '<li class="localesListSelected"><b>' + locale + '</b></li>';
    else
      buf += '<li class="localesListUnselected"><a href="#">' + locale + '</a></li>';
  }
  buf += '</ul>';
  document.getElementById("localeDropdown").innerHTML = buf;
  [...document.querySelectorAll("li.localesListUnselected>a")].forEach((a) => {
    a.addEventListener("click", () => {
      select_locale(a.innerHTML);
    });
  });
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('#locale') && !event.target.matches('.arrow-down')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function close_explore() {
  localStorage.hideExplore = true;
  document.getElementById('explore-section').style.display = 'none';
  document.getElementById('close-explore-button').style.display = 'none';
  document.getElementById('enable-explore-button').style.display = 'inline-block';
  document.getElementById('enable-explore-button').addEventListener('click', enable_explore);
}

function close_news() {
  localStorage.hideNews = true;
  localStorage.removeItem("lastOffsetRendered");
  document.getElementById('news').style.display = 'none';
  document.getElementById('newsMore').style.display = 'none';
  document.getElementById('configure-button').style.display = 'none';
  document.getElementById('close-button').style.display = 'none';
  document.getElementById('enable-news-button').style.display = 'inline-block';
  document.getElementById('enable-news-button').addEventListener('click', enable_news);
}

function close_information() {
  localStorage.hideInformation = true;
  document.getElementById('informationPromo').style.display = 'none';
}

function create_new_item() {
  preconnectTo('https://logos.kiwibrowser.com');
  var url = prompt("Enter website address", "https://");
  url = url.trim();
  url = url.replace(' ', '.');
  var parser = document.createElement('a');
  parser.href = url;
  // Our intent is buzz.blogspot.com to stay buzz.blogspot.com
  // and m.wikipedia.org to become wikipedia.org
  var rootDomain = psl.get(parser.hostname);
  if (!rootDomain)
    return;
  if (typeof localStorage.storedItems == "undefined" || localStorage.storedItems == "")
    localStorage.storedItems = JSON.stringify([]);
  var storedItems = JSON.parse(localStorage.storedItems);
  offset = storedItems.length;
  storedItems[offset] = { url: url }
  add_favorite(storedItems[offset]);
  localStorage.storedItems = JSON.stringify(storedItems);
  globalGrid.toggle("scaleWithFade");
  globalGrid.appendNew();
  window.setTimeout(function () { save_grid_snapshot(); }, 200);
  window.setTimeout(function () { save_grid_snapshot(); }, 800);
  localStorage.useCustomTiles = "true";
}

if (window.chrome.embeddedSearch.newTabPage.isIncognito || typeof localStorage.hideExplore != "undefined") {
  document.getElementById('explore-section').style.display = 'none';
} else {
  if (document.getElementById('close-explore-button'))
    document.getElementById('close-explore-button').addEventListener('click', close_explore);
}
if (window.chrome.embeddedSearch.newTabPage.isIncognito || typeof localStorage.hideNews != "undefined") {
  document.getElementById('news').style.display = 'none';
  document.getElementById('newsMore').style.display = 'none';
  document.getElementById('configure-button').style.display = 'none';
  document.getElementById('close-button').style.display = 'none';
} else {
  if (typeof localStorage.newsLocale == "undefined") {
    localStorage.newsLocale = '';
  } else if (localStorage.newsLocale != '') {
    document.getElementById('locale').innerHTML = locale_to_readabletext(localStorage.newsLocale);
  }
  if (document.getElementById('configure-button'))
    document.getElementById('configure-button').addEventListener('click', configure_news);
  if (document.getElementById('close-button'))
    document.getElementById('close-button').addEventListener('click', close_news);
  if (document.getElementById('newsMore'))
    document.getElementById('newsMore').addEventListener('click', load_more_news);
  preconnectTo('https://news.google.com');
}

async function render_news_async() {
  if (!window.chrome.embeddedSearch.newTabPage.isIncognito) {
    //  console.log('News locale is ' + localStorage.newsLocale);
    if (typeof localStorage.cachedGNews != "undefined" && typeof localStorage.hideNews == "undefined") {
      //    console.log('Rendering GNews from cache');
      render_gnews(localStorage.cachedGNews, 0, 10);
      if (typeof localStorage.lastOffsetRendered != "undefined") {
        window.setTimeout(() => {
          while (last_offset_rendered <= localStorage.lastOffsetRendered)
            render_gnews(localStorage.cachedGNews, last_offset_rendered, 10);
        }, 1);
      }
    }
  }
}
window.setTimeout(function () { render_news_async(); }, 1);

if (!window.chrome.embeddedSearch.newTabPage.isIncognito) {
  if ((typeof localStorage.cachedNewsUpdate == "undefined") || ((Date.now() / 1000) - localStorage.cachedNewsUpdate) > 3000 || (typeof localStorage.needFetch == "undefined")) {
    if (typeof localStorage.hideNews == "undefined") {

      has_valid_foryou_entries = false;
      if (news_are_already_onscreen) {
        localStorage.needFetch = false;
      } else {
        document.getElementById('newsMore').innerHTML = '';
        last_offset_rendered = 0;
        localStorage.lastOffsetRendered = 0;
        render_news_loading();
      }

      async function get_news() {
        try {
          await fetch('https://news.google.com/foryou' + localStorage.newsLocale, { method: 'GET', credentials: 'include' })
            .then(function (response) {
              //          console.log('Gnews: received answer from personalized feed');
              if (response.url.includes("&ceid=")) {
                //            console.log('Gnews: Detected ceid (personalized)');
                localStorage.newsLocale = response.url.substr(response.url.lastIndexOf('?'));
                document.getElementById('locale').innerHTML = locale_to_readabletext(localStorage.newsLocale);
              }
              console.log("We set has_valid_foryou_entries to true");
              has_valid_foryou_entries = true;
              return response.text();
            })
            .then(function (answer) {
              if (answer != localStorage.cachedGNews && !news_are_already_onscreen) {
                render_gnews(answer, 0, 10);
              }
              localStorage.cachedGNews = answer;
              localStorage.cachedNewsUpdate = (Date.now() / 1000);
            });
        } catch (err) {
          console.log('Fetch news failed for: ' + err.message);
          has_valid_foryou_entries = false;
        }

        console.log("Processing standard news feed");
        console.log(has_valid_foryou_entries);
        try {
          if (!has_valid_foryou_entries) {
            if (!news_are_already_onscreen) {
              last_offset_rendered = 0;
              localStorage.lastOffsetRendered = 0;
              render_news_loading();
            }
            await fetch('https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZxYUdjU0FtVnVHZ0pWVXlnQVAB' + localStorage.newsLocale, { method: 'GET', credentials: 'omit' })
              .then(function (response) {
                if (response.url.includes("&ceid=")) {
                  //            console.log('Gnews: Detected ceid (standard)');
                  localStorage.newsLocale = response.url.substr(response.url.lastIndexOf('?'));
                  document.getElementById('locale').innerHTML = locale_to_readabletext(localStorage.newsLocale);
                }
                return response.text();
              })
              .then(function (answer) {
                //          console.log('Gnews: received answer from standard feed');
                if (answer != localStorage.cachedGNews && !news_are_already_onscreen) {
                  render_gnews(answer, 0, 10);
                }
                localStorage.cachedGNews = answer;
                localStorage.cachedNewsUpdate = (Date.now() / 1000);
              });
          }
        } catch (err) {
          console.log('Fetch generic news failed for: ' + err.message);
        }


      } // async
      get_news();

    }
  }
}

function enable_news() {
  localStorage.removeItem('hideNews');
  location.reload();
}
function enable_explore() {
  localStorage.removeItem('hideExplore');
  location.reload();
}
function reset_page() {
  if (confirm("This will reset all the homepage back to default, are you sure ?")) {
    var hideInformation = false;
    if (typeof localStorage.hideInformation != "undefined" && localStorage.hideInformation != false) {
      hideInformation = true;
    }
    localStorage.clear();
    localStorage.hideInformation = hideInformation;
    location.reload();
  }
}
if (typeof localStorage.hideInformation == "undefined" || (typeof localStorage.hideInformation != "undefined" && localStorage.hideInformation == false)) {
  if (navigator.language.includes('pt'))
    document.getElementById('informationPromo').style.display = 'block';
}
if (window.chrome.embeddedSearch.newTabPage.isIncognito) {
  document.getElementById('bottom_panel').style.display = 'none';
}
else {
  document.getElementById('bottom_panel').style.visibility = 'visible';
  document.getElementById('enable-news-button').addEventListener('click', enable_news);
  document.getElementById('enable-explore-button').addEventListener('click', enable_explore);
  document.getElementById('reset-button').addEventListener('click', reset_page);
  document.getElementById('export-button').onclick = function () {
    var localStorageCopy = JSON.parse(JSON.stringify(localStorage));
    var values = Object.values(localStorageCopy),
      keys = Object.keys(localStorageCopy),
      i = keys.length;
    while (i--) {
      if (keys[i].startsWith('cached') || keys[i].startsWith('icon-'))
        delete localStorageCopy[keys[i]];
    }
    var dataStr = JSON.stringify(localStorageCopy);
    var dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var exportFileDefaultName = 'kiwi_homepage_' + year + '-' + month + '-' + day + '.json';
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }
  document.getElementById('import-file').onchange = function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function (progressEvent) {
      var content = this.result;
      var parsedContent = JSON.parse(content);

      var values = Object.values(parsedContent),
        keys = Object.keys(parsedContent),
        i = keys.length;
      while (i--) {
        localStorage.setItem(keys[i], values[i]);
      }
      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          if (key.startsWith('cached') || key.startsWith('icon-')) {
            delete localStorage[key];
          }
        }
      }
      document.location.reload();
    };
    reader.readAsText(file);
  };
}
if (typeof localStorage.hideNews == "undefined") {
  document.getElementById('enable-news-button').style.display = 'none';
}
if (typeof localStorage.hideExplore == "undefined") {
  document.getElementById('enable-explore-button').style.display = 'none';
}

function cleanUpOldTilesIdeas() {
  var values = Object.values(localStorage),
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    if (keys[i].startsWith('lastShown-idea-')) {
      var tile_name = keys[i].substring('lastShown-idea-'.length);
      var difference = Math.floor(Date.now() / 1000) - parseInt(localStorage[keys[i]]);
      if (difference > (86400 * 7)) {
        console.log('Dropping tile idea: ' + keys[i]);
        delete localStorage[keys[i]];
        delete localStorage['icon-idea-' + tile_name];
      }
    }
  }
}
function cleanUpOldTiles() {
  var values = Object.values(localStorage),
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    if (keys[i].startsWith('lastShown-') && !keys[i].startsWith('lastShown-idea-')) {
      var tile_name = keys[i].substring('lastShown-'.length);
      var difference = Math.floor(Date.now() / 1000) - parseInt(localStorage[keys[i]]);
      if (difference > (86400 * 7)) {
        console.log('Dropping tile: ' + keys[i]);
        delete localStorage[keys[i]];
        delete localStorage['icon-' + tile_name];
      }
    }
  }
}
window.setTimeout(function () { cleanUpOldTilesIdeas(); cleanUpOldTiles(); }, 3000);

if (window.chrome.embeddedSearch.newTabPage.isIncognito) {
  document.getElementById('add-button').style.display = 'none';
}
