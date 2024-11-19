const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware pour servir les fichiers statiques
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Endpoint pour récupérer une liste des images disponibles
app.get('/api/images', (req, res) => {
  const images = [
    { id: 1, name: 'Landscape.jpg', url: '/images/Landscape.jpg' },
    { id: 2, name: 'city.jpg', url: '/images/city.jpg' },
    { id: 3, name: 'mountains.jpg', url: '/images/mountains.jpg' },
    { id: 4, name: 'Ocean.jpg', url: '/images/Ocean.jpg' },
    { id: 5, name: 'Landscape2.jpg', url: '/images/Landscape2.jpg' },
    { id: 6, name: 'city2.jpg', url: '/images/city2.jpg' },
    { id: 7, name: 'mountains2.jpg', url: '/images/mountains2.jpg' },
    { id: 8, name: 'Ocean2.jpg', url: '/images/Ocean2.jpg' },
  ];
  res.json(images);
});

// Endpoint pour récupérer une image spécifique par ID
app.get('/api/images/:id', (req, res) => {
  const images = [
    { id: 1, name: 'city.jpg', url: '/images/city.jpg' },
    { id: 2, name: 'Landscape.jpg', url: '/images/Landscape.jpg' },
    { id: 3, name: 'mountains.jpg', url: '/images/mountains.jpg' },
    { id: 4, name: 'Ocean.jpg', url: '/images/Ocean.jpg' },
    { id: 5, name: 'city2.jpg', url: '/images/city2.jpg' },
    { id: 6, name: 'Landscape2.jpg', url: '/images/Landscape2.jpg' },
    { id: 7, name: 'mountains2.jpg', url: '/images/mountains2.jpg' },
    { id: 8, name: 'Ocean2.jpg', url: '/images/Ocean2.jpg' },
  ];

  const image = images.find((img) => img.id === parseInt(req.params.id));
  if (image) {
    res.sendFile(path.join(__dirname, `public/images/${image.name}`));
  } else {
    res.status(404).json({ error: 'Image not found' });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
