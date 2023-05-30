import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import "../component/style/styles.css";

import {
  getAllDownloads,
  getAllFileValidators,
  getAllTemplateValidators,
  getAllUploads,
} from "./constants";
import {
  useFetchDownloads,
  useFetchFileValidators,
  useFetchTemplateValidators,
  useFetchUploads,
} from "../../jobs-hooks";
import PageComponent from "../../../../shared/PageComponent/PageComponent";

const JobsDetails = () => {
  const { id } = useParams();
  console.log(typeof id);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ minWidth: 300 }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <PageComponent
              pageTitle="Downloads"
              pageBody={
                <CustomTable
                  useCustomFetch={useFetchDownloads}
                  columnHeaders={getAllDownloads}
                  queryArguments={{ id }}
                  tableClassName="table-styles"
                />
              }
            ></PageComponent>
          </CardContent>
        </Card>
        <br />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <PageComponent
              pageTitle="File Validators"
              pageBody={
                <CustomTable
                  useCustomFetch={useFetchFileValidators}
                  columnHeaders={getAllFileValidators}
                  tableClassName="table-styles"
                />
              }
            ></PageComponent>
          </CardContent>
        </Card>
        <br />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <PageComponent
              pageTitle="Template Validators"
              pageBody={
                <CustomTable
                  useCustomFetch={useFetchTemplateValidators}
                  columnHeaders={getAllTemplateValidators}
                  tableClassName="table-styles"
                />
              }
            ></PageComponent>
          </CardContent>
        </Card>
        <br />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <PageComponent
              pageTitle="Uploads"
              pageBody={
                <CustomTable
                  useCustomFetch={useFetchUploads}
                  columnHeaders={getAllUploads}
                  tableClassName="table-styles"
                />
              }
            ></PageComponent>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default JobsDetails;
