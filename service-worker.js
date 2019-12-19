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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "43c9d1dbddb978a06af21e487f7b7c5b"
  },
  {
    "url": "advanced/mode-config.html",
    "revision": "8d307c3f91febb76443176a589cdde86"
  },
  {
    "url": "advanced/tree-shaking.html",
    "revision": "c81d5c950364da4358b6b99faa5d8607"
  },
  {
    "url": "advanced/webpack-merge.html",
    "revision": "5b937ca618371d91b8685a90d7b3036d"
  },
  {
    "url": "assets/css/0.styles.293d55c1.css",
    "revision": "d17fdb654ee830c1305d29eb1c1f0c2a"
  },
  {
    "url": "assets/img/css-loading-error.a03a18eb.png",
    "revision": "a03a18eb11f2c4b71630b3f5bbf83ed2"
  },
  {
    "url": "assets/img/diagram.519da03f.png",
    "revision": "519da03f4a1d31fffbeac96b2804bcd2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wds.8baa2312.png",
    "revision": "8baa2312e5a6a2b57a04cfb7316c0ae8"
  },
  {
    "url": "assets/img/webpack-bundling.e79747a1.png",
    "revision": "e79747a157ff215dc60f91b847fc451b"
  },
  {
    "url": "assets/img/webpack-entry.90e26197.png",
    "revision": "90e26197b33def35ba574f45774f20d7"
  },
  {
    "url": "assets/js/10.52b4f4ba.js",
    "revision": "b248dc09bc27378ad9633a67ae8b6689"
  },
  {
    "url": "assets/js/11.bec836e7.js",
    "revision": "eaed075ec56c16ea7931089d4c489f39"
  },
  {
    "url": "assets/js/12.de85fd64.js",
    "revision": "a2c695f3cd80695e387b16c4f537385d"
  },
  {
    "url": "assets/js/13.89c97d7a.js",
    "revision": "7cb0a0d8e33b0d900e325e913730cee1"
  },
  {
    "url": "assets/js/14.0f2d6b0a.js",
    "revision": "939ffa15b09e5368845ffab37f162da0"
  },
  {
    "url": "assets/js/15.64eb4af7.js",
    "revision": "eb6bf333991eff166e195915d17e05c5"
  },
  {
    "url": "assets/js/16.db3154fd.js",
    "revision": "caf7af0f3033fa11b4cfa628db89d17b"
  },
  {
    "url": "assets/js/17.d7edd4b4.js",
    "revision": "ca4983f04fcc69ee0162ad7e9e050278"
  },
  {
    "url": "assets/js/18.61809791.js",
    "revision": "f2a156577b53639f095ea011eb3df8fc"
  },
  {
    "url": "assets/js/19.5a6f3eda.js",
    "revision": "0eccb3a48bced67cd02fdf0eadda7be7"
  },
  {
    "url": "assets/js/2.dbe79a9f.js",
    "revision": "9db66c11c33f2f7daa94d7f716f68314"
  },
  {
    "url": "assets/js/20.da50c083.js",
    "revision": "042b768918e7cb10d2513755fc998588"
  },
  {
    "url": "assets/js/21.f59d4cb5.js",
    "revision": "3e8c96b6f243c3eaf92d395e0d3b4e69"
  },
  {
    "url": "assets/js/22.4963201c.js",
    "revision": "c052213efc6be2c67d1572fd785f380d"
  },
  {
    "url": "assets/js/23.9ff13487.js",
    "revision": "ee9fce3c13449990224f55189521aadd"
  },
  {
    "url": "assets/js/24.9819a0f7.js",
    "revision": "9ad5f3ded276f331d1d796caa787db97"
  },
  {
    "url": "assets/js/25.fde50bdd.js",
    "revision": "69ef1b47df8d66bdd5ca37749ed508ea"
  },
  {
    "url": "assets/js/26.fa1d5237.js",
    "revision": "d1fde251820e58228f657064390a9b7f"
  },
  {
    "url": "assets/js/27.9f81e693.js",
    "revision": "a4e75a93b1cc8e083b455953d73cbff9"
  },
  {
    "url": "assets/js/28.b16b1dfc.js",
    "revision": "839f8efd2a7d088bcb06349a8519e9db"
  },
  {
    "url": "assets/js/29.1d9369a3.js",
    "revision": "97a2183317fdf7627517132baee11946"
  },
  {
    "url": "assets/js/3.88a7ba97.js",
    "revision": "f4c7fc83c45fb2c069b4a0535b3e4aad"
  },
  {
    "url": "assets/js/30.f9791278.js",
    "revision": "8fc8fea589d60ea3c2a02fb8d7c40904"
  },
  {
    "url": "assets/js/31.49b882a0.js",
    "revision": "d15f0faee01ec98b7a69a764e5d0e636"
  },
  {
    "url": "assets/js/32.a5942b08.js",
    "revision": "86494280b5f18d1d32b06f05ab5f8818"
  },
  {
    "url": "assets/js/33.a4686dda.js",
    "revision": "93ef1429b3588b8286f5da3d5e2a5419"
  },
  {
    "url": "assets/js/34.2acedd9f.js",
    "revision": "9bad39f16d0be8f9c97ba77d16240fd0"
  },
  {
    "url": "assets/js/35.e43c9b88.js",
    "revision": "589ce0be4588a67d681d6f0d41220b61"
  },
  {
    "url": "assets/js/36.a39021b6.js",
    "revision": "79a0f16c69f31b299818874ea9a0e79c"
  },
  {
    "url": "assets/js/37.30b5b0c3.js",
    "revision": "0a0e2c5c057de6ae5bbe77e3259316e4"
  },
  {
    "url": "assets/js/38.2b1a920e.js",
    "revision": "d4320356f84564cce1b1387ad291532c"
  },
  {
    "url": "assets/js/39.70114fe8.js",
    "revision": "30badaed5b13d175a064fc0c8c0b2200"
  },
  {
    "url": "assets/js/4.545e4ccb.js",
    "revision": "b20a327289c7fedbda192cc817ee1857"
  },
  {
    "url": "assets/js/40.79d01bc6.js",
    "revision": "ae1ad5837370236e87f6435429e91d86"
  },
  {
    "url": "assets/js/41.95610ad1.js",
    "revision": "898b5c2ee66282d2dd70e727e98702ff"
  },
  {
    "url": "assets/js/5.a0b69039.js",
    "revision": "8e80ee545dedd65c15eef430ff188877"
  },
  {
    "url": "assets/js/6.eb3e824f.js",
    "revision": "15601ffe2e34de0ce91a25208fdf00d0"
  },
  {
    "url": "assets/js/7.abbe41d2.js",
    "revision": "fffcf6299ba165c4084684089853f207"
  },
  {
    "url": "assets/js/8.e12292f6.js",
    "revision": "c81633da5b669180e992411b37a1d895"
  },
  {
    "url": "assets/js/9.275684cf.js",
    "revision": "35a1b9673f2ac9475ccb656396ffd686"
  },
  {
    "url": "assets/js/app.3b3a6a54.js",
    "revision": "201f8e74bbb139558f20f424f5f03de5"
  },
  {
    "url": "backup/flow.html",
    "revision": "a866df7e718f286844d1531c1494999f"
  },
  {
    "url": "build/node-npm.html",
    "revision": "2f99dd65e653e339d96b838bbb4a2432"
  },
  {
    "url": "build/npm-custom-commands.html",
    "revision": "455b2ec5b19b23910c2d34fbe1d69489"
  },
  {
    "url": "build/npm-module-install.html",
    "revision": "0fed3dfdabd72a6b2d08ea924bc74f23"
  },
  {
    "url": "build/npm-package-lock.html",
    "revision": "ad4bd45c59cb48eedea101764aaa91af"
  },
  {
    "url": "concepts/entry.html",
    "revision": "85403b0ddcb3c13d3709fabdf399c3b1"
  },
  {
    "url": "concepts/loader.html",
    "revision": "399a47946fb0e4db66ead292db0f5b2a"
  },
  {
    "url": "concepts/output.html",
    "revision": "9b00151029acada947d54c32ec7c26a0"
  },
  {
    "url": "concepts/overview.html",
    "revision": "3c6dc90b309f801104df614bbdd74ffc"
  },
  {
    "url": "concepts/plugin.html",
    "revision": "5b38cb852519200a2d67e7661001c276"
  },
  {
    "url": "concepts/wrapup.html",
    "revision": "9423dbf0b6fff09fbc6cf3dbd21f227b"
  },
  {
    "url": "contribution.html",
    "revision": "47df34d1652b0998648eee61ac5aaf0a"
  },
  {
    "url": "devtools/hot-module-replacement.html",
    "revision": "73a0edc7c20cb120e8f8e392966b7ccc"
  },
  {
    "url": "devtools/source-map.html",
    "revision": "b276fc50a414648e608e28b93b1a0ea1"
  },
  {
    "url": "devtools/webpack-dev-server.html",
    "revision": "484833b9f85442d7dedaf018749cfc63"
  },
  {
    "url": "faq.html",
    "revision": "93f8e82f03d022717d01883f5864a31a"
  },
  {
    "url": "from-scratch.html",
    "revision": "89683f62dbe1e8a2cff34e1a7ed7aec8"
  },
  {
    "url": "getting-started.html",
    "revision": "55c6779d7d875930312266bada005acb"
  },
  {
    "url": "guide.html",
    "revision": "39c114045b2b4ced467a547f5e1653ff"
  },
  {
    "url": "images/css-loading-error.png",
    "revision": "a03a18eb11f2c4b71630b3f5bbf83ed2"
  },
  {
    "url": "images/diagram.png",
    "revision": "519da03f4a1d31fffbeac96b2804bcd2"
  },
  {
    "url": "images/favicon.png",
    "revision": "9144652d53e2cb1f58b31434be1754dc"
  },
  {
    "url": "images/icons/120.png",
    "revision": "21d61a59a8b81e2f2b7c1c4498931403"
  },
  {
    "url": "images/icons/128.png",
    "revision": "52282522bbeedc203932501bae719d3d"
  },
  {
    "url": "images/icons/144.png",
    "revision": "c8e2ba305773c351de6ceb6f541fcda8"
  },
  {
    "url": "images/icons/152.png",
    "revision": "7020b01c65552daefc6a040e98799c3b"
  },
  {
    "url": "images/icons/180.png",
    "revision": "f01084a321ad9222b05b58e70f3a9169"
  },
  {
    "url": "images/icons/192.png",
    "revision": "5b857fb78e5c61ba0a654b8c84114e97"
  },
  {
    "url": "images/icons/384.png",
    "revision": "b5f35dedd751624d3cd125f4131e883e"
  },
  {
    "url": "images/icons/512.png",
    "revision": "e8c8cd801fd9cd4348e0fdd70aedaa07"
  },
  {
    "url": "images/icons/72.png",
    "revision": "6d6096aeb8339449afd43567dec8bcdb"
  },
  {
    "url": "images/icons/96.png",
    "revision": "26887d961394795c8f14b086148c0e61"
  },
  {
    "url": "images/patron-button.png",
    "revision": "8b4321f782e84764e556af3dee32a131"
  },
  {
    "url": "images/wds.png",
    "revision": "8baa2312e5a6a2b57a04cfb7316c0ae8"
  },
  {
    "url": "images/webpack-bundling.png",
    "revision": "e79747a157ff215dc60f91b847fc451b"
  },
  {
    "url": "images/webpack-entry.png",
    "revision": "90e26197b33def35ba574f45774f20d7"
  },
  {
    "url": "index.html",
    "revision": "3459b04489c9bb739dadafb2de5fec58"
  },
  {
    "url": "logo.png",
    "revision": "81da10d7fe4e203f74c1fd5e2d316f5b"
  },
  {
    "url": "logo.svg",
    "revision": "96621d3c37d96ad3bf792fcc848d912f"
  },
  {
    "url": "motivation/fe-ecosystem.html",
    "revision": "56b235d15d6564d035dee8805abd8ba1"
  },
  {
    "url": "motivation/problem-to-solve.html",
    "revision": "a4c0f14e57bbb83ca698d368cee78fdf"
  },
  {
    "url": "motivation/why-webpack.html",
    "revision": "82d650d7c8c54d9bb9d4c1ff0ce0f612"
  },
  {
    "url": "roadmap.html",
    "revision": "c2dfbe88f461d4cad89864343bdbc73e"
  },
  {
    "url": "tutorials/code-splitting.html",
    "revision": "9099ec2a5a596eb6f42cf72eac01d73e"
  },
  {
    "url": "tutorials/plugins.html",
    "revision": "f765f6a316d1eba7a720e4f24dc8803c"
  },
  {
    "url": "tutorials/webpack-dev-server.html",
    "revision": "e34e9beb01708bde7ca52bf5ccb4376b"
  },
  {
    "url": "webpack/module-bundler.html",
    "revision": "1b827c02f237c8cdb7c2b37483425535"
  },
  {
    "url": "webpack/modules.html",
    "revision": "e123e3c30a197efa61811f4450173f2c"
  },
  {
    "url": "webpack/web-task-manager.html",
    "revision": "880c1dbcfc262358833ab48145a9e2a3"
  },
  {
    "url": "webpack/what-is-webpack.html",
    "revision": "340c144ab5eaf481889dce4df12c047c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
