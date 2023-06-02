import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import {
  useFetchDownloads,
  useFetchFileValidators,
  useFetchTemplateValidators,
  useFetchUploads,
} from "../../jobs-hooks";
import {
  DownloadsColumns,
  FileValidatorColumns,
  TemplateValidatorColumns,
  UploadColumns,
} from "./constants";

import "./style/styles.css";

import PageComponent from "../../../../shared/PageComponent/PageComponent";
import CustomTable from "../../../../shared/CustomTable/CustomTable";

const JobsDetailsContainer = () => {
  const { id } = useParams();
  const jobId = Number(id);

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
                  columnHeaders={DownloadsColumns}
                  queryArguments={{ jobId }}
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
                  columnHeaders={FileValidatorColumns}
                  queryArguments={{ jobId }}
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
                  columnHeaders={TemplateValidatorColumns}
                  queryArguments={{ jobId }}
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
                  columnHeaders={UploadColumns}
                  queryArguments={{ jobId }}
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

export default JobsDetailsContainer;
