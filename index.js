//Se creea el componente colores
AFRAME.registerComponent('colores', {
  schema: {
    interval: { type: 'number', default: 5000 },
    defaultColor: { type: 'color', default: '#fff' }
  },

  init: function () {
    var el = this.el
    var interval = this.data.interval
    //El cubo va a tener esta paleta de colores
    var colors = ["yellow", "blue", "red", "green", "orange"]

    var i = 0
    //Se le asigna el componente coloeres al cubo
    el.setAttribute('color', colors[0])
    //Se crea un ciclo para reiniciar los colores una vez finalice el naranja
    this.colorInterval = setInterval(function () {
      i = (i + 1) % colors.length
      el.setAttribute('color', colors[i])
    }, interval)
  },


})
