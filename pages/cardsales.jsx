import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { Item, RequiredRule } from "devextreme-react/form";
import { Form, Label } from "devextreme-react/data-grid";
import TextBox from "devextreme-react/text-box";
import requests from "../agent";
const page = "/api/Vodacom";
import { LoadPanel } from 'devextreme-react/load-panel';

const columns = [
  "ValueChain",
  "Level1",
  "Level2",
  "UniqueCode",
  "InsuranceType",
  "InsuranceId",
  "ExpiryDate",
  "Premium",
  "Duration",
  "Rate",
  "Currency",
  "InsuranceType",
  "Cover",
  "Status"
  // "Latitude",
  // "Longitude",
];

const CardSales = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    requests.get(page).then((response) => {
      setData(response?.Activations);
      setLoading(false);
    });
  }, []);

  const handleSave = (e) => {
    requests.post(page, Object.values(inputs)[0]);
  };
  const handleDelete = (e) => {
    requests.del(page + e.id);
  };
  const handleUpdate = (e) => {
    requests.put(page + e.id, e);
  };

  

  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body">
            <h4 className="header-title mb-3"> Card Sales </h4>
            <LoadPanel
              shadingColor="rgba(0,0,0,0.4)"

              visible={isLoading}
              showIndicator={true}
              shading={true}
              showPane={true}
              hideOnOutsideClick={false}
            />
            <DataTable
              columns={columns}
              dataSource={data}
              Page ="CardSales"      
              title="CardSales"
              handlesave={handleSave}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              width={500}
              height={350}
            >            
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};
// export async function getServerSideProps({ req, res }) {
//   res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=36000, stale-while-revalidate=5900000'
//   )
//   const CardSaless = await requests.get("CardSales");  
//   return {
//     props: {
//       CardSaless,
//     },
//   }
// }
// export async function getServerSideProps() {
//   const CardSaless = await requests.get("CardSales");  
//   return {
//     props: {
//       CardSaless,
//     },
//   }
// }
export default CardSales;
