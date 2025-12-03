import React, { useState } from "react";

export default function Admin(){
  const [auth, setAuth] = useState(false);
  const [form, setForm] = useState({
    id:"", title:"", subtitle:"", description:"", github:"", screenshots:""
  });

  // Check environment variable (set REACT_APP_ADMIN_PASS in .env before build)
  const ADMIN_PASS = process.env.REACT_APP_ADMIN_PASS || "";

  const handleLogin = () => {
    if (!ADMIN_PASS) {
      alert("Admin not configured. Set REACT_APP_ADMIN_PASS in your environment before deployment.");
      return;
    }
    const pass = prompt("Enter admin password:");
    if (pass === ADMIN_PASS) setAuth(true);
    else alert("Incorrect password");
  };

  const handleAdd = () => {
    const arr = form.screenshots.split(",").map(s=>s.trim()).filter(Boolean);
    const newP = { id: form.id, title: form.title, subtitle: form.subtitle, description: form.description, github: form.github, screenshots: arr };
    const existing = JSON.parse(localStorage.getItem("extraProjects")) || [];
    existing.push(newP);
    localStorage.setItem("extraProjects", JSON.stringify(existing));
    alert("Project added (local)");
    setForm({ id:"", title:"", subtitle:"", description:"", github:"", screenshots:"" });
  };

  if (!auth) {
    return (
      <div style={{padding:40, color:"#fff"}}>
        <h2>Admin</h2>
        <p className="lead">This admin uses REACT_APP_ADMIN_PASS. If not set, configure before deployment.</p>
        <button className="btn" onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={{padding:40, color:"#fff"}}>
      <h2>Add Project</h2>
      <input placeholder="id" value={form.id} onChange={e=>setForm({...form,id:e.target.value})} /><br /><br />
      <input placeholder="title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} /><br /><br />
      <input placeholder="subtitle" value={form.subtitle} onChange={e=>setForm({...form,subtitle:e.target.value})} /><br /><br />
      <textarea placeholder="description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} /><br /><br />
      <input placeholder="github" value={form.github} onChange={e=>setForm({...form,github:e.target.value})} /><br /><br />
      <textarea placeholder="screenshots (comma separated)" value={form.screenshots} onChange={e=>setForm({...form,screenshots:e.target.value})} /><br /><br />
      <button className="btn btn--primary" onClick={handleAdd}>Add</button>
    </div>
  );
}