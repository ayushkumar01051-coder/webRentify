require('dotenv').config();
const express = require('express');
const path = require('path');

const connectDB = require('./config/db');
const pageRoutes = require('./routes/pageRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB before handling requests
connectDB();

// View engine & request parsing
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Redirect legacy .html links (preserving query params like ?search=... or ?id=...)
app.get('/:page.html', (req, res) => {
  const page = req.params.page === 'index' ? '' : req.params.page;
  const queryIndex = req.originalUrl.indexOf('?');
  const query = queryIndex !== -1 ? req.originalUrl.slice(queryIndex) : '';
  res.redirect(301, `/${page}${query}`);
});

// Modular route handlers
app.use('/', pageRoutes);
app.use('/', userRoutes);

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found - Rentify',
    activePage: '',
    requestedPath: req.originalUrl,
  });
});

// Global Express error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(err.status || 500).render('404', {
    title: 'Something Went Wrong - Rentify',
    activePage: '',
    requestedPath: req.originalUrl,
    errorMessage: 'An unexpected server error occurred. Please try again.',
  });
});

app.listen(PORT, () => {
  console.log(`Rentify Server running on http://localhost:${PORT}`);
});
