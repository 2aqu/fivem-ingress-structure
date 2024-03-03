const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/heartbeat', (req, res) => {
  const options = {
    annenfahise: `http://${req.headers.host}/annenfahise`,
    babanfahise: `http://${req.headers.host}/babanfahise`
  };

  res.json(options);
});

app.get('/annenfahise', (req, res) => {
  fs.readFile('annenfahise.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Dosya okuma hatası:', err);
      return res.status(500).json({ error: 'annenfahise.json okunamadı' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      console.error('JSON dönüşüm hatası:', error);
      return res.status(500).json({ error: 'annenfahise.json geçersiz JSON içeriyor' });
    }
  });
});

app.get('/babanfahise', (req, res) => {
  fs.readFile('babanfahise.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Dosya okuma hatası:', err);
      return res.status(500).json({ error: 'babanfahise.json okunamadı' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      console.error('JSON dönüşüm hatası:', error);
      return res.status(500).json({ error: 'babanfahise.json geçersiz JSON içeriyor' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başlatıldı.`);
});
