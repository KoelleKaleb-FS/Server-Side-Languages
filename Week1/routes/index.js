const express = require("express");
const { hostname } = require("os");
const router = express.Router();

let resources = [];

let lastId = 0;

// localhost:3000/api/
router.get("/", (req, res) => {
    res.status(200).json(resources);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const resource = resources.find(resource => resource.id === id);
    if (resource) {
        res.status(200).json(resource);
    } else {
        res.status(404).json({ error: "Resource not found" });
    }
});

router.post("/", (req,res)=>{
   const { data } = req.body;
   res.status(200).json({message: "POST to /api", 
   data,
   metadata: {hostname: req.hostname, method: req.method},
})
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    let resourceId;

    if (id) {
        resourceId = parseInt(id);
    } else {
        lastId++;
        resourceId = lastId;
    }

    const resourceIndex = resources.findIndex(resource => resource.id === resourceId);

    if (resourceIndex === -1) {
        resources.push({
            id: resourceId,
            ...newData
        });

        return res.status(200).json(resources[resources.length - 1]);
    }

    resources[resourceIndex] = {
        id: resourceId,
        ...newData
    };

    res.status(200).json(resources[resourceIndex]);
});

router.delete("/:id", (req, res) => {
    let { id } = req.params;
    id = parseInt(id);

    console.log("DELETE request received for ID:", id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
    }

    if (id === null) {
        console.log("Deleting resource with ID: null");
        const resourceIndex = resources.findIndex(resource => resource.id === null);

        if (resourceIndex !== -1) {
            resources.splice(resourceIndex, 1);
            return res.status(200).json({
                message: `User deleted by Id for /api/null`,
                data: {}
            });
        } else {
            console.log("Resource with id: null not found");
            return res.status(404).json({ error: "Resource with id: null not found" });
        }
    } else {
        console.log("Deleting resource with ID:", id);
        const resourceIndex = resources.findIndex(resource => resource.id === id);

        if (resourceIndex !== -1) {
            resources.splice(resourceIndex, 1);
            return res.status(200).json({
                message: `User deleted by Id for /api/${id}`,
                data: {}
            });
        } else {
            console.log("Resource with id:", id, "not found");
            return res.status(404).json({ error: "Resource not found" });
        }
    }
});

module.exports = router;