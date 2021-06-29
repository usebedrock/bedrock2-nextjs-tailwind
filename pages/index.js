import Avatar from "@components/avatar";
import Alert from "@components/alert";
import Button from "@components/button";
import ButtonGroup from "@components/button-group";

import Toolbar from "@components/toolbar";
import ToolbarGroup from "@components/toolbar-group";
import ToolbarItem from "@components/toolbar-item";

export default function IndexPage() {
  return (
    <div className="space-y-12">

      <h3 className="text-2xl">Kitchen sink</h3>
      <Avatar initials="JD" />
      <Button>I am a button</Button>
      <Button skin="primary">I am a primary button</Button>

      <Alert>I am an alert</Alert>
      <Alert type="warning">I am an alert</Alert>

      <Toolbar>
        <ToolbarGroup align="left">
          <ToolbarItem>
            <Button skin="primary" title="I am a button">Oi</Button>
          </ToolbarItem>
          <ToolbarItem>
            <ButtonGroup>
              <Button skin="primary">I am a button 2</Button>
              <Button>OI</Button>
            </ButtonGroup>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup align="right">
          <ToolbarItem>
            <ButtonGroup>
              <Button skin="primary">I am a button 2</Button>
              <Button>OI</Button>
            </ButtonGroup>
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>

    </div>
  );
}
