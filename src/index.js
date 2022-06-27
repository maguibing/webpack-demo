import _ from 'lodash'
import './css/index.css'
import './css/index.less'
function component() {
  var element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ',')

  return element
}

class GirlFriend {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say() {
    console.log(`我叫${this.name}，我今年${this.age}岁。很高兴认识你`)
  }
}

const girl = new GirlFriend('Alice', 22)

girl.say()

document.body.appendChild(component())
