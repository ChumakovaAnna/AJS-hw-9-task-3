import ArrayBufferConverter from "./arrayBufferConverter";

console.log("worked");
const buf = new ArrayBufferConverter("Hello, World!");
buf.load();
console.log(buf.toString());
