export default function formatCodes(information) {
  return JSON.stringify(information)
    .split("{")
    .join("{\n")
    .split("}")
    .join("\n}")
    .split(",")
    .join(",\n")
    .split(";")
    .join(";\n")
    .split(":")
    .join(": ")
    .split('\n"')
    .join('\n "');
}
