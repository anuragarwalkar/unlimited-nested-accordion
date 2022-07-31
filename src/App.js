import { useState } from "react";
import "./styles.css";

const DATA = {
  id: 1,
  pid: null,
  children: [
    {
      id: 2,
      pid: 1,
      children: [
        {
          id: 4,
          pid: 2,
          children: [{ id: 6, pid: 4 }]
        }
      ]
    },
    { id: 3, pid: 1, children: [{ id: 5, pid: 3 }] }
  ]
};

function Accordion({ nodeId, parentId, children }) {
  const [expand, setExpand] = useState(false);

  const onExpand = () => {
    setExpand((s) => !s);
  };

  return (
    <div style={{ padding: "0 10px" }}>
      <div
        style={{
          backgroundColor: "#87CEEB",
          padding: "10px",
          borderRadius: "5px",
          margin: "10px 0"
        }}
        onClick={onExpand}
      >
        <span> Node Id: {nodeId} </span>
        <span> Parent Id: {parentId ? parentId : "Root"}</span>
      </div>
      {children &&
        expand &&
        children.length &&
        children.map((i) => (
          <Accordion nodeId={i.id} parentId={i.pid}>
            {i.children}
          </Accordion>
        ))}
    </div>
  );
}

export default function App() {
  const [{ id, pid, children }] = useState(DATA);

  return (
    <div>
      <Accordion nodeId={id} parentId={pid}>
        {children}
      </Accordion>
    </div>
  );
}
