const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function colorQuick (shade, hue) {
  let color = '#'
  let high = 16 * shade
  let low = high / 2

  switch (hue) {
    case 'red':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 4; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      break

    case 'yellow':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      break

    case 'green':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      break

    case 'magenta':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      break

    case 'cyan':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      break

    case 'blue':
      for (let i = 0; i < 4; i++) { color += hex[Math.floor(Math.random() * (high - low))] }
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low)) + low)] }
      break

    case 'grayscale':
      for (let i = 0; i < 2; i++) { color += hex[Math.floor((Math.random() * (high - low) + low))] }
      color += color.substring(1, 3).repeat(2)
      break

    default:
      for (let i = 0; i < 6; i++) { color += hex[Math.floor(Math.random() * 16)] }
  }

  return color
}

let elShade = 1

console.log('colorQuick(red): ', colorQuick(0.8, 'red'))

let magentaBox = document.getElementById('magenta')
magentaBox.style.backgroundColor = colorQuick(elShade, 'magenta')
magentaBox.style.color = colorQuick(elShade, 'magenta')

let redBox = document.getElementById('red')
redBox.style.backgroundColor = colorQuick(elShade, 'red')
redBox.style.color = colorQuick(elShade, 'red')

let yellowBox = document.getElementById('yellow')
yellowBox.style.backgroundColor = colorQuick(elShade, 'yellow')
yellowBox.style.color = colorQuick(elShade, 'yellow')

let greenBox = document.getElementById('green')
greenBox.style.backgroundColor = colorQuick(elShade, 'green')
greenBox.style.color = colorQuick(elShade, 'green')

let cyanBox = document.getElementById('cyan')
cyanBox.style.backgroundColor = colorQuick(elShade, 'cyan')
cyanBox.style.color = colorQuick(elShade, 'cyan')

let blueBox = document.getElementById('blue')
blueBox.style.backgroundColor = colorQuick(elShade, 'blue')
blueBox.style.color = colorQuick(elShade, 'blue')

let palette = document.getElementById('palette')

let swatch = document.createElement('div')
swatch.style.width = '100px'
swatch.style.height = '100px'
swatch.style.float = 'left'
swatch.style.backgroundColor = colorQuick(elShade, 'grayscale')

palette.appendChild(swatch)

// module.exports = colorQuick
