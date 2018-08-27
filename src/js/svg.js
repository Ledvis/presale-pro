require('waypoints/lib/noframework.waypoints.min.js');

export default function () {
  const svgImages = document.querySelectorAll('.animate');

  svgImages.forEach((svg) => {
    const waypoint = new Waypoint({
      element: svg,
      handler() {
        svg.classList.add('animate--active');
      },
      offset: '25%',
    });
  });
}
