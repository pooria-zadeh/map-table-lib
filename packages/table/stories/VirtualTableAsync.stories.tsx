import HesabaVirtualTable from "../src/HesabaVirtualTable";
import AutoResizer from "../src/virtualize-table/container-virtual/AutoResizer";
import { storiesOf } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { CommonVirtualTableContainer } from "./table-test/container";

export const useTableData = () => {
  const [table, setTable] = useState({ schemaColumns: [], rows: [] });

  const getData = useCallback(async () => {
    const res: any = await fetch(
      `http://0.0.0.0:5000/api/get-schema/employees`
    );
    const jsonRes = await res.json();

    const schemaColumns = jsonRes?.schema.map((s) => ({
      label: s.name,
      key: s.name,
      type: s.type,
    }));
    setTable((prevState) => ({
      ...prevState,
      rows: jsonRes?.tableData,
      schemaColumns,
    }));
  }, []);
  useEffect(() => {
    getData();
    //   if (!error && data?.data?.schema) {
    //     const formattedSchema = setTableSchema(data?.data?.schema);
    //     const schemaColumns = formattedSchema.map((s) => ({
    //       label: s.name,
    //       key: s.name,
    //       type: s.type,
    //     }));
    //     setTable((prevState) => ({
    //       ...prevState,
    //       rows: data?.data?.tableData,
    //       schemaColumns,
    //     }));
    //   }
  }, [getData]);

  return table;
};

storiesOf("Virtual Table", module).add("Table with Async server data", () => {
  const { rows, schemaColumns } = useTableData();
  return (
    <CommonVirtualTableContainer>
      <AutoResizer>
        {({ width, height }) => (
          <HesabaVirtualTable
            height={height}
            width={width}
            columns={schemaColumns}
            rows={rows}
            selectable
            resizable
            sortable
            pagination={{
              rowsPerPage: 10,
              count: 20,
              page: 1,
              onPageChange: () => {},
            }}
            direction="ltr"
          />
        )}
      </AutoResizer>
    </CommonVirtualTableContainer>
  );
});
