require('waypoints/lib/noframework.waypoints.min.js');

export default function () {
  const turbineSvg = document.querySelector('#turbine');

  const waypoint = new Waypoint({
    element: document.querySelector('#turbine'),
    handler() {
      turbineSvg.classList.add('support__img--active');
    },
    offset: '25%',
  });
}
