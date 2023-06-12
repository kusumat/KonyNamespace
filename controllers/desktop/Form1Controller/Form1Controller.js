define({ 

generateImg:function generateImg(){
  if(kony.store.getItem('imageData') !== null){
    var test= []; 
    var img = {"base64" : kony.store.getItem('imageData')};
    test.push({
      "ImageSS": img
    });
    this.view.segImage.setData(test);
    kony.store.removeItem('imageData');
    flag = false;
  }
},
takeScreenShot:function takeScreenShot(){
  config = {
  "callback": function(imageData) {
    kony.store.setItem('imageData', imageData);
  } //The imageData parameter contains the base64 String of the screenshot.
};
kony.screenshot(config);
}
});