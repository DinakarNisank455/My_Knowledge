document.getElementById('carbonCalculator').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user inputs
    const energy = parseFloat(document.getElementById('energy').value) || 0;
    const transport = parseFloat(document.getElementById('transport').value) || 0;
    const diet = parseFloat(document.getElementById('diet').value) || 0;
    const waste = parseFloat(document.getElementById('waste').value) || 0;

    // Calculate total carbon footprint
    const total = (energy * 1.37) + (transport * 2.31) + (diet * 52) + (waste * 0.25);

    // Display result
    document.getElementById('result').innerText =
        `Your annual carbon footprint is approximately ${total.toFixed(2)} metric tons of CO₂.`;
    
    const impactMessage = getEnvironmentalImpact(total);
    document.getElementById('impact').innerText = impactMessage;

});

function getEnvironmentalImpact(total) {
    if (total < 5) {
        return "Your carbon footprint is below the global average! This indicates a positive contribution to reducing greenhouse gas emissions. Keep up the eco-friendly practices!";
    } else if (total < 10) {
        return "Your carbon footprint is average. While it's comparable to the global average, consider ways to reduce emissions, such as using renewable energy, reducing meat consumption, or traveling less by car.";
    } else {
        return "Your carbon footprint is higher than average. This contributes to deforestation, ocean acidification, and global warming. Consider significant lifestyle changes, such as switching to renewable energy, adopting a plant-based diet, and minimizing waste generation.";
    }
}
