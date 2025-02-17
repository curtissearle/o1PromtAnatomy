import React, { useState } from "react";
import {
  TextField,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";

const PromptBuilder = () => {
  const [goal, setGoal] = useState("");
  const [returnFormat, setReturnFormat] = useState("");
  const [warnings, setWarnings] = useState("");
  const [contextDump, setContextDump] = useState("");

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleCopy = () => {
    const textToCopy = `Goal:\n${goal}\n\nReturn Format:\n${returnFormat}\n\nWarnings:\n${warnings}\n\nContext Dump:\n${contextDump}`;
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        o1 Prompt Anatomy
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Goal"
                multiline
                fullWidth
                variant="outlined"
                value={goal}
                onChange={handleChange(setGoal)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Return Format"
                multiline
                fullWidth
                variant="outlined"
                value={returnFormat}
                onChange={handleChange(setReturnFormat)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Warnings"
                multiline
                fullWidth
                variant="outlined"
                value={warnings}
                onChange={handleChange(setWarnings)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Context Dump"
                multiline
                fullWidth
                variant="outlined"
                value={contextDump}
                onChange={handleChange(setContextDump)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Output</Typography>
            <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
              {`Goal:\n${goal}\n\nReturn Format:\n${returnFormat}\n\nWarnings:\n${warnings}\n\nContext Dump:\n${contextDump}`}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCopy}
              style={{ marginTop: "10px" }}
            >
              Copy to Clipboard
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Typography
        variant="body2"
        align="center"
        style={{ marginTop: "20px", color: "gray" }}
      >
        Inspired by the blog:{" "}
        <a
          href="https://medium.com/@niall.mcnulty/writing-an-o1-prompt-that-works-16ee921b5859"
          target="_blank"
          rel="noopener noreferrer"
        >
          Writing an o1 Prompt That Works
        </a>
      </Typography>
    </Container>
  );
};

export default PromptBuilder;
