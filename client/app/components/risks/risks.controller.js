class RisksController {
  constructor() {
    this.propertyName = 'rank';
    this.isReversed = false;
  }

  sortBy(propertyName) {
    this.isReversed = (this.propertyName === propertyName) ? !this.isReversed : false;
    this.propertyName = propertyName;
  }

  isSortedBy(label) {
    return this.propertyName === label;
  }

  getSortIcon() {
    return this.isReversed ? 'arrow_drop_up' : 'arrow_drop_down';
  }
}

export default RisksController;
