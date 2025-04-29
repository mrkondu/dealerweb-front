import { getProductField } from "@/api/getProductField";
import { RadioGroup } from "@radix-ui/react-radio-group";
import React from "react";

const FilterColor = () => {
  const { result, loading } = getProductField();
  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Color</p>
      {loading && result === null && <p>Cargando colores...</p>}

      {/* <RadioGroup>
        {result !== null && result.schema.attributes.}
        </RadioGroup>     */}
    </div>
  );
};

export default FilterColor;
