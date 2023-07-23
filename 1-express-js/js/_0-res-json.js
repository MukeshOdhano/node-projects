
app.get("/api", (req, res) => {
   res.json([
      { name: "Mukesh" },
      { naem: "Subhash" },
      { name: "Jeevan" },
      { name: "Love" },
   ]);
});
