import axios from "axios";
import pako from "pako";

export const getGzipData = async (url: string) => {
  const response = await axios.get(url, {
    responseType: "arraybuffer",
  });
  const binaryArray = new Uint8Array(response.data);
  const jsonBinary = pako.inflate(binaryArray);
  const jsonString = new TextDecoder("utf-8").decode(jsonBinary);
  const jsonData = JSON.parse(jsonString);
  return jsonData;
};
