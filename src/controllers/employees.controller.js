import { pool } from "../db.js";

// Get all employees from DB
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Get employee by ID form DB
export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id =?", [
      req.params.id,
    ]);

    if (rows.length <= 0) {
      res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Add employee to DB
export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Update employee in DB
export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id =?",
      [name, salary, id]
    );

    if (result.affectedRows <= 0) {
      res.status(404).json({
        message: "Employee not found",
      });
    }

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Delete employee from DB
export const deleteEmployee = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0) {
      res.status(404).json({
        message: "Employee not found",
      });
    }

    // Deletion successful, no response content
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
