import Item from "./Item";

export default function List(props) {
const listitem = props.list

  return (
    <ul className="flex flex-col gap-5">
        {listitem.map((item)=>{return <Item title={item.title}></Item>})}
    </ul>
  );
}
