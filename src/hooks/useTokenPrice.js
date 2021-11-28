import { getWrappedNative } from "helpers/networks";
import { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { c2, n4, n6, n12, tokenValueTxt } from "../helpers/formatters";

const IsNative = (address) =>
  address === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

const useTokenPrice = (options) => {
  const { token } = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();
  const [tokenPrice, setTokenPrice] = useState();

  useEffect(() => {
    if (!options || !isInitialized) return null;
    fetchTokenPrice(options).then((price) => {
      if (price.usdPrice > 0.01){
        price.usdPrice = c2.format(price.usdPrice);
        const { value, decimals, symbol } = price.nativePrice;
        // nativePrice is an Object
        // {value: string, decimals: number, name: string, symbol: string},
        // tokenValueTxt returns a string
        price.nativePrice = tokenValueTxt(value, decimals, symbol);
        setTokenPrice(price);
        }
        else if (price.usdPrice > 0.0001){
          price.usdPrice = n4.format(price.usdPrice);
        const { value, decimals, symbol } = price.nativePrice;
        price.nativePrice = tokenValueTxt(value, decimals, symbol);
        setTokenPrice(price);
        }
        else if (price.usdPrice > 0.000001){
          price.usdPrice = n6.format(price.usdPrice);
        const { value, decimals, symbol } = price.nativePrice;
        price.nativePrice = tokenValueTxt(value, decimals, symbol);
        setTokenPrice(price);
        }
        else 
          price.usdPrice = n12.format(price.usdPrice);
        const { value, decimals, symbol } = price.nativePrice;
        price.nativePrice = tokenValueTxt(value, decimals, symbol);
        setTokenPrice(price);
        
      })
      .catch((e) => alert(e.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized, options]);

  const fetchTokenPrice = async (options) => {
    const { chain, address } = options;
    const tokenAddress = IsNative(address) ? getWrappedNative(chain) : address;
    console.log("chain", chain);
    console.log("address", address);
    console.log("tokenAddress", tokenAddress);
    return token
      .getTokenPrice({ chain, address: tokenAddress })
      .then((result) => result);
  };
  return { fetchTokenPrice, tokenPrice };
};

export default useTokenPrice;
