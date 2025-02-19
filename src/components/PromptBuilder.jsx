import React, { useState } from "react";
import {
  TextField,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const PromptBuilder = () => {
  const [goal, setGoal] = useState("");
  const [returnFormat, setReturnFormat] = useState(
    "Return the response formatted using Markdown syntax."
  );
  const [warnings, setWarnings] = useState("");
  const [contextDump, setContextDump] = useState("");
  const [customReturnFormat, setCustomReturnFormat] = useState("");

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleCopy = () => {
    const selectedReturnFormat =
      returnFormat === "Custom" ? customReturnFormat : returnFormat;

    const textToCopy = `Goal:\n${goal}\n\nReturn Format:\n${selectedReturnFormat}\n\nWarnings:\n${warnings}\n\nContext Dump:\n${contextDump}`;
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
              <FormControl fullWidth>
                <InputLabel>Return Format</InputLabel>
                <Select
                  value={returnFormat}
                  onChange={handleChange(setReturnFormat)}
                >
                  <MenuItem
                    key="Markdown"
                    value="Return the response formatted using Markdown syntax."
                  >
                    Markdown
                  </MenuItem>
                  <MenuItem
                    key="JSON"
                    value="Return the response as a well-structured JSON object."
                  >
                    JSON
                  </MenuItem>
                  <MenuItem
                    key="HTML"
                    value="Return the response formatted in valid HTML."
                  >
                    HTML
                  </MenuItem>
                  <MenuItem
                    key="Plain Text"
                    value="Return the response as plain text with no special formatting."
                  >
                    Plain Text
                  </MenuItem>
                  <MenuItem
                    key="Bullet List"
                    value="Return the response as a bullet point list"
                  >
                    Bullet List
                  </MenuItem>
                  <MenuItem key="Custom" value="Custom">
                    Custom
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {returnFormat === "Custom" && (
              <Grid item xs={12}>
                <TextField
                  label="Custom Return Format"
                  multiline
                  fullWidth
                  variant="outlined"
                  value={customReturnFormat}
                  onChange={handleChange(setCustomReturnFormat)}
                />
              </Grid>
            )}
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
              {`Goal:\n${goal}\n\nReturn Format:\n${
                returnFormat === "Custom" ? customReturnFormat : returnFormat
              }\n\nWarnings:\n${warnings}\n\nContext Dump:\n${contextDump}`}
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
          href="https://www.latent.space/p/o1-skill-issue"
          target="_blank"
          rel="noopener noreferrer"
        >
          o1 isn’t a chat model
        </a>
      </Typography>
    </Container>
  );
};

export default PromptBuilder;
