import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum,binancecoin, chainlink", 
          order: "market_cap_desc", 
          per_page: 5, 
          page: 1,
          sparkline: false 
        }
      });

    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {

    return new Response( error + "Erro ao buscar dados das criptomoedas", {
      status: 500,
    });
  }
}
