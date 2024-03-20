import { useState, useEffect } from "react";
import { baseUrl, getRequest } from "/utils/services.js";

export const useFetchRecipientUser = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = chat?.members.find((id) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return;

      const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

      if (response && response.error) {
        setError(response.error);
      } else if (response) {
        setRecipientUser(response);
      }
    };
    getUser();
  }, [recipientId]);

  return { recipientUser, error };
};
