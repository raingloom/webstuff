let RainSim = (function (RainSim) {
  window.alert(RainSim)
  let updateInterval = 1 / 60 * 1000
  let updateTimer // eslint-disable-line

  // canvas and context access
  let canvas, ctx

  // colors
  let skyStyle = 'rgb(0,0,128)'

  function updateCanvas () {
    drawSky()
  }

  RainSim.init = function () {
    canvas = document.createElement('canvas')
    ctx = canvas.getContext('2d')
    document.body.appendChild(canvas)
    resize()
    window.addEventListener('resize', resize)
    updateCanvas()
    updateTimer = setInterval(updateCanvas, updateInterval)
  }

  function resize (width, height) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  function drawSky () {
    ctx.fillStyle = skyStyle
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  RainSim.getCanvas = function () {
    return canvas
  }

  return RainSim
})(RainSim || {})
