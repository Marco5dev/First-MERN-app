exports.getTest = async (req, res) => {
  res.status(200).json({
    message: 'test api is working successfully',
  })
}