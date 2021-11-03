const axios = require('axios');
const express = require('express');
const app = express();
var parseString = require('xml2js').parseString;
const fs = require('fs');
var db = JSON.parse(fs.readFileSync("db.json").toString());
const port = 3000

// https://www.allrecipes.com/sitemaps/recipe/7/sitemap.xml
axios.get('https://www.allrecipes.com/sitemaps/recipe/1/sitemap.xml')
.then(function (response) {
	// handle success
	console.log(response)
	parseString(response.data, function (err, res) {
		console.log(res.urlset.url)
			res.urlset.url.forEach(e => {
				db.push(e.loc[0].toString())
			})

		fs.writeFileSync("db.json", JSON.stringify(db, null, null), 'utf-8')
	});
})
.catch(error => console.log(error))

axios.get('https://www.allrecipes.com/sitemaps/recipe/2/sitemap.xml')
.then(function (response) {
	// handle success
	console.log(response)
	parseString(response.data, function (err, res) {
		console.log(res.urlset.url)
			res.urlset.url.forEach(e => {
				db.push(e.loc[0].toString())
			})

		fs.writeFileSync("db.json", JSON.stringify(db, null, null), 'utf-8')
	});
})
.catch(error => console.log(error))


axios.get('https://www.allrecipes.com/sitemaps/recipe/3/sitemap.xml')
.then(function (response) {
	// handle success
	console.log(response)
	parseString(response.data, function (err, res) {
		console.log(res.urlset.url)
			res.urlset.url.forEach(e => {
				db.push(e.loc[0].toString())
			})

		fs.writeFileSync("db.json", JSON.stringify(db, null, null), 'utf-8')
	});
})
.catch(error => console.log(error))

axios.get('https://www.allrecipes.com/sitemaps/recipe/4/sitemap.xml')
.then(function (response) {
	// handle success
	console.log(response)
	parseString(response.data, function (err, res) {
		console.log(res.urlset.url)
			res.urlset.url.forEach(e => {
				db.push(e.loc[0].toString())
			})

		fs.writeFileSync("db.json", JSON.stringify(db, null, null), 'utf-8')
	});
})
.catch(error => console.log(error))

axios.get('https://www.allrecipes.com/sitemaps/recipe/5/sitemap.xml')
.then(function (response) {
	// handle success
	console.log(response)
	parseString(response.data, function (err, res) {
		console.log(res.urlset.url)
			res.urlset.url.forEach(e => {
				db.push(e.loc[0].toString())
			})

		fs.writeFileSync("db.json", JSON.stringify(db, null, null), 'utf-8')
	});
})
.catch(error => console.log(error))

axios.get('https://www.allrecipes.com/sitemaps/recipe/6/sitemap.xml')
.then(function (response) {
	// handle success
	console.log(response)
	parseString(response.data, function (err, res) {
		console.log(res.urlset.url)
			res.urlset.url.forEach(e => {
				db.push(e.loc[0].toString())
			})

		fs.writeFileSync("db.json", JSON.stringify(db, null, null), 'utf-8')
	});
})
.catch(error => console.log(error))

axios.get('https://www.allrecipes.com/sitemaps/recipe/7/sitemap.xml')
.then(function (response) {
	// handle success
	console.log(response)
	parseString(response.data, function (err, res) {
		console.log(res.urlset.url)
			res.urlset.url.forEach(e => {
				db.push(e.loc[0].toString())
			})

		fs.writeFileSync("db.json", JSON.stringify(db, null, null), 'utf-8')
	});
})
.catch(error => console.log(error))


axios.get('https://www.allrecipes.com/sitemaps/recipe/8/sitemap.xml')
.then(function (response) {
	// handle success
	console.log(response)
	parseString(response.data, function (err, res) {
		console.log(res.urlset.url)
			res.urlset.url.forEach(e => {
				db.push(e.loc[0].toString())
			})

		fs.writeFileSync("db.json", JSON.stringify(db, null, null), 'utf-8')
	});
})
.catch(error => console.log(error))


app.get('/', (req, res) => {
  res.send(db)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})