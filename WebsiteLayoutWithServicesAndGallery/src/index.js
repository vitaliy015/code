import { createRoot } from "react-dom/client";
import WebsiteLayoutWithServicesAndGallery from "./components/WebsiteLayoutWithServicesAndGallery";
import { mockData } from "./mockData";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div style={{ display: "inline-block", width: "1922.001204167237px" }} data-ignore="used only for top most containter width">
    <WebsiteLayoutWithServicesAndGallery {...mockData} />
  </div>
);
