var palette = [
  '#000000',
  '#A7A9AC',
  '#ED037C',
  '#009BDF',
  '#26AAA5',
  '#349E49',
  '#F47920',
];

var msg = "SOFTWARE OF SUMMER";

var DEBUG = false;  // show bounding lines

var margin = 20;
var padding = 10;

font_size = 50;

var anchor = new Point(margin, margin);
var text = new PointText({
  content: 'SOFTWARE OF SUMMER',
  fillColor: '#FFF',
  fontFamily: 'DINOT',
  fontSize: font_size,
  justification: 'center',
});

var textHeight = text.bounds.height * 0.6;  // account for text height funk
var textWidth = text.bounds.width;
var rect = new Path.Rectangle({
  position: paper.view.center,
  size: new Size(textWidth, textHeight) + [padding * 2, padding * 2],
  fillColor: palette[Math.floor(Math.random() * palette.length)],
}).insertBelow(text);
text.point = rect.position + [0, textHeight / 2];
project.activeLayer.skew([-20, 0]);  // skew everything 20 degrees

// resize canvas to fit borders + margin and reposition sign to center
paper.view.viewSize.width = rect.bounds.width + margin * 2;
paper.view.viewSize.height = rect.bounds.height + margin * 2;
project.activeLayer.position = paper.view.center;

if (DEBUG) {  // show bounding lines
  text.selected = true;
  Path.Rectangle({
    position: rect.position,
    size: new Size(textWidth, textHeight),
    selected: true,
  });
  rect.position.selected = true;
};
