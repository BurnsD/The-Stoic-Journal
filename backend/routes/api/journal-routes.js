const router = require("express").Router();
let Journal = require('../../models/Journal');

router.route('/').get((req, res) => {
    Journal.find()
        .then(jentry => res.json(jentry))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const entry = req.body.entry;
    const date = Date.parse(req.body.date);

    const newEntry = new Journal({
        username,
        entry,
        date,
    });

    newEntry.save()
    .then(() => res.json('Journal Entry has been submitted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Journal.findByIdAndDelete(req.params.id)
        .then(jentry => {
            jentry.username = req.body.username;
            jentry.entry = req.body.entry;
            jentry.date = Date.parse(req.body.date);

            jentry.save()
                .then(() => res.json('Entry update successfull'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});