import { useRouter } from "next/router";
import NotePage from "../../components/Note/NotePage";
import useTodo from "../../Hooks/useTodo";
export default function TodoPage() {
  const router = useRouter();
  const { getDataWithId } = useTodo();
  const id = parseInt(router.query.id);
  const data = getDataWithId(id);
  if (data == undefined) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return <NotePage data= {data} />;
  }
}
