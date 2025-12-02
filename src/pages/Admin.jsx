import React, { useState, useEffect } from "react";

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    id: "",
    title: "",
    subtitle: "",
    description: "",
    github: "",
    screenshots: ""
  });

  // Load from localStorage or JSON
  useEffect(() => {
    async function loadProjects() {
      const saved = localStorage.getItem("projectsData");

      if (saved) {
        setProjects(JSON.parse(saved));
      } else {
        const res = await fetch("/project.json");
        const data = await res.json();
        setProjects(data.projects);
        localStorage.setItem("projectsData", JSON.stringify(data.projects));
      }
    }
    loadProjects();
  }, []);

  // Handle form change
  function updateForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Add new project
  function addProject() {
    if (!form.id || !form.title) {
      alert("ID and Title are required!");
      return;
    }

    const newProject = {
      ...form,
      screenshots: form.screenshots.split(",").map((s) => s.trim())
    };

    const updated = [...projects, newProject];
    setProjects(updated);
    localStorage.setItem("projectsData", JSON.stringify(updated));

    alert("Project added successfully!");
    setForm({ id: "", title: "", subtitle: "", description: "", github: "", screenshots: "" });
  }

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h1>Admin – Add Project</h1>

      <div style={{ marginTop: "20px", maxWidth: "500px" }}>
        <input name="id" placeholder="Project ID" onChange={updateForm} value={form.id} />
        <input name="title" placeholder="Title" onChange={updateForm} value={form.title} />
        <input name="subtitle" placeholder="Subtitle" onChange={updateForm} value={form.subtitle} />
        <textarea name="description" placeholder="Description" onChange={updateForm} value={form.description} />
        <input name="github" placeholder="GitHub Link" onChange={updateForm} value={form.github} />
        <textarea name="screenshots" placeholder="Screenshot paths (comma separated)" onChange={updateForm} value={form.screenshots} />

        <button onClick={addProject} style={{ marginTop: "10px", padding: "10px 20px" }}>
          Add Project
        </button>
      </div>
    </div>
  );
}