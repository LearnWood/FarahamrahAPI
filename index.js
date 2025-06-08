const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/api/materials/recommend', (req, res) => {
  const { spaceType, budget, mbtiType, style, region } = req.body;
  const sampleResponse = {
    recommendations: [
      {
        material: "های‌گلاس سفید MDF",
        style: style,
        price_estimate: "2,100,000",
        compatible_with: [mbtiType],
        image: "https://via.placeholder.com/150",
        reason: `مناسب برای فضاهای ${mbtiType}`
      }
    ]
  };
  res.json(sampleResponse);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});