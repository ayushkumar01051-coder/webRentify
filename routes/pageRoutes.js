const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: "Rentify - Rent What You Need, List What You Don't",
    activePage: 'home',
  });
});

router.get('/browse', (req, res) => {
  res.render('browse', {
    title: 'Browse Items - Rentify',
    activePage: 'browse',
  });
});

router.get('/features', (req, res) => {
  res.render('features', {
    title: 'How It Works & Features - Rentify',
    activePage: 'features',
  });
});

router.get('/pricing', (req, res) => {
  res.render('pricing', {
    title: 'Pricing & Plans - Rentify',
    activePage: 'pricing',
  });
});

router.get('/reviews', (req, res) => {
  res.render('reviews', {
    title: 'Item Reviews - Rentify',
    activePage: 'reviews',
  });
});

router.get('/submit-review', (req, res) => {
  res.render('submit-review', {
    title: 'Submit a Review - Rentify',
    activePage: 'submit-review',
  });
});

router.get('/list-item', (req, res) => {
  res.render('list-item', {
    title: 'List Your Item - Rentify',
    activePage: 'list-item',
  });
});

router.get('/product-details', (req, res) => {
  res.render('product-details', {
    title: 'Product Details - Rentify',
    activePage: 'browse',
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Sign In - Rentify',
    activePage: 'login',
  });
});

router.get('/signup', (req, res) => {
  res.render('signup', {
    title: 'Sign Up - Rentify',
    activePage: 'signup',
  });
});

module.exports = router;
