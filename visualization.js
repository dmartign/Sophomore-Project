function doVisual()
{	
var paper = Raphael("canvas", 600, 500);
var fat = paper.rect(0, 0, getFatPercentage() * 6, 83);
var satFat = paper.rect(0, 83, getSatFatPercentage() * 6, 83);
var carbs = paper.rect(0, 166, getCarbsPercentage() * 6, 83);
var fiber = paper.rect(0, 249, getFiberPercentage() * 6, 83);
var sodium = paper.rect(0, 332, getSodiumPercentage() * 6, 83);
var protein = paper.rect(0, 415, getProteinPercentage() * 6, 83);

var twentyfive = paper.rect(150, 0, 1, 500);
var fifty = paper.rect(300, 0, 1, 500);
var seventyfive = paper.rect(450, 0, 1, 500);

fat.attr("fill", "#f00");
fat.attr("stroke", "#000");
satFat.attr("fill", "#0f0");
satFat.attr("stroke", "#000");
carbs.attr("fill", "#00f");
carbs.attr("stroke", "#000");
fiber.attr("fill", "#0ff");
fiber.attr("stroke", "#000");
sodium.attr("fill", "#f0f");
sodium.attr("stroke", "#000");
protein.attr("fill", "#ff0");
protein.attr("stroke", "#000");

}