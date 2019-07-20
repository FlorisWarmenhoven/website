/* global Form, CanvasSpace, Line, Vector */

let space;

const floatySpace = () => {
  const colors = ['#FF3F8E', '#04C2C9', '#2E55C1', '#bac12e'];

  space = new CanvasSpace('canvas').setup({ bgcolor: '#252934' });
  const form = new Form(space);

  const pts = [];
  const center = space.size.$divide(1.8);
  const angle = -(window.innerWidth * 0.5);
  let count = window.innerWidth * 0.05;
  if (count > 151) count = 151;
  const line = new Line(0, angle).to(space.size.x, 0);
  const mouse = center.clone();

  const r = Math.min(space.size.x, space.size.y) * 1;
  for (let i = 0; i < count; i += 1) {
    const p = new Vector(
      Math.random() * r - Math.random() * r,
      Math.random() * r - Math.random() * r,
    );
    p.moveBy(center).rotate2D((i * Math.PI) / count, center);
    p.brightness = 0.1;
    pts.push(p);
  }

  space.add({
    animate: () => {
      for (let i = 0; i < pts.length; i += 1) {
        const pt = pts[i];

        pt.rotate2D(0.03 / 20, center);
        form
          .stroke(false)
          .fill(colors[i % 4])
          .point(pt, 1);

        const ln = new Line(pt).to(line.getPerpendicularFromPoint(pt));

        const distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse));

        if (distFromMouse < 50) {
          if (pts[i].brightness < 0.3) pts[i].brightness += 0.015;
        } else if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01;

        const color = `rgba(255,255,255,${pts[i].brightness})`;
        form
          .stroke(color)
          .fill(true)
          .line(ln);
      }
    },

    onMouseAction: (type, x, y) => {
      if (type === 'move') {
        mouse.set(x, y);
      }
    },

    onTouchAction: (type, x, y) => {
      this.onMouseAction(type, x, y);
    },
  });

  space.bindMouse();
  space.play();
};

floatySpace();
setTimeout(() => floatySpace(), 10);

window.onresize = () => {
  space.removeAll();
  floatySpace();
};
