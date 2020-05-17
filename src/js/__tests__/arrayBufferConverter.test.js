import ArrayBufferConverter from "../arrayBufferConverter";

const buf = new ArrayBufferConverter("This weird-weird world");

test("ArrayBufferConverter", () => {
  buf.load();
  expect(buf.toString()).toBe("This weird-weird world");
});
