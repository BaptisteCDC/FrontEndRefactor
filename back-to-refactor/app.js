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
    { id: 9, name: 'Landscape.jpg', url: '/images/Landscape3.jpg' },
    { id: 10, name: 'city3.jpg', url: '/images/city3.jpg' },
    { id: 11, name: 'mountains3.jpg', url: '/images/mountains3.jpg' },
    { id: 12, name: 'Ocean3.jpg', url: '/images/Ocean3.jpg' },
    { id: 13, name: 'Landscape4.jpg', url: '/images/Landscape4.jpg' },
    { id: 14, name: 'city4.jpg', url: '/images/city4.jpg' },
    { id: 15, name: 'mountains4.jpg', url: '/images/mountains4.jpg' },
    { id: 16, name: 'Ocean4.jpg', url: '/images/Ocean4.jpg' },
    { id: 17, name: 'Landscape5.jpg', url: '/images/Landscape5.jpg' },
    { id: 18, name: 'city5.jpg', url: '/images/city5.jpg' },
    { id: 19, name: 'mountains5.jpg', url: '/images/mountains5.jpg' },
    { id: 20, name: 'Ocean5.jpg', url: '/images/Ocean5.jpg' },
    { id: 21, name: 'Landscape6.jpg', url: '/images/Landscape6.jpg' },
    { id: 22, name: 'city6.jpg', url: '/images/city6.jpg' },
    { id: 23, name: 'mountains6.jpg', url: '/images/mountains6.jpg' },
    { id: 24, name: 'Ocean6.jpg', url: '/images/Ocean6.jpg' },
    { id: 25, name: 'Landscape7.jpg', url: '/images/Landscape7.jpg' },
    { id: 26, name: 'city7.jpg', url: '/images/city7.jpg' },
    { id: 27, name: 'mountains7.jpg', url: '/images/mountains7.jpg' },
    { id: 28, name: 'Ocean7.jpg', url: '/images/Ocean7.jpg' },
    { id: 29, name: 'Landscape8.jpg', url: '/images/Landscape8.jpg' },
    { id: 30, name: 'city8.jpg', url: '/images/city8.jpg' },
    { id: 31, name: 'mountains8.jpg', url: '/images/mountains8.jpg' },
    { id: 32, name: 'Ocean8.jpg', url: '/images/Ocean8.jpg' },
    { id: 33, name: 'Landscape9.jpg', url: '/images/Landscape9.jpg' },
    { id: 34, name: 'city9.jpg', url: '/images/city9.jpg' },
    { id: 35, name: 'mountains9.jpg', url: '/images/mountains9.jpg' },
    { id: 36, name: 'Ocean9.jpg', url: '/images/Ocean9.jpg' },
    { id: 37, name: 'Landscape10.jpg', url: '/images/Landscape10.jpg' },
    { id: 38, name: 'city10.jpg', url: '/images/city10.jpg' },
    { id: 39, name: 'mountains10.jpg', url: '/images/mountains10.jpg' },
    { id: 40, name: 'Ocean10.jpg', url: '/images/Ocean10.jpg' },
    { id: 41, name: 'Landscape11.jpg', url: '/images/Landscape11.jpg' },
    { id: 42, name: 'city11.jpg', url: '/images/city11.jpg' },
    { id: 43, name: 'mountains11.jpg', url: '/images/mountains11.jpg' },
    { id: 44, name: 'Ocean11.jpg', url: '/images/Ocean11.jpg' },
    { id: 45, name: 'Landscape12.jpg', url: '/images/Landscape12.jpg' },
    { id: 46, name: 'city12.jpg', url: '/images/city12.jpg' },
    { id: 47, name: 'mountains12.jpg', url: '/images/mountains12.jpg' },
    { id: 48, name: 'Ocean12.jpg', url: '/images/Ocean12.jpg' },
    { id: 49, name: 'Landscape13.jpg', url: '/images/Landscape13.jpg' },
    { id: 50, name: 'city13.jpg', url: '/images/city13.jpg' },
    { id: 51, name: 'mountains13.jpg', url: '/images/mountains13.jpg' },
    { id: 52, name: 'Ocean13jpg', url: '/images/Ocean13.jpg' },
    { id: 53, name: 'Landscape14.jpg', url: '/images/Landscape13.jpg' },
    { id: 54, name: 'city14.jpg', url: '/images/city14.jpg' },
    { id: 55, name: 'mountains14.jpg', url: '/images/mountains14.jpg' },
    { id: 56, name: 'Ocean14.jpg', url: '/images/Ocean14.jpg' },

    { id: 57, name: 'Landscape15.jpg', url: '/images/Landscape15.jpg' },
    { id: 58, name: 'city15.jpg', url: '/images/city15.jpg' },
    { id: 59, name: 'mountains15.jpg', url: '/images/mountains15.jpg' },
    { id: 60, name: 'Ocean15.jpg', url: '/images/Ocean15.jpg' },

    { id: 61, name: 'Landscape16.jpg', url: '/images/Landscape16.jpg' },
    { id: 62, name: 'city16.jpg', url: '/images/city16.jpg' },
    { id: 63, name: 'mountains16.jpg', url: '/images/mountains16.jpg' },
    { id: 64, name: 'Ocean16.jpg', url: '/images/Ocean16.jpg' },
  ];
  res.json(images);
});

