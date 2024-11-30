import Pagination from "../../components/pagination";
import FormSearch from "./partials/formsearch";
import Hero from "./partials/hero";
import Workspaces from "./partials/workspaces";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="workspaces">
        <FormSearch/>
        <Workspaces/>
        <Pagination length={5} path="/"/>
      </div>
    </>
  );
}
