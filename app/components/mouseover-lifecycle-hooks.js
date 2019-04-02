import Component from '@ember/component';

export default class MouseoverLifecycleHooks extends Component {
  highlightColor = 'yellow';
  x = 0;
  y = 0;

  _mouseTarget = null;
  _highlight = () => this.highlight();
  _setCoordinates = event => this.setCoordinates(event);
  _clear = () => this.clear();

  didInsertElement() {
    this._mouseTarget = this.element.querySelector(
      '[data-test-mouseover-lifecycle-hooks="root"]'
    );
    this._mouseTarget.addEventListener('mouseover', this._highlight);
    this._mouseTarget.addEventListener('mousemove', this._setCoordinates);
    this._mouseTarget.addEventListener('mouseout', this._clear);
  }

  willDestroyElement() {
    this._mouseTarget.removeEventListener('mouseover', this._highlight);
    this._mouseTarget.removeEventListener('mousemove', this._setCoordinates);
    this._mouseTarget.removeEventListener('mouseout', this._clear);
  }

  highlight() {
    this._mouseTarget.style.background = this.highlightColor;
  }

  setCoordinates(event) {
    this.set('x', event.x);
    this.set('y', event.y);
  }

  clear() {
    this.set('x', 0);
    this.set('y', 0);
    this._mouseTarget.style.background = null;
  }
}
