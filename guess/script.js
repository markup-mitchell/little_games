let data = {
   frame: document.querySelector('#frame'),
//    image: [     'url("https://upload.wikimedia.org/wikipedia/commons/5/54/Fire_Engine_Clay_Twp.jpg")',
//      'url("https://upload.wikimedia.org/wikipedia/commons/6/63/African_elephant_warning_raised_trunk.jpg")',
//       'url("http://competeoutsidethebox.com/wp-content/uploads/dinosaur.jpg")',
//      'url("https://www.pbcexpo.com.au/assets/Uploads/_resampled/CroppedFocusedImageWzEyMDAsNjMwLCJ5Iiw4M10/Baby-6.jpg")',
//      'url("http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/2015/03/06/darpa-atlas-robot.jpg")',
//      'url("https://fsmedia.imgix.net/2c/f5/26/db/9e29/4942/8346/56ab9d4ef426/the-soyuz-tma-19m-rocket-with-expedition-46-soyuz-commander-yuri-malenchenko-of-the-russian-federal.jpeg")',   'url("http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-FwsgxoQrNvelepBpZYlfdosa_7a4TKiob2NUQHNjOVO4ezl7B/")',
//      'url("http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg")',
//       'url("http://www.thelisteningblog.com/wp-content/uploads/2010/04/ScallopShell_jpg.jpg")',
//      'url("http://www.devoncrab.com/images/slider_image_crab_700_mob.png")',
//      'url("http://www.freeiconspng.com/uploads/lion-sleeping-png-8.png")',
//      'url("http://pngimg.com/uploads/fox/fox_PNG23171.png"',  
//      'url("http://t03.deviantart.net/F9w-wMbuqQaYHJhJu8JyiQG-7cQ=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre03/4338/th/pre/f/2012/293/6/a/squirrel_png_by_lg_design-d5ig49y.png")',
//      'url("http://pngimg.com/uploads/hedgehog/hedgehog_PNG13.png")'
//    ],
   image: [ 'url("http://pngimg.com/uploads/strawberry/strawberry_PNG2595.png")',
            'url("http://pngimg.com/uploads/lemon/lemon_PNG3877.png")',
            'url("http://pngimg.com/uploads/camel/camel_PNG23431.png")',
            'url("http://pngimg.com/uploads/hippo/hippo_PNG16.png")',
            'url("http://pre04.deviantart.net/9cc1/th/pre/i/2012/340/8/7/png_rabbit_by_moonglowlilly-d5n7yiz.png")',
            'url("http://img05.deviantart.net/bb3e/i/2013/004/1/3/frog_by_moonglowlilly-d5qdq81.png")',
            'url("http://img11.deviantart.net/aefe/i/2012/309/7/a/snaky_png_by_paradise234-d5k2x0w.png")',
            'url("http://img05.deviantart.net/71c2/i/2012/305/1/7/snail_by_frank_1956-d5jomn1.png")',
            'url("http://pre03.deviantart.net/e668/th/pre/f/2010/057/a/6/usn_aircraft_model_plane_by_fantasystock.png")',
            'url("https://img02.deviantart.net/89e5/i/2011/330/f/5/precut_deer_png_by_kayleero-d4he5v0.png")'
   ],
   bgColor: [
   '#D0D102',
   '#E54028',
   '#F18D05',
   '#01A4A4',
   '#113F8C'
   ],
   mainCol: 'pink', // placeholder
   effect: { // should be in controller?
      fade: function(e) {
         e.target.style.opacity = 0;
         },
      rollUp: function(e) {
         e.target.style.height = 0;
         },
      revealY: function(e) {
         e.target.style.transform="scaleY(0)";
         },
      revealX: function(e) {
         e.target.style.transform="scaleX(0)";
         },
      spin: function(e) {
         e.target.style.transform='rotate(180deg)';
         this.fade(e);
         },
      round: function(e) {
         e.target.style.borderRadius='50%';
         controller.rand([this.fade(e), this.scale(e)])
         },
      scale: function(e) {
         e.target.style.transform = 'scale(0,0)';
         },
   },
   frameHeight: null, // used?
   frameWidth: null, // used?
}

let controller = {
   init: function() {
      data.mainCol = this.rand(data.bgColor);
      view.init()
   },
   rand: function(array) {
      let pick = Math.floor(Math.random() * array.length);
      return array[pick];
   },
   setFrameSize: function() {
      let rect = data.frame.getBoundingClientRect();
      data.frameHeight = rect.height;
      data.frameWidth = rect.width;
   },
   makeSquare: function(size) {
      return `<div class="square" onclick="view.show(event)" style="width:${size}vw; height:${size}vw;cursor:pointer;background-color:${data.mainCol};"></div>`
      }, 
 
}

let view = {
   init: function() {
      data.frame.style.backgroundColor = data.mainCol; 
      document.body.style.backgroundColor = data.mainCol;
      data.frame.style.backgroundImage =  controller.rand(data.image);// controller?
      this.tileGen();
   },
   show: function(e) {
      // debugger;
      let f = controller.rand(Object.keys(data.effect)); // wrong? view accessing data directly?
      data.effect[f](e);
   },
   tileGen: function() {
      for (i=0; i<50; i++) {
         let newSquare = controller.makeSquare(8);
   data.frame.insertAdjacentHTML('afterbegin', newSquare);
         }
      },
   showAll: function() {
      while (frame.firstChild) {
         frame.removeChild(frame.firstChild)
         }
//       document.querySelectorAll('.square').forEach(function(square){view.show(square)})
// }
   }
}


controller.init();

