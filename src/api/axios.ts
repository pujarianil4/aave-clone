import axios from "axios";


export const fetchAccountData = async (query: string) => {
    try {
        const data = await axios({
          url: 'https://api.thegraph.com/subgraphs/name/messari/aave-v3-polygon',
          method: "POST",
          data: {
            query: query,
          },
        });
  
        return data.data.data;
      } catch (err) {
        console.log("Graph Error:", err);
      }
}