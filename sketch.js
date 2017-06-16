var r = new Rune({
  container: "body",
  width: 600,
  height: 400,
  debug: true,
});


var container = r.polygon(0, 0)
  .lineTo(0, 0)
  .lineTo(100, 0)
  .lineTo(100, 50)
  .lineTo(0, 50)
  // automatically closes

r.draw();
