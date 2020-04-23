import * as React from "react";
import { JSWindow } from "@jswf/react";

import { storiesOf } from "@storybook/react";

storiesOf("Pages/Window", module).add("WindowBasic", () => {
  return <WindowBasic />;
});

export function WindowBasic() {
  return (
    <JSWindow
      title="WindowBasic"
      x={100}
      y={100}
      width={600}
      height={400}
      titleSize={64}
      moveable={true}
      clientStyle={{ backgroundColor: "#CCFFCC" }}
    >
      <pre>
        {`
        title="WindowBasic"
        x={100}
        y={100}
        width={600}
        height={400}
        titleSize={64}
        moveable={true}
        clientStyle={{ backgroundColor: "#CCFFCC" }}`}
      </pre>
    </JSWindow>
  );
}
