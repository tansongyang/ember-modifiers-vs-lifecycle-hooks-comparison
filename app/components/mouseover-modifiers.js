import Component from '@ember/component';

export default class MouseoverModifiers extends Component {
  highlightColor = 'cyan';
  x = 0;
  y = 0;

  highlight(event) {
    event.target.style.background = this.highlightColor;
  }

  setCoordinates(event) {
    this.set('x', event.x);
    this.set('y', event.y);
  }

  clear() {
    event.target.style.background = null;
    this.set('x', 0);
    this.set('y', 0);
  }
}
