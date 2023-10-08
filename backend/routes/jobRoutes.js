const express = require("express");
const jobRoutes = express.Router();
// const puppeteer = require("puppeteer");
// const axios = require("axios");
const jobPostings = require("../models/jobPostings");
jobRoutes.get("/", async function (req, res) {
  res.send("Hey inside job route");
});
jobRoutes.get("/list_jobs", async function (req, res) {
//   const browser = await puppeteer.launch();

//   // Open a new tab
//   const page = await browser.newPage();

//   // Visit the page and wait until network connections are completed
//   await page.goto(
//     "https://www.ziprecruiter.com/jobs-search?search=software-developer&location=NY",
//     { waitUntil: "networkidle2" }
//   );
//   const pa = await page.content();

//   // const pa = await page.evaluate(() => {
//   //     const class_name = 'PuiEXc'; // Replace with the actual class name you want to target
//   // const elements = document.querySelectorAll(`.${class_name}`);
//   // var final = ""

//   // for(let e of elements){
//   // 	final+= e
//   // }

//   // return final
//   // });
//   console.log(pa);
//   // var data = pa.matchAll(/window.mosaic.providerData\["mosaic-provider-jobcards"\]=(\{.+?\});/g);
//   // console.log(JSON.stringify(data))
//   // const elements = await page.$$('[class="PuiEXc"]');

//   // console.log(elements)
//   // Don't forget to close the browser instance to clean up the memory
//   await browser.close();

//   // Print the results
//   // titles.forEach(title => console.log(`- ${title}`))

//   res.end();
});

jobRoutes.get("/list_synthetic_jobs", async function (req, res) {
  res.send(jobPostings);
});
jobRoutes.get("/number_of_synthetic_jobs", async function (req, res) {
  res.send("" + jobPostings.length);
});
jobRoutes.get("/get_synthetic_companies", async function (req, res) {
  var companies = [];
  for (let job of jobPostings) {
    companies.push(job.company);
  }
  res.send(companies);
});
// Cannot work with actual data. Needs to have a seperate list for this purpose
jobRoutes.get("/get_synthetic_titles", async function (req, res) {
  var titles = [];
  for (let job of jobPostings) {
    titles.push(job.title);
  }
  res.send(titles);
});

jobRoutes.get("/get_synthetic_locations", async function (req, res) {
  var locations = [];
  for (let job of jobPostings) {
    if (!locations.includes(job.location)) {
      locations.push(job.location);
    }
  }
  res.send(locations);
});
jobRoutes.get("/search_synthetic_job_by_id/:id", async function (req, res) {
  id = req.params.id;
  if (!id || id == "" || id == null || id == " " || id == 0) {
    res.status(404).send({ Error: "Invalid ID" });
    return;
  }
  for (let job of jobPostings) {
    if (job.job_id == req.params.id) {
      res.send(job);
      return;
    }
  }
  res.status(404).send({ Error: "Job not found" });
});
jobRoutes.get("/search_synthetic_job", async function (req, res) {
  var title = req.query.title;
  var location = req.query.location;
  var company = req.query.company;

  if (title) {
    title = title.replace(/[^a-z0-9]/gi, "");
  }
  if (location) {
    location = location.replace(/[^a-z0-9]/gi, "");
  }
  if (company) {
    company = company.replace(/[^a-z0-9]/gi, "");
  }

  var j = [];
  for (let job of jobPostings) {
    var cur_title = job.job_title.replace(/[^a-z0-9]/gi, "");
    var cur_location = job.location.replace(/[^a-z0-9]/gi, "");
    var cur_company = job.company.replace(/[^a-z0-9]/gi, "");
    if (title && location && company) {
      if (
        cur_title.toLowerCase().includes(title.toLowerCase()) &&
        cur_company.toLowerCase().includes(company.toLowerCase()) &&
        cur_location.toLowerCase().includes(location.toLowerCase())
      ) {
        j.push(job);
      }
    }
    if (title && location && !company) {
      if (
        cur_title.toLowerCase().includes(title.toLowerCase()) &&
        cur_location.toLowerCase().includes(location.toLowerCase())
      ) {
        j.push(job);
      }
    }
    if (title && !location && company) {
      if (
        cur_title.toLowerCase().includes(title.toLowerCase()) &&
        cur_company.toLowerCase().includes(company.toLowerCase())
      ) {
        j.push(job);
      }
    }
    if (title && !location && !company) {
      if (cur_title.toLowerCase().includes(title.toLowerCase())) {
        j.push(job);
      }
    }
    if (!title && location && company) {
      if (
        cur_company.toLowerCase().includes(company.toLowerCase()) &&
        cur_location.toLowerCase().includes(location.toLowerCase())
      ) {
        j.push(job);
      }
    }
    if (!title && location && !company) {
      if (cur_location.toLowerCase().includes(location.toLowerCase())) {
        j.push(job);
      }
    }
    if (!title && !location && company) {
      if (cur_company.toLowerCase().includes(company.toLowerCase())) {
        j.push(job);
      }
    }
    if (!title && !location && !company) {
      j.push(job);
    }
  }
  res.status(200).send(j);
});

module.exports = jobRoutes;
