// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.coordinatespace
// Description:Coordinate space goes from top-left to bottom-right
// Note:<p class="notes">This should not be upside down.

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Coordinate space goes from top-left to bottom-right");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#00f';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#0ff';
ctx.fillRect(0, 0, 50, 25);
_assertPixel(offscreenCanvas, 25,12, 0,255,255,255, "25,12", "0,255,255,255");
_assertPixel(offscreenCanvas, 75,12, 0,0,255,255, "75,12", "0,0,255,255");
_assertPixel(offscreenCanvas, 25,37, 0,0,255,255, "25,37", "0,0,255,255");
_assertPixel(offscreenCanvas, 75,37, 0,0,255,255, "75,37", "0,0,255,255");
t.done();

});
done();