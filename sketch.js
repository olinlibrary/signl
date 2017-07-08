var palette = [
  '#000000',
  '#A7A9AC',
  '#ED037C',
  '#009BDF',
  '#26AAA5',
  '#349E49',
  '#F47920',
]

var margin = 20
var padding = 10
var textHeight = 50
var textWidth = 565


var r = new Rune({
  container: "body",
  width: textWidth + (margin + padding) * 2,
  height: textHeight + (margin + padding) * 2,
  // background: ''
  debug: true,
});


var container = r.polygon(margin, margin)
  .lineTo(0, 0)
  .lineTo(textWidth + padding * 2, 0)
  .lineTo(textWidth + padding * 2, textHeight + padding * 2)
  .lineTo(0, textHeight + padding * 2)
  .fill(palette[Math.floor(Math.random() * palette.length)])
  .stroke(false)
  // automatically closes

var text = r.text('SOFTWARE OF SUMMER', margin + padding, margin + padding + textHeight)
  .fontFamily('DINOT')
  .fontSize('70px')
  .fill(255, 255, 255)
  .stroke(false)

// r.width(600)

r.draw();
