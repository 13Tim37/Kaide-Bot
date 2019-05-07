const User = require('../models/user');

create = (req, res) => {

    const user = {
        discordId: req.body.discordId,
    }

    User.create(user, (err, user) => {
        if (err) return res.status(500).send("There was a problem adding the user to the database.");
        res.status(200).send({
            id: user._id
        });
    })
}

getUser = (req, res) => {
    User.findOne({ _id: req.params.user_id }, (err, user) => {
        if (err) return res.status(404).json({
          message: "No user exists with this ID."
        });

        res.status(200).json(user);
    })
}

listUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(500).json({
          message: "No user exists with this ID."
        });

        res.status(200).send(users.map(user => ({
            id: user._id,
            merits: user.merits,
            rank: user.rank
        })));
    })
}

module.exports = {
    create,
    getUser,
    listUsers
}