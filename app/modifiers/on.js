import functionalModifier from 'ember-functional-modifiers';

export function on(element, [type, listener]) {
  element.addEventListener(type, listener);
  return () => {
    element.removeEventListener(type, listener);
  };
}

export default functionalModifier(on);
