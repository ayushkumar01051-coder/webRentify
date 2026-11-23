# Rentify — Community Rental & Review Marketplace

Rentify is a Node.js, Express, EJS, and MongoDB/Mongoose web application for browsing local rental gear, reading verified renter reviews, listing items, and managing community members.

## Corrected Project Structure

```text
Web-Project---Rentify/
├── config/
│   └── db.js                   # MongoDB connection using MONGODB_URI
├── models/
│   └── userModel.js            # Mongoose User schema with validation
├── public/
│   ├── css/                    # Shared stylesheets (/css/style.css)
│   ├── data/                   # JSON catalog & review datasets (/data/*.json)
│   ├── images/                 # Product photos, avatars, logos (/images/*)
│   └── js/                     # Client-side scripts (/js/*.js)
├── routes/
│   ├── pageRoutes.js           # Storefront, auth & review page routes
│   └── userRoutes.js           # MongoDB member CRUD routes
├── views/
│   ├── partials/
│   │   ├── head.ejs            # Shared <head> assets
│   │   ├── header.ejs          # Shared navbar with active route state
│   │   └── footer.ejs          # Shared footer
│   ├── index.ejs
│   ├── browse.ejs
│   ├── features.ejs
│   ├── pricing.ejs
│   ├── reviews.ejs
│   ├── submit-review.ejs
│   ├── list-item.ejs
│   ├── product-details.ejs
│   ├── login.ejs
│   ├── signup.ejs
│   ├── read.ejs
│   ├── create.ejs
│   ├── edit.ejs
│   └── 404.ejs
├── .env.example
├── .gitignore
├── app.js                      # Express entry point
├── package.json
└── README.md
```

## Quick Start

1. Keep your existing `public/css/`, `public/data/`, `public/images/`, and `public/js/` files inside `public/`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and confirm `MONGODB_URI` points to your MongoDB instance.
4. Start the server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000`.
