const fs = require("fs");

console.log("=================================");
console.log("VERCEL SECURITY TEST BUILD");
console.log("=================================");

console.log("BUILD_MARKER: BUILD_TEST_12345");

console.log(
  "TEST_SECRET:",
  process.env.TEST_SECRET || "NOT_FOUND"
);

console.log(
  "TEST_API_KEY:",
  process.env.TEST_API_KEY || "NOT_FOUND"
);

try {
  const privateContent = fs.readFileSync(
    "private.txt",
    "utf8"
  );

  console.log(
    "PRIVATE_FILE_CONTENT:",
    privateContent
  );
} catch (err) {
  console.log("PRIVATE_FILE_NOT_FOUND");
}

// Create deployment artifact
fs.mkdirSync("public", { recursive: true });

fs.writeFileSync(
  "public/artifact.txt",
  `
ARTIFACT_MARKER_12345

TEST_SECRET=${process.env.TEST_SECRET || "NOT_FOUND"}

PRIVATE_FILE_MARKER
`
);

console.log("ARTIFACT_CREATED");

console.log("=================================");
console.log("BUILD FINISHED");
console.log("=================================");
