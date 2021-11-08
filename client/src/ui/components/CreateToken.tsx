import React, { useState } from "react";
import axios from "axios";

interface TokenDataType {
  name: string;
  symbol: string;
  supply: number;
  decimal: number;
}

interface openPropType {
  open: boolean;
  onClose: Function;
}

const CreateToken: React.FC<openPropType> = ({ open, onClose }) => {
  const [tokenData, setTokenData] = useState<TokenDataType>({ name: "", symbol: "", supply: 1, decimal: 0 });
  const [validityInput, setValidity] = useState({ name: true, symbol: true, supply: true, decimal: true });
  const [requestDone, setDone] = useState(true);
  const [ableToClose, setAbleToClose] = useState(true);
  const [contractAddress, setAddress] = useState({ visible: false, address: "" });

  const tokenCreationFunction: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    //do nothing if validityInput JSON object contains false
    if (Object.values(validityInput).includes(false)) {
      return;
    }

    if (tokenData.name === "" || tokenData.symbol === "") {
      return;
    }

    setDone(false);
    const data: TokenDataType = {
      name: tokenData.name,
      symbol: tokenData.symbol,
      supply: tokenData.supply,
      decimal: tokenData.decimal,
    };

    axios
      .post("http://localhost:8080/createToken", data)
      .then((res) => {
        setTokenData({ name: "", symbol: "", supply: 1, decimal: 0 });
        const data: any = res.data;
        setDone(true);
        setAbleToClose(true);
        console.log(data.message);
        setAddress({ visible: true, address: data.message });
      })
      .catch((err) => {
        setTokenData({ name: "", symbol: "", supply: 1, decimal: 0 });
        const data: any = err.response.data;
        setDone(true);
        setAbleToClose(true);
        console.log(data.message);
      });
  };

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const re = /^[0-9\b]*$/;
    //if its name is supply and it doesn't pass the regex test
    //to ensure a numerical only input*
    if (event.target.name === "supply" && !re.test(event.target.value)) {
      return;
    }
    if (event.target.name === "decimal" && !re.test(event.target.value)) {
      return;
    }

    //ENSURE INPUT VALIDITY
    //if the length of name is greater than 40 characters, then don't update input field and tell user to check their input
    if (event.target.name === "name" && event.target.value.length > 40) {
      setValidity({
        ...validityInput,
        [event.target.name]: false,
      });
      return; //by returning early, we're not able to update the state variable. Since input field is controlled by state variable, it won't be updated
    }

    if (event.target.name === "symbol" && event.target.value.length > 10) {
      setValidity({
        ...validityInput,
        [event.target.name]: false,
      });
      return; //by returning early, we're not able to update the state variable. Since input field is controlled by state variable, it won't be updated
    }

    setTokenData({
      ...tokenData,
      [event.target.name]: event.target.value,
    });

    if (event.target.name === "supply" && Number(event.target.value) < 1) {
      setValidity({
        ...validityInput,
        [event.target.name]: false,
      });
      return;
    }
    if (event.target.name === "decimal" && (Number(event.target.value) < 0 || Number(event.target.value) > 18)) {
      setValidity({
        ...validityInput,
        [event.target.name]: false,
      });
      return;
    }

    //if it passes all the checks, then reset state of validityInput
    setValidity({ name: true, symbol: true, supply: true, decimal: true });
  };

  //function to close sideBar
  const closeSide: React.MouseEventHandler<SVGSVGElement> = (event) => {
    //if request isn't finished yet, then prompt user that they can't close yet
    if (!requestDone) setAbleToClose(false);
    else {
      onClose();
      setAddress({ visible: false, address: "" });
    }
  };

  return (
    <div className={" bg-white w-1/3 fixed right-0 top-0 bottom-0 z-20 shadow-custom flex justify-center px-20 py-60 flex-col justify-start duration-300" + " " + (open ? "" : "transform translate-x-full")}>
      <svg onClick={closeSide} className="absolute right-10 top-10 fill-current text-projectCyan-dark cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.22493 4.81099C6.03632 4.62883 5.78372 4.52803 5.52153 4.53031C5.25933 4.53259 5.00852 4.63776 4.82311 4.82317C4.6377 5.00858 4.53253 5.25939 4.53025 5.52158C4.52797 5.78378 4.62877 6.03638 4.81093 6.22499L10.5859 12L4.80993 17.775C4.71442 17.8672 4.63823 17.9776 4.58583 18.0996C4.53342 18.2216 4.50583 18.3528 4.50468 18.4856C4.50352 18.6184 4.52882 18.75 4.5791 18.8729C4.62939 18.9958 4.70364 19.1075 4.79753 19.2014C4.89142 19.2953 5.00308 19.3695 5.12597 19.4198C5.24887 19.4701 5.38055 19.4954 5.51333 19.4942C5.64611 19.4931 5.77733 19.4655 5.89933 19.4131C6.02134 19.3607 6.13168 19.2845 6.22393 19.189L11.9999 13.414L17.7749 19.189C17.9635 19.3711 18.2161 19.4719 18.4783 19.4697C18.7405 19.4674 18.9913 19.3622 19.1767 19.1768C19.3622 18.9914 19.4673 18.7406 19.4696 18.4784C19.4719 18.2162 19.3711 17.9636 19.1889 17.775L13.4139 12L19.1889 6.22499C19.3711 6.03638 19.4719 5.78378 19.4696 5.52158C19.4673 5.25939 19.3622 5.00858 19.1767 4.82317C18.9913 4.63776 18.7405 4.53259 18.4783 4.53031C18.2161 4.52803 17.9635 4.62883 17.7749 4.81099L11.9999 10.586L6.22493 4.80999V4.81099Z" />
      </svg>

      <h2 className="block font-Nunito font-extrabold text-projectCyan text-2xl">Create Token</h2>
      <form className="flex flex-wrap" onSubmit={tokenCreationFunction}>
        <div className="w-full my-6 h-auto">
          <label className="inputLabel">Name</label>
          <input className="inputField" onChange={onInputChange} value={tokenData.name} name="name" />
          <p className={"font-Nunito text-red text-xs mt-2" + " " + (validityInput.name ? "hidden" : "inline")}>Name must be less than 40 characters</p>
        </div>
        <div className="grid grid-cols-4 gap-9">
          <div className="col-span-2">
            <label className="inputLabel">Symbol</label>
            <input className="inputField" onChange={onInputChange} value={tokenData.symbol} name="symbol" />
          </div>
          <div>
            <label className="inputLabel">Supply</label>
            <input className="inputField" onChange={onInputChange} value={tokenData.supply} name="supply" />
          </div>
          <div>
            <label className="inputLabel">Decimal</label>
            <input className="inputField" onChange={onInputChange} value={tokenData.decimal} name="decimal" />
          </div>
        </div>
        <p className={"w-full font-Nunito text-red text-xs mt-2" + " " + (validityInput.supply ? "hidden" : "inline")}>Supply must be greater than 0</p>
        <p className={"w-full font-Nunito text-red text-xs mt-2" + " " + (validityInput.decimal ? "hidden" : "inline")}>Decimal must be between 0 and 18</p>
        <p className={"w-full font-Nunito text-red text-xs mt-2" + " " + (validityInput.symbol ? "hidden" : "inline")}>Symbol must be less than 10 characters</p>
        <button className="block pinkButton mt-20 hover:from-pinkBright hover:to-beigeBright" type="submit">
          Create
        </button>
      </form>

      <h3 className={"w-full font-Nunito text-red text-xs mt-14" + " " + (ableToClose ? "hidden" : "inline")}>Please wait till your request has been fulfilled to close the side bar</h3>
      <div className={"mt-14 max-w-8" + " " + (contractAddress.visible ? "inline" : "hidden")}>
        <h2 className="block font-Nunito font-bold text-projectCyan text-lg">Address of Created Token</h2>
        <h2 className="block font-Nunito font-medium text-gray text-lg break-words">0x8a832D1E189c2EeDEF2590A207cBb9CF6CDC3D9B</h2>
      </div>
    </div>
  );
};

export default CreateToken;
