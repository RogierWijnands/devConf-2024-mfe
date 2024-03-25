import React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AutoGraph } from "@mui/icons-material";
import {
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  ButtonGroup,
  Button,
} from "@mui/material";
import "./App.scss";

export default function () {
  return (
    <div className="left-nav-container">
      <h2>
        <AutoGraph /> Filters
      </h2>
      <ButtonGroup
        className="button-group"
        aria-label="outlined primary button group"
      >
        <Button variant="contained" color="success">
          Filter 1
        </Button>
        <Button variant="outlined" color="error">
          Filter 2
        </Button>
        <Button color="secondary">Filter 3</Button>
      </ButtonGroup>
      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>Filter group 1</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Filter group details"
            />
          </FormGroup>{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>Filter group 2</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter group details</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            <b>Filter group 3</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter group details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>
            <b>Filter group 4</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter group details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography>
            <b>Filter group 5</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter group details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography>
            <b>Filter group 6</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter group details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography>
            <b>Filter group 7</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter group details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography>
            <b>Filter group 8</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter group details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography>
            <b>Filter group 9</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter group details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography>
            <b>Filter group 10</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter group details</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordian-group">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11a-content"
          id="panel11a-header"
        >
          <Typography>
            <b>Filter group 11</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Filter group details</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