// Endpoint pour récupérer une image spécifique par ID
app.get('/api/images/:id', (req, res) => {
  const images = [
    { id: 1, name: 'Landscape.jpg', url: '/images/Landscape.jpg' },
    { id: 2, name: 'city.jpg', url: '/images/city.jpg' },
    { id: 3, name: 'mountains.jpg', url: '/images/mountains.jpg' },
    { id: 4, name: 'Ocean.jpg', url: '/images/Ocean.jpg' },
    { id: 5, name: 'Landscape2.jpg', url: '/images/Landscape2.jpg' },
    { id: 6, name: 'city2.jpg', url: '/images/city2.jpg' },
    { id: 7, name: 'mountains2.jpg', url: '/images/mountains2.jpg' },
    { id: 8, name: 'Ocean2.jpg', url: '/images/Ocean2.jpg' },
    { id: 9, name: 'Landscape.jpg', url: '/images/Landscape3.jpg' },
    { id: 10, name: 'city3.jpg', url: '/images/city3.jpg' },
    { id: 11, name: 'mountains3.jpg', url: '/images/mountains3.jpg' },
    { id: 12, name: 'Ocean3.jpg', url: '/images/Ocean3.jpg' },
    { id: 13, name: 'Landscape4.jpg', url: '/images/Landscape4.jpg' },
    { id: 14, name: 'city4.jpg', url: '/images/city4.jpg' },
    { id: 15, name: 'mountains4.jpg', url: '/images/mountains4.jpg' },
    { id: 16, name: 'Ocean4.jpg', url: '/images/Ocean4.jpg' },
    { id: 17, name: 'Landscape5.jpg', url: '/images/Landscape5.jpg' },
    { id: 18, name: 'city5.jpg', url: '/images/city5.jpg' },
    { id: 19, name: 'mountains5.jpg', url: '/images/mountains5.jpg' },
    { id: 20, name: 'Ocean5.jpg', url: '/images/Ocean5.jpg' },
    { id: 21, name: 'Landscape6.jpg', url: '/images/Landscape6.jpg' },
    { id: 22, name: 'city6.jpg', url: '/images/city6.jpg' },
    { id: 23, name: 'mountains6.jpg', url: '/images/mountains6.jpg' },
    { id: 24, name: 'Ocean6.jpg', url: '/images/Ocean6.jpg' },
    { id: 25, name: 'Landscape7.jpg', url: '/images/Landscape7.jpg' },
    { id: 26, name: 'city7.jpg', url: '/images/city7.jpg' },
    { id: 27, name: 'mountains7.jpg', url: '/images/mountains7.jpg' },
    { id: 28, name: 'Ocean7.jpg', url: '/images/Ocean7.jpg' },
    { id: 29, name: 'Landscape8.jpg', url: '/images/Landscape8.jpg' },
    { id: 30, name: 'city8.jpg', url: '/images/city8.jpg' },
    { id: 31, name: 'mountains8.jpg', url: '/images/mountains8.jpg' },
    { id: 32, name: 'Ocean8.jpg', url: '/images/Ocean8.jpg' },
    { id: 33, name: 'Landscape9.jpg', url: '/images/Landscape9.jpg' },
    { id: 34, name: 'city9.jpg', url: '/images/city9.jpg' },
    { id: 35, name: 'mountains9.jpg', url: '/images/mountains9.jpg' },
    { id: 36, name: 'Ocean9.jpg', url: '/images/Ocean9.jpg' },
    { id: 37, name: 'Landscape10.jpg', url: '/images/Landscape10.jpg' },
    { id: 38, name: 'city10.jpg', url: '/images/city10.jpg' },
    { id: 39, name: 'mountains10.jpg', url: '/images/mountains10.jpg' },
    { id: 40, name: 'Ocean10.jpg', url: '/images/Ocean10.jpg' },
    { id: 41, name: 'Landscape11.jpg', url: '/images/Landscape11.jpg' },
    { id: 42, name: 'city11.jpg', url: '/images/city11.jpg' },
    { id: 43, name: 'mountains11.jpg', url: '/images/mountains11.jpg' },
    { id: 44, name: 'Ocean11.jpg', url: '/images/Ocean11.jpg' },
    { id: 45, name: 'Landscape12.jpg', url: '/images/Landscape12.jpg' },
    { id: 46, name: 'city12.jpg', url: '/images/city12.jpg' },
    { id: 47, name: 'mountains12.jpg', url: '/images/mountains12.jpg' },
    { id: 48, name: 'Ocean12.jpg', url: '/images/Ocean12.jpg' },
    { id: 49, name: 'Landscape13.jpg', url: '/images/Landscape13.jpg' },
    { id: 50, name: 'city13.jpg', url: '/images/city13.jpg' },
    { id: 51, name: 'mountains13.jpg', url: '/images/mountains13.jpg' },
    { id: 52, name: 'Ocean13jpg', url: '/images/Ocean13.jpg' },
    { id: 53, name: 'Landscape14.jpg', url: '/images/Landscape13.jpg' },
    { id: 54, name: 'city14.jpg', url: '/images/city14.jpg' },
    { id: 55, name: 'mountains14.jpg', url: '/images/mountains14.jpg' },
    { id: 56, name: 'Ocean14.jpg', url: '/images/Ocean14.jpg' },

    { id: 57, name: 'Landscape15.jpg', url: '/images/Landscape15.jpg' },
    { id: 58, name: 'city15.jpg', url: '/images/city15.jpg' },
    { id: 59, name: 'mountains15.jpg', url: '/images/mountains15.jpg' },
    { id: 60, name: 'Ocean15.jpg', url: '/images/Ocean15.jpg' },

    { id: 61, name: 'Landscape16.jpg', url: '/images/Landscape16.jpg' },
    { id: 62, name: 'city16.jpg', url: '/images/city16.jpg' },
    { id: 63, name: 'mountains16.jpg', url: '/images/mountains16.jpg' },
    { id: 64, name: 'Ocean16.jpg', url: '/images/Ocean16.jpg' },
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
