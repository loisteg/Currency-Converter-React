import axios from "axios";
import { useDispatch } from "react-redux";
import { currenciesFetched } from "../redux/actions";

function useAPI() {
  const dispatch = useDispatch();

  const getData = async (setLoading, setRates) => {
    setLoading(true);
    await axios
      .get(
        "https://api.apilayer.com/fixer/latest?base=USD&apikey=EDCEx3u5GyafBjNyxg0P5S0sy9tx0Cpv"
      )
      .then((response) => {
        dispatch(currenciesFetched(response.data.rates));
        setRates(response.data.rates);
        setLoading(false);
      });
  };

  return { getData };
}

export default useAPI;
