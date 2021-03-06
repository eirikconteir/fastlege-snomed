const headers = {
  Accept: "application/json",
  "Accept-Language":
    "nb-NO,no,nb-X-61000202103;q=0.9,nn;q=0.8,en-US;q=0.7,en-GB;q=0.6",
  "Content-Type": "application/json",
};

export const apiOptions: RequestInit = {
  headers,
  method: "GET",
};

export const handleResponse = <T>(response: Response) =>
  response.ok
    ? (response.json() as Promise<T>)
    : Promise.reject(new Error("Failed to load data from server"));
