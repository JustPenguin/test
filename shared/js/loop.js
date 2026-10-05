// 共用遊戲迴圈:update 用固定時間步長,render 每個畫面幀呼叫一次
export function startLoop(update, render, step = 1000 / 60) {
  let last = performance.now(), acc = 0;
  function frame(now) {
    acc += Math.min(now - last, 250);
    last = now;
    while (acc >= step) { update(step / 1000); acc -= step; }
    render();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
