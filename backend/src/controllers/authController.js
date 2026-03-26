const authService = require("../services/authService");

async function login(req, res) {
  const credentials = req.body;
  const data = await authService.login(credentials);
  return res.json({
    success: true,
    data,
    message: "Login successful",
  });
}

async function signup(req, res) {
  const info = req.body;
  const result = await authService.signup(info);
  return res.status(201).json({
    success: true,
    data: result,
    message: "Customer account created successfully",
  });
}

async function refresh(req, res) {
  const oldRefreshToken = req.body.refreshToken; // refresh token comes from req.cookie when frontend is integrated
  const tokens = await authService.refresh(oldRefreshToken);
  return res.json({
    success: true,
    data: tokens,
  });
}

module.exports = { login, signup, refresh };
