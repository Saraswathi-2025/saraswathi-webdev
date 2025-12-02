import React, { useState, useEffect } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [newProject, setNewProject] = useState({
    id: "",
    title: "",
    subtitle: "",
    description: "",
    github: "",
    screenshots: ""
  });

  // Load old data
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/project.json")
      .then((res) => res.json())
      .then((data) => {
        const stored = JSON.parse(localStorage.getItem("extraProjects")) || [];
        setProjects([...data.projects, ...stored]);
      });
  }, []);

  // Login function
  function handleLogin() {
    if (password === "Saraswathi@123") {
      setLoggedIn(true);
    } else {
      alert("Wrong password!");
    }
  }

  // Add project
  function addProject() {
    const project = {
      ...newProject,
      screenshots: newProject.screenshots
        .split(",")
        .map((s) => s.trim())
    };

    const updated = [...projects, project];
    setProjects(updated);

    const extra = updated.slice(3); // store only admin-added projects
    localStorage.setItem("extraProjects", JSON.stringify(extra));

    alert("Project added!");
  }

  if (!loggedIn) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "white" }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", width: "240px" }}
        />
        <br /><br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Add New Project</h1>

      <input
        type="text"
        placeholder="ID"
        onChange={(e) => setNewProject({ ...newProject, id: e.target.value })}
      /><br /><br />

      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
      /><br /><br />

      <input
        type="text"
        placeholder="Subtitle"
        onChange={(e) =>
          setNewProject({ ...newProject, subtitle: e.target.value })
        }
      /><br /><br />

      <textarea
        placeholder="Description"
        onChange={(e) =>
          setNewProject({ ...newProject, description: e.target.value })
        }
      ></textarea><br /><br />

      <input
        type="text"
        placeholder="GitHub URL"
        onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
      /><br /><br />

      <textarea
        placeholder="Screenshots (comma separated URLs)"
        onChange={(e) =>
          setNewProject({ ...newProject, screenshots: e.target.value })
        }
      ></textarea><br /><br />

      <button onClick={addProject}>Add Project</button>
    </div>
  );
}