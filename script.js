// Plant database
const plants = [
    { name: "Tomato", minpH: 6.0, maxpH: 7.0 },
    { name: "Rice", minpH: 5.0, maxpH: 6.5 },
    { name: "Hydrangea (Blue)", minpH: 5.0, maxpH: 6.0 },
    { name: "Hydrangea (Pink)", minpH: 6.0, maxpH: 7.0 },
  ];
  
  // Function to check pH suitability
  function checkPlantSuitability() {
    const currentpH = parseFloat(document.getElementById('pHInput').value);
    const selectedPlant = document.getElementById('plantSelect').value;
  
    const plant = plants.find(p => p.name === selectedPlant);
    if (!plant) {
      document.getElementById('result').innerText = "Plant not found.";
      return;
    }
  
    let resultText;
    if (currentpH >= plant.minpH && currentpH <= plant.maxpH) {
      resultText = `The pH is suitable for ${plant.name}.`;
    } else if (currentpH < plant.minpH) {
      resultText = `The pH is too low for ${plant.name}. Add lime to increase pH.`;
    } else {
      resultText = `The pH is too high for ${plant.name}. Add sulfur to decrease pH.`;
    }
  
    document.getElementById('result').innerText = resultText;
  }
