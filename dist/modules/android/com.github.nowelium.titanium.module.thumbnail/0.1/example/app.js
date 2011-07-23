var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

var thumbnail = require('com.github.nowelium.titanium.module.thumbnail');
Ti.API.info("module is => " + thumbnail);

var media = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'hoge.png').read();
var blob_1 = thumbnail.resize(media);
var blob_2 = thumbnail.resizeTo(media, {
  width: 32,
  height: 32,
  keepAspect: true
})
