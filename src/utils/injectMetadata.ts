import { Decoder, tools, Reader } from "ts-ebml";
import { readAsArrayBuffer } from "./readAsArrayBuffer";

export const injectMetadata = (blob: Blob) => {
  const decoder = new Decoder();
  const reader = new Reader();
  reader.logging = false;
  reader.drop_default_duration = false;
  return readAsArrayBuffer(blob).then((buffer: any) => {
    const elms = decoder.decode(buffer);
    elms.forEach((elm: any) => {
      reader.read(elm);
    });
    reader.stop();
    const refinedMetadataBuf = tools.makeMetadataSeekable(
      reader.metadatas,
      reader.duration,
      reader.cues
    );
    const body = buffer.slice(reader.metadataSize);
    return new Blob([refinedMetadataBuf, body], { type: blob.type });
  });
};
