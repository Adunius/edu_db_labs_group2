/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2f70b9485eb74f99991f32ab05ab2e83"
  },
  {
    "url": "assets/css/0.styles.28b5fc70.css",
    "revision": "2118a2d521746eb25c3256904dbfccfe"
  },
  {
    "url": "assets/img/123.38508098.png",
    "revision": "3850809804bb03a385497e8e347721fb"
  },
  {
    "url": "assets/img/321.2305e653.png",
    "revision": "2305e65384f7f8b6a04869ab653f6b30"
  },
  {
    "url": "assets/img/456.12d5b253.png",
    "revision": "12d5b253308c38a42040f9fe9f2ac8f8"
  },
  {
    "url": "assets/img/678.d725ea4f.png",
    "revision": "d725ea4f4b9fb79e65cffdc96586c807"
  },
  {
    "url": "assets/img/890.47dcb56b.png",
    "revision": "47dcb56b300b177610d598db0e5f1794"
  },
  {
    "url": "assets/img/relationalSchema.4d0bdb0b.png",
    "revision": "4d0bdb0b4bb3551211c4ab0253c38a6c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ede44feb.js",
    "revision": "a5fdc61680aa686098ead5585865520b"
  },
  {
    "url": "assets/js/11.cf759c35.js",
    "revision": "4a4cbe9dba2fe96205db2667a78b4de9"
  },
  {
    "url": "assets/js/12.dcaae35a.js",
    "revision": "43fa593a39277d240494bb4077ec736e"
  },
  {
    "url": "assets/js/13.bf9281ec.js",
    "revision": "db302be35545dae858fa4c8dbd9182a6"
  },
  {
    "url": "assets/js/14.ad841c24.js",
    "revision": "38e2c092db585d56425e69d625f9916d"
  },
  {
    "url": "assets/js/15.a1150af9.js",
    "revision": "eac604ff9653af21fe4e4794c561f7d1"
  },
  {
    "url": "assets/js/16.93f9839f.js",
    "revision": "138776cd774a378eda17b96d1a865196"
  },
  {
    "url": "assets/js/17.d6af12fb.js",
    "revision": "37edb37a0204665338563e4c4cdaff9d"
  },
  {
    "url": "assets/js/18.c6e63ec9.js",
    "revision": "80c8e91ca93f0f1fba9e51a0034dcc9c"
  },
  {
    "url": "assets/js/19.370f309f.js",
    "revision": "b415c5e067ac55867e36df7016ca3319"
  },
  {
    "url": "assets/js/2.e2964a85.js",
    "revision": "96cf7e616365ba1d7ef3f6fa6c3cfaae"
  },
  {
    "url": "assets/js/20.92d88311.js",
    "revision": "1261d7fa77120af44362ed18941905e8"
  },
  {
    "url": "assets/js/21.659029f4.js",
    "revision": "e042b23a98ba2bf0a97bf3d40c9a2e3a"
  },
  {
    "url": "assets/js/22.c13b727d.js",
    "revision": "36f655e973106761bb003a32128d6e51"
  },
  {
    "url": "assets/js/23.63742036.js",
    "revision": "d6a02c060cae37b11d82a4508678c7d1"
  },
  {
    "url": "assets/js/24.8942a594.js",
    "revision": "9b65d6a2a4fa125dee3b25238635e76c"
  },
  {
    "url": "assets/js/26.8925e476.js",
    "revision": "60c5ae44e9de26fbdaa7a983ce917288"
  },
  {
    "url": "assets/js/3.d5ba5d45.js",
    "revision": "4a91ba7a7afb2682ae58552f459399d0"
  },
  {
    "url": "assets/js/4.8b0e94d6.js",
    "revision": "4ba396580958a7bab8a23893c6f4f46b"
  },
  {
    "url": "assets/js/5.9db644f5.js",
    "revision": "2848ac291933838d8f270fd2d03f084d"
  },
  {
    "url": "assets/js/6.a5eceeec.js",
    "revision": "ccffa3b74a48481f4deecbdf9fdfb1ab"
  },
  {
    "url": "assets/js/7.987f5f89.js",
    "revision": "5dd096a048e9bd2b58f2104d1ff0aaae"
  },
  {
    "url": "assets/js/8.cd2e3176.js",
    "revision": "b6c4db4fa28fc934f623035634c9d82b"
  },
  {
    "url": "assets/js/9.28a9c718.js",
    "revision": "a92d167ff54ffd395b340a047621d911"
  },
  {
    "url": "assets/js/app.c9bc22b3.js",
    "revision": "8d01247b5e2b77d77ff53a250e6eb098"
  },
  {
    "url": "conclusion/index.html",
    "revision": "581cf6450bb9052c338d5b151d4f05f3"
  },
  {
    "url": "design/index.html",
    "revision": "38c3adaac6798f593063788fbce481ce"
  },
  {
    "url": "index.html",
    "revision": "a5f270a7c84d24f1810d4703ef5c81cf"
  },
  {
    "url": "intro/index.html",
    "revision": "5a148fc0ebb9dd27db842d3c7caa5a25"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "6caac405f1904ddf5d2f44e69cb09584"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6a531e7bd5d36376b7563ca476083912"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c0c02656d46421da4a4d5ce9c938ccd0"
  },
  {
    "url": "software/index.html",
    "revision": "56a005588dc95e4c90ac33705f897605"
  },
  {
    "url": "test/index.html",
    "revision": "fa6dd772fcce008e1ec3a8270b0fd7c5"
  },
  {
    "url": "use cases/index.html",
    "revision": "f0851a1707c70dcf1b9f2299e29de384"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
