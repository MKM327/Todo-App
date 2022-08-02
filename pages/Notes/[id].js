import { useRouter } from "next/router";
import useTodo from "../../Hooks/useTodo";
export default function TodoPage() {
  const router = useRouter();
  const { getDataWithId } = useTodo();
  const id = parseInt(router.query.id);
  const data = getDataWithId(id);
  return <div></div>;
}
