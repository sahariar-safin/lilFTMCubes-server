const BlogModel = require("../model/blog.js");
exports.getBlogContent = getBlogContent = async (req, res) => {
    try {
        const Blog = await BlogModel.find().sort({ createdAt: -1 });

        res.status(200).json(Blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.getBlogByID = getBlogByID = async (req, res) => {
    const { id } = req.params;
    try {
        const Blog = await BlogModel.findById(id);

        res.status(200).json(Blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.createBlogContent = createBlogContent = async (req, res) => {
    const Blog = req.body;
    console.log(Blog)
    const newBlogContent = new BlogModel(Blog);
    try {
        await newBlogContent.save();
        console.log("success");
        res.status(201).json(newBlogContent);
    } catch (error) {
        res.status(409).send(error.message);
    }
};

exports.deleteBlogPost = deleteBlogPost = async (req, res) => {
    const { id } = req.params;
    await BlogModel.findByIdAndRemove(id);
    res.json({ message: "Blog deleted successfully" });
};