import categoryModel from "../../models/categoryModels/categoryModel.js";

export const getCategory = async (req, res) => {
  try {
    const data = await categoryModel.find();

    if (data.length > 0) {
      return res
        .status(200)
        .json({ message: "Data retrieved successfully", categories: data });
    } else {
      return res.status(404).json({ message: "No categories found" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const userID = req.userId;
    const { name, slug } = req.body;

    // Check if a category with the same name or slug already exists
    const existingCategory = await categoryModel.findOne({
      $and: [{ name }, { slug }],
    });
    if (existingCategory) {
      return res.status(409).json({ message: "Category already exists" });
    }

    const categoryData = { ...req.body, owner: userID };

    // Create a new category instance
    const category = new categoryModel(categoryData);

    // Save the category to the database
    await category.save();

    // Send a success response
    return res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { _id } = req.params; // Extract _id from req.params
    const existingCategory = await categoryModel.findById(_id);

    if (!existingCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    const updatedCategory = await categoryModel.findByIdAndUpdate(
      _id,
      { ...req.body },
      { new: true }
    );

    if (updatedCategory) {
      return res.status(200).json({ message: "Category updated successfully" });
    } else {
      return res.status(500).json({ message: "Failed to update category" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const existingCategory = await categoryModel.findById({ _id: id });
    if (!existingCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    let result = await categoryModel.findByIdAndDelete({ _id: id });
    if (!result) {
      return res.status(404).json({ message: "Something went Wrong" });
    }
    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
