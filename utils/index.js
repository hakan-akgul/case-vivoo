import axios from "axios";
import secret from "../configs/secret"

export async function fetchItems(uri) {
  const options = {
    url: `/api/${uri}`,
    headers: { SHOP_SK: secret.SHOP_SK }
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    alert(error)
  }
}

