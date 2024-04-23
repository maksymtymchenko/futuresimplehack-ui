import {useState} from "react";
import axios from "axios";

export const useHttpClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const sendRequest = async (config: object) => {
    try {
      setLoading(true);
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error('Error sending request:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, sendRequest };
};
