export const post = async (req, res) => {
  try {
    console.log(req.file.originalname);
    return res.status(200).send({ message: "Testing Successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
