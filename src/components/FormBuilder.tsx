import React, { useState } from "react";
import Setting from '../schema/Setting.json';
import defaultui from '../schema/defaultui.json';

import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from "@jsonforms/react";

const FormBuilder: React.FC<any> = () => {
  const [data, setData] = useState({});
  return (
    <div className='App'>
      <JsonForms
        schema={Setting}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  );
};

export { FormBuilder };