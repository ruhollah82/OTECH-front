import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Typography,
  List,
  ListItem,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledBlockquote = styled(Paper)({
  padding: "16px",
  margin: "16px 0",
  backgroundColor: "#f5f5f5",
  borderLeft: "6px solid #1976d2",
  fontStyle: "italic",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
});

const StyledCode = styled("code")({
  fontFamily: "monospace",
  backgroundColor: "#272822",
  color: "#f8f8f2",
  padding: "4px 8px",
  borderRadius: "6px",
  display: "inline-block",
});

const StyledPre = styled("pre")({
  backgroundColor: "#272822",
  color: "#f8f8f2",
  padding: "12px",
  borderRadius: "8px",
  overflowX: "auto",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
});

const MarkdownRenderer: React.FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <Box
      sx={{
        typography: "body1",
        p: 2,
        maxWidth: "800px",
        margin: "auto",
        textAlign: "left",
      }}
    >
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <Typography
              variant="h3"
              gutterBottom
              sx={{ color: "#1976d2", fontWeight: "bold" }}
            >
              {children}
              <Divider sx={{ my: 1, backgroundColor: "#1976d2" }} />
            </Typography>
          ),
          h2: ({ children }) => (
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#1e88e5", fontWeight: "bold" }}
            >
              {children}
            </Typography>
          ),
          h3: ({ children }) => (
            <Typography variant="h5" gutterBottom>
              {children}
            </Typography>
          ),
          p: ({ children }) => (
            <Typography variant="body1" paragraph>
              {children}
            </Typography>
          ),
          ul: ({ children }) => (
            <List sx={{ listStyleType: "disc", pl: 4 }}>{children}</List>
          ),
          ol: ({ children }) => (
            <List component="ol" sx={{ listStyleType: "decimal", pl: 4 }}>
              {children}
            </List>
          ),
          li: ({ children }) => (
            <ListItem sx={{ display: "list-item", paddingLeft: 2 }}>
              {children}
            </ListItem>
          ),
          strong: ({ children }) => (
            <strong style={{ fontWeight: 700 }}>{children}</strong>
          ),
          blockquote: ({ children }) => (
            <StyledBlockquote>{children}</StyledBlockquote>
          ),
          code: ({ children }) => <StyledCode>{children}</StyledCode>,
          pre: ({ children }) => <StyledPre>{children}</StyledPre>,
          table: ({ children }) => (
            <TableContainer
              component={Paper}
              sx={{ mt: 2, mb: 2, borderRadius: "8px", overflow: "hidden" }}
            >
              <Table size="small">{children}</Table>
            </TableContainer>
          ),
          thead: ({ children }) => (
            <TableHead sx={{ backgroundColor: "#eee" }}>{children}</TableHead>
          ),
          tbody: ({ children }) => <TableBody>{children}</TableBody>,
          tr: ({ children }) => <TableRow>{children}</TableRow>,
          th: ({ children }) => (
            <TableCell sx={{ fontWeight: "bold", backgroundColor: "#e3f2fd" }}>
              {children}
            </TableCell>
          ),
          td: ({ children }) => <TableCell>{children}</TableCell>,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;
