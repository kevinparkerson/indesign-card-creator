#target photoshop

var cards = [];

var doc = app.activeDocument;
var layer, newLayer, pngFile, pngSaveOptions, selection;

for (var i = 0, l = cards.length; i < l; i++) {
	layer = doc.artLayers.getByName('cost');
	layer.textItem.contents = cards[i].cost;

	layer = doc.artLayers.getByName('name');
	layer.textItem.contents = cards[i].name;

	layer = doc.artLayers.getByName('type');
	layer.textItem.contents = (cards[i].type === 'Permanent') ? 'P' : 'I';

	layer = doc.artLayers.getByName('description');
	layer.textItem.contents = cards[i].description;
	newLayer = layer.duplicate();
	newLayer.kind = LayerKind.NORMAL;
	newLayer.cut();
	selection = doc.selection.select([
		[90, 526],
		[725, 526],
		[725, 1014],
		[90, 1014]
	]);
	doc.paste();

	pngFile = File('/Users/kparkerson/Desktop/cards/card_' + i /*(i + 81)*/ + '.png');
	pngSaveOptions = new PNGSaveOptions();
	doc.saveAs(pngFile, pngSaveOptions, true, Extension.LOWERCASE);

	doc.artLayers.getByName('description copy').remove();
	doc.artLayers.getByName('Layer 1').remove();
}
