import { useState } from "react";
import useTokenPrice from "hooks/useTokenPrice";

const styles = {
  token: {
    padding: "0 7px",
    height: "42px",
    gap: "5px",
    width: "fit-content",
    display: "flex",
    
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    size: "80px",
    
  },
};
function TokenPrice(props) {
  const { tokenPrice } = useTokenPrice(props);
  const [isUSDMode, setIsUSDMode] = useState(true);

  const toggleDisplayStyle = () => setIsUSDMode(!isUSDMode);

  

  return (
    <div style={styles.token} >
      
      <span 
        style={{ cursor: "pointer" }}
        onClick={toggleDisplayStyle}
        title={`Show in ${isUSDMode ? "ETH" : "USD"}`}
      >
        {tokenPrice && (isUSDMode ? tokenPrice.usdPrice : tokenPrice.nativePrice)}
      </span>
    </div>
  );
}
export default TokenPrice;
