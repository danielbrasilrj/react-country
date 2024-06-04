export async function getAllCountries() {
  const url = "https://restcountries.com/all";

  const response = await fetch(url);
  return await response.json();
}
