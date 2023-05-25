import { Box, Collapse } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomTable from "../../../../shared/CustomTable/CustomTable";
import "../component/style/styles.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <Box sx={{ minWidth: 300 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} fontWeight={"bold"}>
            Downloads
          </Typography>

          <CustomTable
            useCustomFetch={useFetchDownloads}
            columnHeaders={getAllDownloads}
            tableClassName="table-styles"
            queryArguments={{ id }}
          /> */}
          <PageComponent
            pageTitle="Downloads"
            pageBody={
              <CustomTable
                useCustomFetch={useFetchDownloads}
                columnHeaders={getAllDownloads}
                tableClassName="table-styles"
                queryArguments={{ id }}
              />
            }
          ></PageComponent>
        </CardContent>
      </Card>
      <br />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} fontWeight={"bold"} gutterBottom>
            File Validators
          </Typography>
          <CustomTable
            useCustomFetch={useFetchFileValidators}
            columnHeaders={getAllFileValidators}
            tableClassName="table-styles"
          /> */}
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
          {/* <Typography sx={{ fontSize: 14 }} fontWeight={"bold"} gutterBottom>
            Template Validators
          </Typography>
          <CustomTable
            useCustomFetch={useFetchTemplateValidators}
            columnHeaders={getAllTemplateValidators}
            tableClassName="table-styles"
          /> */}
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
          {/* <Typography sx={{ fontSize: 14 }} fontWeight={"bold"} gutterBottom>
            Uploads
          </Typography>
          <CustomTable
            useCustomFetch={useFetchUploads}
            columnHeaders={getAllUploads}
            tableClassName="table-styles"
          /> */}
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
  );
};

export default JobsDetails;
