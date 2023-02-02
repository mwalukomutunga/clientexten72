import { useEffect, useState } from "react";
import DataTable from "../components/Table";
import { Item, RequiredRule } from "devextreme-react/form";
import { Form, Label } from "devextreme-react/data-grid";
import TextBox from "devextreme-react/text-box";
import requests from "../agent";
const page = "https://bimamain.acreafrica.com/api/BimaResults";
// const page = "http://localhost:7009/api/BimaResults";

import { LoadPanel } from 'devextreme-react/load-panel';

const columns = [
  "crop",
  "fullName",
  "idNo", 
  "mobilePhone",
  "mpesaNo",
  "gender",
  "agree",
  "uniqueCode",
  "session",
  "latitude",
  "longitude",  
  "month",
  "week",
  "region",
  "county",
  "subCounty",
  "ward",
  "village",
  "amount",  
  "createdAt",
 
];

const MainPage = () => {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {   
    setLoading(true);
    requests.get(page).then((response) => {
       setData(response);
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
            <h4 className="header-title mb-3">Main Extention</h4>
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
              title="Main"
              Page ="Main"
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

export default MainPage;
