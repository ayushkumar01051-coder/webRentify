const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/userModel');

const router = express.Router();

// 1. READ ALL USERS
router.get('/read', async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.render('read', {
      title: 'Community Members - Rentify',
      activePage: 'users',
      users,
    });
  } catch (err) {
    next(err);
  }
});

// 2. CREATE - Render Form
router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create Member - Rentify',
    activePage: 'users',
    error: null,
  });
});

// 2. CREATE - Handle Submission
router.post('/create', async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const userCount = await User.countDocuments();
    const avatarIndex = (userCount % 6) + 1;
    const image = `/images/avatar${avatarIndex}.png`;

    await User.create({ name, email, image });
    res.redirect('/read');
  } catch (err) {
    if (err.code === 11000 || err.name === 'ValidationError') {
      return res.status(400).render('create', {
        title: 'Create Member - Rentify',
        activePage: 'users',
        error: err.code === 11000 ? 'A member with that email already exists.' : err.message,
      });
    }
    next(err);
  }
});

// 3. UPDATE - Render Edit Form
router.get('/edit/:id', async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).render('404', {
        title: 'Member Not Found - Rentify',
        activePage: 'users',
        requestedPath: req.originalUrl,
      });
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).render('404', {
        title: 'Member Not Found - Rentify',
        activePage: 'users',
        requestedPath: req.originalUrl,
      });
    }

    res.render('edit', {
      title: 'Edit Member - Rentify',
      activePage: 'users',
      user,
      error: null,
    });
  } catch (err) {
    next(err);
  }
});

// 3. UPDATE - Handle Submission
router.post('/update/:id', async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.redirect('/read');
    }

    const { name, email } = req.body;
    await User.findByIdAndUpdate(
      req.params.id,
      { name, email },
      { new: true, runValidators: true }
    );
    res.redirect('/read');
  } catch (err) {
    next(err);
  }
});

// 4. DELETE - Prefer POST; keep GET fallback for compatibility with anchor links
router.post('/delete/:id', async (req, res, next) => {
  try {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      await User.findByIdAndDelete(req.params.id);
    }
    res.redirect('/read');
  } catch (err) {
    next(err);
  }
});

router.get('/delete/:id', async (req, res, next) => {
  try {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      await User.findByIdAndDelete(req.params.id);
    }
    res.redirect('/read');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
