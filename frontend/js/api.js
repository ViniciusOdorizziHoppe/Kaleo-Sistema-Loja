const API_BASE = "";

const api = {
  async get(url) {
    const res = await fetch(API_BASE + url);
    if (!res.ok) throw new Error("Erro GET");
    return res.json();
  },

  async post(url, data) {
    const res = await fetch(API_BASE + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Erro POST");
    return res.json();
  }
};