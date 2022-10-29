import { useContext } from "react";
import { MoneyContext } from "../Grandpa.js/Grandpa";

const Uncle = () => {
    const [money,setMoney]= useContext(MoneyContext);
    return (
        <div>
            <h3>Uncle</h3>
            <p>{money}</p>
            <button onClick={()=>setMoney(money+50)}>Add 50</button> 
           
        </div>
    );
};

export default Uncle;