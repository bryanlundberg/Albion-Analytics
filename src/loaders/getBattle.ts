"use server";
import { API } from "@/const/api";

export async function getBattle({
  battleId,
}: {
  battleId: string;
}): Promise<Battle> {
  try {
    // Fetch battle data from the API
    const request = await fetch(`${API.BATTLES.OVERALL}${battleId}`);

    // Check if the request is successful
    if (!request.ok) {
      throw new Error("Failed to fetch battle data from the server.");
    }

    // Parse the JSON response
    const responseData: Battle = await request.json();

    // Return the battle data
    return responseData;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
