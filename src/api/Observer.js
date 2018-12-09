export class Observer {
  constructor({ options, observeOnce }) {
    this.options = options || {
      threshold: 0
    };
    this.observeOnce = observeOnce || false;
    this._elementMap = new Map();
    this.obsvr = new IntersectionObserver(this.callBack, this.options);
  }

  callBack = entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      this._elementMap.get(entry.target)(entry);
      this.observeOnce && this.unobserve(entry.target);
    });
  };

  observe = (target, onIntersect) => {
    if (!target) return;
    this._elementMap.set(target, onIntersect);
    this.obsvr.observe(target);
  };

  unobserve = target => {
    if (!target) return;
    this.obsvr.unobserve(target);
    this._elementMap.delete(target);
  };
}

export default Observer;
