const fs = require("fs");
const path = require("path");

// Path to the content folder and JSON file
const contentFolder = path.join(__dirname, "content");
const jsonFilePath = path.join(contentFolder, "content-list.json");

// Read existing JSON file
const updateContentList = () => {
    const existingData = fs.existsSync(jsonFilePath)
        ? JSON.parse(fs.readFileSync(jsonFilePath, "utf8"))
        : [];

    // Get all HTML files in the content folder
    const files = fs.readdirSync(contentFolder).filter(file => file.endsWith(".html"));

    // Create updated content list
    const updatedContentList = files.map(file => {
        const existingEntry = existingData.find(item => item.file === file);
        return (
            existingEntry || {
                title: file.replace(/_/g, " ").replace(".html", "").toUpperCase(),
                description: "Description pending.",
                file: file
            }
        );
    });

    // Write updated list to JSON
    fs.writeFileSync(jsonFilePath, JSON.stringify(updatedContentList, null, 4));
    console.log("Content list updated!");
};

// Run the function
updateContentList();
