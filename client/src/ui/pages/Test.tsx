import React, { useState } from "react";
import axios from "axios";

interface TokenDataType {
  name: string;
  symbol: string;
  supply: number;
  decimal: number;
}

const Test: React.FC<any> = () => {
  const [tokenData, setTokenData] = useState<TokenDataType>({ name: "", symbol: "", supply: 0, decimal: 0 });

  //method to deal with changes in input fields
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTokenData({
      ...tokenData,
      [event.target.name]: event.target.value,
    });
  };

  //method to make API call to backend with data. Backend creates token and returns token's address.
  const recieveToken: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data: TokenDataType = {
      name: tokenData.name,
      symbol: tokenData.symbol,
      supply: tokenData.supply,
      decimal: tokenData.decimal,
    };

    axios.post("http://localhost:8080/createToken", data).then((res) => {
      const data: any = res.data;
      console.log(data.message);
    });
  };

  return (
    <div>
      <form onSubmit={recieveToken}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <br></br>
        <input name="symbol" placeholder="Symbol" onChange={handleChange} />
        <br></br>
        <input name="supply" placeholder="Supply" onChange={handleChange} />
        <br></br>
        <input name="decimal" placeholder="Decimal" onChange={handleChange} />
        <br></br>
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
