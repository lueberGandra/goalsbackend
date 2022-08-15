const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc Create Goals
// @route POST /api/goals
// @access Private
const createGoal = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400);
    throw new Error(`'name' field is required!`);
  }
  const goal = await Goal.create({ name });
  res.status(201).json(goal);
});

// @desc Update Goals
// @route PUT /api/goals
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw new Error(`'name' field is required!`);
  }

  const goal = await Goal.findById(id);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal not found`);
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, { name }, { new: true });

  res.status(200).json(updatedGoal);
});

// @desc Delete Goals
// @route Delete /api/goals
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const goal = await Goal.findById(id);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal not found`);
  }
  await goal.remove();

  res
    .status(200)
    .json({ message: `'${goal.name}' has been deleted successfully` });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
