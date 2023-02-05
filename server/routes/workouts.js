const { json } = require("express");
const express = require("express");
const {
  createWorkout,
  getAllWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

const router = express.Router();

//GET all workout
router.get("/", getAllWorkout);

//GET single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a new workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
