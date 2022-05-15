const baseUrl = "http://localhost:3000";

export async function getData() {
  try {
    const response = await fetch(`${baseUrl}/data`);
    const data = await response.json();
    setUserDataApp(data);
  } catch (error) {
    console.log(error);
    setErrorMessage(error);
    setServerError(true);
  }
}
