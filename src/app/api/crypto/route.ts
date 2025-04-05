// app/api/crypto/route.ts
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum,binancecoin, chainlink", // Lista de criptomoedas
          order: "market_cap_desc", // Ordena por market cap
          per_page: 5, // Limita a 6 resultados
          page: 1,
          sparkline: false // Não inclui gráfico de tendência
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
