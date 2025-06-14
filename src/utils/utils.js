export function getWeatherBackground(condition) {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes("sunny")) return "bg-sunny";
    if (conditionLower.includes("cloudy")) return "bg-cloudy";
    if (conditionLower.includes("rain")) return "bg-rainy";
    if (conditionLower.includes("snow")) return "bg-snowy";
    if (conditionLower.includes("thunder")) return "bg-thunder";
    return "bg-default"; // fallback
}