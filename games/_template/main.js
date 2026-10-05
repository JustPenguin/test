import { startLoop } from '../../shared/js/loop.js';
import { keys } from '../../shared/js/input.js';

const ctx = document.getElementById('game').getContext('2d');
const player = { x: 300, y: 160, size: 40, speed: 200 };

function update(dt) {
  if (keys.has('ArrowLeft'))  player.x -= player.speed * dt;
  if (keys.has('ArrowRight')) player.x += player.speed * dt;
  if (keys.has('ArrowUp'))    player.y -= player.speed * dt;
  if (keys.has('ArrowDown'))  player.y += player.speed * dt;
}

function render() {
  ctx.clearRect(0, 0, 640, 360);
  ctx.fillStyle = '#6cf';
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

startLoop(update, render);
