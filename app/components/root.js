import Component from '@ember/component';

export default class Root extends Component {
  show = false;

  toggle() {
    this.toggleProperty('show');
  }
}
