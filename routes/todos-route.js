const { Router } = require('express')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong. Please try agein."
        });
    }
})

module.exports = router;