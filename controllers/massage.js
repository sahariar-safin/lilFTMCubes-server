const MassageModel = require('../model/massage');

exports.addMassage = addMassage = async (req, res) => {
    const massage = req.body;
    const newMassage = new MassageModel(massage);
    try {
        await newMassage.save();

        res.status(200).json(newMassage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getMassage = getMassage = async (req, res) => {
    try {
        const massage = MassageModel.find();

        res.status(200).json(massage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteMassage = deleteMassage = async (req, res) => {
    const { id } = req.params;
    await MassageModel.findByIdAndDelete(id);
    res.status(200).json(id);
}