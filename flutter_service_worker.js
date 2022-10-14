'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e93456b0b0a4044cde6c97a58c1848fa",
".git/config": "787f7cd6fdba4a091ba3a0d824c49379",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "297fe2a0ff3816a030806b57fdf69323",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c5534062a36edc4a7da2c1c03e6d0fe4",
".git/logs/refs/heads/main": "48559f4e0442d5028171bdb546945566",
".git/logs/refs/remotes/origin/main": "92dee2748a6335b57efe86aafc3568b4",
".git/objects/04/d02b581ca08ef5cf6694b64ea8c36ad941d8fa": "7357d04b8666bcc09298bc81858b3199",
".git/objects/0a/6fef6dde6496241568f7d2db1601cdd00c872e": "3d518331a2d3ef2246bb5edd90088c09",
".git/objects/0a/9fa3e805f54a1b565bdd22a39f202dd39f4659": "5729cd71495459f7cc6d1675f427624b",
".git/objects/0c/172c233605ce2b0a3b0cdd47913f965f926c41": "397d0a8c62180e155cf4857f869ed71d",
".git/objects/10/57f1c4942155e2f0e187071f4465aa1fd41325": "19e857159f164e04bd33af76a2792001",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/f88f10167f4249f3fbae633e246b76512be768": "0a77b222863cab1b0f7d52074e4cbddf",
".git/objects/15/a0b5640f32ba0205fe909182971875061094a0": "f17a813bad023d29ce922f1d94cc3afb",
".git/objects/16/7494e6435f38be767aa6ef0582474d82e02fda": "9c073f2c3b9c31009edb64520af31d52",
".git/objects/17/e41dd91a5dc556f22b699514d912566d5b5598": "dbb49ef83547a496efdba3e5093b1217",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/bc2e5da3438e3a0383a31ddb74b0d65274f648": "36ca554b6810cdd1676cc4166817915e",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/3d509dc832495f522b755c0cd9bbff59632c31": "43f1a88d35d3db79571d05bf2507c8e3",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/36/7cf9172fd8ba1ee03b3e112f2d7c48ad74e26b": "5f2b49930bafedfb17634ea98f69ab43",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/0f4f45db90f42834333becc29aed2b246429be": "e4664bc048049a762081fe73cf95c904",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/62/bf6b5e5b47ae62fb4ca85ac85e1c29411293ea": "0011bdf78e825d35d5ac9c84a884e0ec",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/68/1c4f7c26b1a846ef029ebc13db4642053554f5": "b708c3de3f3920bf89d350c601b5debd",
".git/objects/69/4b0cb7499e9b850f7fdfb5c2c8300ab04f3a60": "e650d11100a5e628ccc3a75269868406",
".git/objects/73/76e6edd2aa0222177fe092af171e7e8ae3e0d2": "51d986c7a198580deb6dfc9b70a085c0",
".git/objects/73/d489ca6f1adfedd08c2aca46eeaf87e064b79d": "6e379194009bcba6e946d0e4e2936d87",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/84/b0f200eccb560b841efa50b5132ebccba2dc77": "bcf9bb67024e339fd61df661cb847f6f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/0c22fa133215df66cc427da187145cb56e917d": "2e32896b3e0b6107715dbd0255199122",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/9e59ff4964348b8014ef96810cac2697037e1c": "1d3373538cbc54d839906382272078b9",
".git/objects/9c/a80bd696770c5af942e6ea11a6f9022033e0eb": "f636d46c96973d9e184eba506f8072b0",
".git/objects/9f/d548a4a63bcb0a4579dac5cb57a7ece5a6d9a2": "ba8e222587e078078d240a71b864b9db",
".git/objects/a0/7c6d9ef31f84b4af93faee45dfaa62ed06885e": "0221a8bcd8e63d8aaeb4dc169c012fc3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/bca4e136461300b7594105aa3a9aa34d8391e3": "a6464b385244cd3c8105ce123c66fbdd",
".git/objects/a5/d731ecf1c9c70d5f6b0d6758cc9add44f30624": "8cfd0f5608ac2ebfce183300264abc40",
".git/objects/a7/3cdd36e8618ce879c9805b09909b06ff4a48c8": "112114ac63a98bd506afff6d155850aa",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b1/6b4b6e3c6af952bce91e7ab8c25c74735d78aa": "b741a466f85d38abd978e9a866f77ced",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f0956581a02ff1ab05a54e1067316d9e6cc36f": "9f4ffb5867436e05fcc09a92aff52e0c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/2b580eaa8d1b34387139aa0a1bd2c35ba8a80e": "c491e1e4a97d52ba5fd8aeabcc99f913",
".git/objects/c1/3a7af35191a91e42860b0e753b9c5b04731cce": "ea9d96aa1e151f458d2ff92d6a431a4c",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d5/77430c60384d3b46cc265ca6f40836210cc882": "85f2acfb15475223a824c1a6858c68ac",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/e8a2730cd4d609b7ac301cd5dde1531149f2ba": "fc1581e55c8bfecee9ab103ae60403c7",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e1d56ee305802705b70ae2922abf48a894bb18": "07861d5f8ffc57953acbc50cda36a197",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/3669581b5b6113419e0d3f6a926e87ee25e909": "2ea2143823202c548da618755e48139b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/6f5649784ad2fa29f9f613982f5a922a28b5bd": "ab1536ef472c64a2d6629f9a13c59e4f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/1ed02050fc663aee1df6481649d25e295e2201": "6e5bddcb7687e0d8e5dfd2a3246f547c",
".git/objects/fe/f0d79a1a8a3a291bcb057b901b85a18f8fb01c": "4700ed2d682b1e970f5338bdee59c292",
".git/refs/heads/main": "cf774a627121a57a818b35c9b27d139b",
".git/refs/remotes/origin/main": "cf774a627121a57a818b35c9b27d139b",
"assets/AssetManifest.json": "66181e27fbf96d7e120f767ecf674e4e",
"assets/assets/images/gplogo.png": "3ee7ed3c7f97ace646d6a9b345e316ca",
"assets/assets/images/not-found.png": "367dfb7dfaa484969d113325cf55ae58",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "dcc50247abf9c63e0664563d59250227",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "4a39df5257345593e602adae708d3cc1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3abb854273ff17451050059d16494ff7",
"/": "3abb854273ff17451050059d16494ff7",
"main.dart.js": "2b7ed97426b3b4780332fb051a46ce46",
"manifest.json": "1280c6e184d5d7babb6c2ecf2d4eb5da",
"README.md": "75f0b3a5fa46657ac04190399460f65d",
"version.json": "70ddbd090ff3e2ef2deededb03031ee6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
