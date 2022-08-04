import NotePage from "../../components/Note/NotePage";
import useNote from "../../Hooks/useNote";
import axios from "axios";
export default function TodoPage({ data }) {
  return <NotePage data={data} />;
}
export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/todo");
  console.log("entered");
  const data = res.data;
  // Pss data to the page via props
  return { props: { data } };
}
