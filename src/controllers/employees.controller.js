const getEmployees = (req, res) => {
  res.send("Get employees");
};

const createEmployee = (req, res) => {
  res.send("Create employee");
};

const updateEmployee = (req, res) => {
  res.send("Update employee");
};

const deleteEmployee = (req, res) => {
  res.send("Delete employee");
};

export const employees = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
}