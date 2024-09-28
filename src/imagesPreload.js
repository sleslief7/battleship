const images = [
  'battleship.png',
  'carrier.png',
  'cruiser.png',
  'destroyer.png',
  'submarine.png',
  'ocean.png',
  'rotated-battleship.png',
  'rotated-carrier.png',
  'rotated-cruiser.png',
  'rotated-destroyer.png',
  'rotated-submarine.png',
];

function preloadImages(list) {
  const preloadedImages = [];
  for (let i = 0; i < list.length; i++) {
    const img = new Image();
    img.src = list[i];
    preloadedImages.push(img);
  }
}

preloadImages(images);
