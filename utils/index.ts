import { FetchMethod, FetchResponse } from "@/types";

export async function fetchData<T>(
  path: string,
  params?: string,
  otherOtions?: any,
  method: FetchMethod = "GET"
): Promise<FetchResponse<T>> {
  const baseUrl = `https://fakestoreapi.com/${path}?${params}`;

  try {
    const defaultOptions: RequestInit = {
      method: method,
      cache: "default",
    };
    const options = { ...defaultOptions, ...otherOtions };
    const response = await fetch(baseUrl, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status:${response.status}`);
    }
    const data: T = await response.json();
    return { data };
  } catch (error) {
    // Handle any errors from fetching or server issues
    console.error(
      "Fetch error:",
      error instanceof Error ? error.message : "Unknown fetching error"
    );
    return {
      error: true,
      message:
        error instanceof Error ? error.message : "Unknown fetching error",
    };
  }
}
