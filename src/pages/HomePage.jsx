import { useEffect } from "react";
import Form from "../components/Form";
import List from "../components/List";
import axios from "axios";
import { useState } from "react";

export default function HomePage() {
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8099/todo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setListItem(res.data);
      });
  }, []);
  return (
    <section className="flex flex-col gap-4">
      <Form list={listItem} />
      <List list={listItem}/>
    </section>
  );
}
