const router = require('express').Router();
const { Reply } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    Reply.findAll({})
        .then(dbReplyData => res.json(dbReplyData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Reply.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(dbReplyData => res.json(dbReplyData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Reply.create({
                reply_text: req.body.reply_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id,
            })
            .then(dbReplyData => res.json(dbReplyData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
});

router.put('/:id', withAuth, (req, res) => {
    Reply.update({
        reply_text: req.body.reply_text
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbReplyData => {
        if (!dbReplyData) {
            res.status(404).json({ message: 'No reply found with this id' });
            return;
        }
        res.json(dbReplyData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Reply.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbReplyData => {
        if (!dbReplyData) {
            res.status(404).json({ message: 'No reply found with this id' });
            return;
        }
        res.json(dbReplyData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;