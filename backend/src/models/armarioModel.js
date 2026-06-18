let armarios = [];
let nextId = 1;

module.exports = {
  getAll: () => armarios,
  getById: (id) => armarios.find(a => a.id === id),
  create: (data) => {
    const novo = { id: nextId++, ...data };
    armarios.push(novo);
    return novo;
  },
  update: (id, data) => {
    const idx = armarios.findIndex(a => a.id === id);
    if (idx === -1) return null;
    armarios[idx] = { id, ...data };
    return armarios[idx];
  },
  remove: (id) => {
    const idx = armarios.findIndex(a => a.id === id);
    if (idx === -1) return false;
    armarios.splice(idx, 1);
    return true;
  }
};