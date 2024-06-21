const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const blogs = [
  {
    title: "The Evolution of Artificial Intelligence",
    img: "https://connectjaya.com/wp-content/uploads/2020/08/cropped-AdobeStock_20-1.jpg",
    content:
      "In recent years, artificial intelligence (AI) has rapidly transformed various industries, from healthcare to finance and beyond. This blog explores the evolution of AI, starting from its humble beginnings in the 1950s to the sophisticated machine learning algorithms and neural networks of today. It covers key milestones, such as the development of expert systems, the rise of deep learning, and the ethical implications of AI technologies. Readers will gain insights into how AI is shaping the future and its potential impact on society.",
  },
  {
    title: "Mastering Data Visualization with Python",
    img: "https://www.arrcap.com/media/2019/11/CapitalStructureAndRestructuring.jpg",
    content: "Data visualization is crucial for understanding complex datasets and making informed decisions. This blog dives deep into Python libraries such as Matplotlib, Seaborn, and Plotly, offering readers a comprehensive guide to creating compelling visualizations. It covers basic to advanced techniques, including scatter plots, histograms, heatmaps, and interactive dashboards. Whether you're a data scientist, analyst, or enthusiast, this blog equips you with the skills to visualize data effectively and communicate insights visually.",
  },
  {
    title: "Sustainable Practices in Urban Planning",
    img: "https://th.bing.com/th/id/OIP.VdR4UbcwZ4X1OjPRBST-AQHaE8?rs=1&pid=ImgDetMain",
    content: "Urbanization presents challenges for sustainability, but innovative urban planning practices offer solutions. This blog examines sustainable urban planning strategies implemented globally, from green infrastructure and renewable energy integration to mixed-use zoning and smart transportation systems. It explores case studies of cities like Copenhagen and Singapore that have successfully implemented sustainable initiatives. By highlighting the importance of resilience and adaptability in urban development, this blog inspires readers to advocate for sustainable practices in their communities.",
  },
];

//[get request]

app.get("/blogs", (req, res) => {
  res.json(blogs);
});

//[post request]

app.post("/blogs", (req, res) => {
  const { title,img, content } = req.body;
  const newBlog = { title,img, content };
  console.log(newBlog);
  blogs.push(newBlog);
  res.status(200).json({ blog: newBlog });
});

app.listen(9000, () => {
  console.log("server is running");
});
