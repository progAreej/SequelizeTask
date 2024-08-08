// const express = require('express');
// const router = express.Router();
// const db = require('../models');

// // Get all todos
// router.get('/', async (req, res) => {
//   try {
//     const todos = await db.ToDo.findAll();
//     res.json(todos);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching todos' });
//   }
// });

// // Get a single todo
// router.get('/:id', async (req, res) => {
//   try {
//     const todo = await db.ToDo.findByPk(req.params.id);
//     if (todo) {
//       res.json(todo);
//     } else {
//       res.status(404).json({ error: 'Todo not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching todo' });
//   }
// });

// // Create a new todo
// router.post('/', async (req, res) => {
//   try {
//     const todo = await db.ToDo.create(req.body);
//     res.status(201).json(todo);
//   } catch (error) {
//     res.status(400).json({ error: 'Error creating todo' });
//   }
// });


// // Update a todo
// router.put('/:id', async (req, res) => {
//   try {
//     const [updated] = await db.ToDo.update(req.body, { where: { id: req.params.id } });
//     if (updated) {
//       const updatedTodo = await db.ToDo.findByPk(req.params.id);
//       res.json(updatedTodo);
//     } else {
//       res.status(404).json({ error: 'Todo not found' });
//     }
//   } catch (error) {
//     console.error(error); // Log the error for debugging
//     res.status(400).json({ error: 'Error updating todo' });
//   }
// });

// // // Delete a todo
// router.delete('/:id', async (req, res) => {
//   try {
//     const deleted = await db.ToDo.destroy({ where: { id: req.params.id } });
//     if (deleted) {
//       res.send('Todo deleted');
//     } else {
//       res.status(404).json({ error: 'Todo not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting todo' });
//   }
// });

// // Restore a soft deleted todo
// // router.put('/restore/:id', async (req, res) => {
// //   try {
// //     const todo = await db.ToDo.findByPk(req.params.id);
// //     if (todo && todo.deletedAt) {
// //       await todo.update({ deletedAt: null });
// //       res.json({ message: 'Todo restored', todo });
// //     } else {
// //       res.status(404).json({ error: 'Todo not found or not deleted' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error restoring todo' });
// //   }
// // });

// // router.delete('/:id', async (req, res) => {
// //   try {
// //     const todo = await db.ToDo.findByPk(req.params.id);
// //     if (todo) {
// //       // Perform soft delete by setting deletedAt to the current date/time
// //       await todo.update({ deletedAt: new Date() });
// //       res.send('Todo soft deleted');
// //     } else {
// //       res.status(404).json({ error: 'Todo not found' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error deleting todo' });
// //   }
// // });

// module.exports = router;


// // const express = require('express');
// // const router = express.Router();
// // const db = require('../models');

// // // Get all todos (excluding soft-deleted)
// // router.get('/', async (req, res) => {
// //   try {
// //     const todos = await db.ToDo.findAll({ where: { deletedAt: null } });
// //     res.json(todos);
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error fetching todos' });
// //   }
// // });

// // // Get a single todo (exclude soft-deleted)
// // router.get('/:id', async (req, res) => {
// //   try {
// //     const todo = await db.ToDo.findOne({ where: { id: req.params.id, deletedAt: null } });
// //     if (todo) {
// //       res.json(todo);
// //     } else {
// //       res.status(404).json({ error: 'Todo not found' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error fetching todo' });
// //   }
// // });

// // // Create a new todo
// // router.post('/', async (req, res) => {
// //   try {
// //     const todo = await db.ToDo.create(req.body);
// //     res.status(201).json(todo);
// //   } catch (error) {
// //     res.status(400).json({ error: 'Error creating todo' });
// //   }
// // });

// // // Update a todo
// // router.put('/:id', async (req, res) => {
// //   try {
// //     const [updated] = await db.ToDo.update(req.body, { where: { id: req.params.id, deletedAt: null } });
// //     if (updated) {
// //       const updatedTodo = await db.ToDo.findByPk(req.params.id);
// //       res.json(updatedTodo);
// //     } else {
// //       res.status(404).json({ error: 'Todo not found' });
// //     }
// //   } catch (error) {
// //     console.error(error); // Log the error for debugging
// //     res.status(400).json({ error: 'Error updating todo' });
// //   }
// // });

// // // Soft delete a todo
// // router.delete('/:id', async (req, res) => {
// //   try {
// //     const todo = await db.ToDo.findByPk(req.params.id);
// //     if (todo) {
// //       await todo.update({ deletedAt: new Date() });
// //       res.send('Todo soft deleted');
// //     } else {
// //       res.status(404).json({ error: 'Todo not found' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error deleting todo' });
// //   }
// // });

// // // Restore a soft-deleted todo
// // router.put('/restore/:id', async (req, res) => {
// //   try {
// //     const todo = await db.ToDo.findByPk(req.params.id);
// //     if (todo && todo.deletedAt) {
// //       await todo.update({ deletedAt: null });
// //       res.json({ message: 'Todo restored', todo });
// //     } else {
// //       res.status(404).json({ error: 'Todo not found or not deleted' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ error: 'Error restoring todo' });
// //   }
// // });

// // module.exports = router;


'use strict';
const express = require('express');
const router = express.Router();
const db = require('../models');

// Get all todos (excluding soft-deleted)
router.get('/', async (req, res) => {
  try {
    const todos = await db.ToDo.findAll({ where: { deletedAt: null } });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching todos' });
  }
});

// Get a single todo (exclude soft-deleted)
router.get('/:id', async (req, res) => {
  try {
    const todo = await db.ToDo.findOne({ where: { id: req.params.id, deletedAt: null } });
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching todo' });
  }
});

// Create a new todo
router.post('/', async (req, res) => {
  try {
    const todo = await db.ToDo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: 'Error creating todo' });
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await db.ToDo.update(req.body, { where: { id: req.params.id, deletedAt: null } });
    if (updated) {
      const updatedTodo = await db.ToDo.findByPk(req.params.id);
      res.json(updatedTodo);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).json({ error: 'Error updating todo' });
  }
});

// Soft delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const todo = await db.ToDo.findByPk(req.params.id);
    if (todo) {
      await todo.update({ deletedAt: new Date() });
      res.send('Todo soft deleted');
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting todo' });
  }
});

// Restore a soft-deleted todo
router.put('/restore/:id', async (req, res) => {
  try {
    const todo = await db.ToDo.findByPk(req.params.id);
    if (todo && todo.deletedAt) {
      await todo.update({ deletedAt: null });
      res.json({ message: 'Todo restored', todo });
    } else {
      res.status(404).json({ error: 'Todo not found or not deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error restoring todo' });
  }
});

module.exports = router;
