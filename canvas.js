class Canvas {
  constructor (elementRef) {
    this.width = elementRef.width
    this.height = elementRef.height
    this.context = elementRef.getContext('2d')
  }
}
