import { Card, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";

let list = [
  { title: ["📈", "Dashboard"], href: "/dashboard" },
  { title: ["➕", "Tambah Data"], href: "/dashboard/add" },
  { title: ["📌", "List Kasus"], href: "/dashboard/list" },
  { title: ["🎯", "Keluar"], href: "/" },
];

export default function Sidebar(props) {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <h1 class="font-[Walkind] text-2xl text-black tracking-wide">🔥 Karhutla</h1>
      </div>
      <List className="divide-y divide-gray-300">
        {list.map((x) => (
          <a href={x.href} className={`p-1 ${props.path == x.href && '!bg-orange-500/40 !border !border-orange-500 !text-black !font-semibold !rounded-2xl !shadow-md'}`}>
            <ListItem className={`${props.path == x.href && 'hover:bg-transparent text-black'} font-[poppins]`}>
              <ListItemPrefix className="drop-shadow-md">{x.title[0]}</ListItemPrefix>
              {x.title[1]}
            </ListItem>
          </a>
        ))}
      </List>
    </Card>
  );
}
