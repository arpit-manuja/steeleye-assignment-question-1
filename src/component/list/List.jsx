import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows  , timeDatas , currency , change}) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {
        rows.map((row , index) => {
          const timestampObj = timeDatas.find((ts)=>ts["&id"]===row["&id"]);
          return (
            <ListRow 
            key={index}
            onClick={()=>
            change(row.executionDetails, timestampObj.timestamps)}
          >
          <ListRowCell>{row["&id"]}</ListRowCell>
          <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
          <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>

            <ListRowCell>{timestampObj?timestampObj.timestamps.orderSubmitted:"N/A"}</ListRowCell>
          
            <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
        
            
           
            
          </ListRow>
          );
            })}   
      </tbody>
    </table>
  );
};

export default List;
