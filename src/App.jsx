import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { name: "Auriculares inalámbricos", url: "https://ejemplo.com/auriculares", claimed: false },
    { name: "Libro: El poder del ahora", url: "https://ejemplo.com/libro", claimed: false },
    { name: "Reloj deportivo", url: "https://ejemplo.com/reloj", claimed: false },
  ]);

  const [newName, setNewName] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const toggleClaim = (index) => {
    const updated = [...items];
    updated[index].claimed = !updated[index].claimed;
    setItems(updated);
  };

  const addItem = () => {
    if (!newName || !newUrl) return;
    setItems([...items, { name: newName, url: newUrl, claimed: false }]);
    setNewName("");
    setNewUrl("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>🎁 Lista de deseos</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <input
          placeholder="Nombre del regalo"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{ flex: 1 }}
        />
        <input
          placeholder="Enlace"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          style={{ flex: 1 }}
        />
        <button onClick={addItem}>Añadir</button>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            opacity: item.claimed ? 0.5 : 1,
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
            borderRadius: 8,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ margin: 0 }}>{item.name}</p>
            <a href={item.url} target="_blank" rel="noreferrer">Ver regalo</a>
          </div>
          <button onClick={() => toggleClaim(index)}>
            {item.claimed ? "Desmarcar" : "Lo regalo yo"}
          </button>
        </div>
      ))}
    </div>
  );
}
