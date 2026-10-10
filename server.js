// server.js

// Bring in express framework / path framework
require("dotenv").config();
const {createClient} = require('@supabase/supabase-js');

const express = require("express");
const path = require('path');
const { compileFunction } = require("vm");

// instantiate variable app w/ instance of express
const app = express()
const PORT = process.env.PORT || 3000;

// Register template engine
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views");

// Required for parsing inbound JSON payloads from form body
app.use(express.json()); 

// Initialize Supabase DB client
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
// // const ordersTable = process.env.orders_table;
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 1. Serve compiled static frontend assets from 'public' directory
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));

// ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public",'/index.html'));
    // res.render(); FUTURE DEPLOYMENT - DO NOT DELETE
});

// Keep local port listener for running 'npm start or node server.js' on local machine:
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export express app (required for vercel deployments!)
module.exports = app;