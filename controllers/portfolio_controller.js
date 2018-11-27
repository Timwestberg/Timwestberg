const express = require("express");

const router = express.Router();


// Create all our routes and set up logic within those routes where required.


router.get("/", (req, res) => {


    // Must be placed in an object varible to be accessed correctly, shows up as objects otherwise
    const hbsObject = {
      style: "index",
      jsFile:"main",
      title:"Tim Westberg"
    };

    console.log(hbsObject);
    
    res.render("index", hbsObject);

});



router.get('/Projects', (req, res) => {


    const hbsObject = {
      style: "projects",
      jsfile:"project",
      title:"Projects",
    };

      res.render("project",hbsObject);
});

router.get('/contact', (req, res) => {


  const hbsObject = {
    style: "contact",
    jsfile:"contact",
    title:"Contact Me",
  };

    res.render("contact",hbsObject);
});

// /** Route for handling adding a new Burger */
// router.post("/api/burgers",(req, res) => {
//   burgers.create([

//     "burger_name", "burger_ingred","devoured","favorite"

//   ],
//    [
//     req.body.burger_name, req.body.burger_ingred,req.body.devoured,req.body.favorite
//   ],
//    function(result) {
//     res.json({
//       id: result.insertId
//   });

//   });
// });


// /** Route for handling updating burgers */
// router.put("/api/burgers/:id",(req, res) => {

//   const condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burgers.update({

//     devoured: req.body.devoured,

//   }, 
//   condition, function(result) {

//     if (result.changedRows == 0) {

//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();

//     } else {

//       res.status(200).end();
//     }
//   });
// });


// router.put("/api/burgers/favorite/:id",(req, res) => {

//   const condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burgers.update({

//     favorite: req.body.favorite,

//   }, 
//   condition, function(result) {

//     if (result.changedRows == 0) {

//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();

//     } else {

//       res.status(200).end();
//     }
//   });
// });


// /**Route for handling the removal of burgers */
// router.delete("/api/burgers/:id",(req, res) => {

//   const condition = "id = " + req.params.id;

//   burgers.delete(condition, function(result) {

//     if (result.affectedRows == 0) {

//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();

//     } else {

//       res.status(200).end();
//     }
//   });
// });


// Export routes for server.js to use.
module.exports = router;
