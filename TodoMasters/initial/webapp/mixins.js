// MIXIN that will implement Observer pattern.
// So that we can use this observer functions on other classes aswell

export const observerMixin = {
    observers: new Set(),
    addObserver(obs)  {this.observers.add(obs)},
    removeObserver(obs) {this.observers.delete(obs)},
    notify() {this.observers.forEach(obs => obs());}
}