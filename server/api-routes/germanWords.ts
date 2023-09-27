import express from 'express';
import German from '../../models/German';

const router = express.Router();

router.get('/', async(req,res) => {
    // res.send('/api/germanWords');
    const Germans = await German.find().sort({updateAt: -1})
    res.json(Germans);
});

router.get('/:id', async(req,res) => {
    // res.send('/api/germanWords');
    const _id = req.params.id;
    const german = await German.findOne({id: _id});
    res.json(german);
});

router.post('/', async(req,res) => {
    // res.send('/api/germanWords');
    const body = req.body;
    const german = new German(body);
    const newGerman = await german.save();
    res.json(newGerman);
});

router.patch('/:id', async(req,res) => {
    // res.send('/api/germanWords');
    const { name, word, points } = req.body;
    const _id = req.params.id;
    const german = await German.findOne({id: _id});
    if(name !== undefined) german!.name = name;
    if(word !== undefined) german!.word = word;
    if(points !== undefined) german!.points = points;
    await german!.save();
    res.json(german);
});

router.delete('/:id', async(req,res) => {
    // res.send('/api/germanWords');
    const _id = req.params.id;
    await German.deleteOne({_id});
    res.json({msg: "delete successfully"});
});





export default router;