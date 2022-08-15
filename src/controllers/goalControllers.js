// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ msg: "Get goals" });
};

// @desc Create Goals
// @route POST /api/goals
// @access Private
const createGoal = (req, res) => {
  res.status(201).json({ msg: "Set goal" });
};

// @desc Update Goals
// @route PUT /api/goals
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ msg: `Update goal ${req.params.id}` });
};

// @desc Delete Goals
// @route Delete /api/goals
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ msg: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
