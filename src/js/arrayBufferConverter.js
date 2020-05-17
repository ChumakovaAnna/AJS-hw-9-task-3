export default class ArrayBufferConverter {
  constructor(ele) {
    this.buffer = ele;
    this.arrBuffer = new ArrayBuffer(this.buffer.length);
    this.arrBufferView = new Uint8Array(this.arrBuffer);
  }

  load() {
    for (let i = 0; i < this.arrBufferView.length; i += 1) {
      this.arrBufferView[i] = this.buffer.charCodeAt(i);
    }
  }

  toString() {
    this.string = "";
    for (let i = 0; i < this.arrBufferView.length; i += 1) {
      this.string += String.fromCharCode(this.arrBufferView[i]);
    }
    return this.string;
  }
}
