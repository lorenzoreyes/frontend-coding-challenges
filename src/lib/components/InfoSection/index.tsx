import type { ReactNode, ReactElement } from "react";
import { Divider } from "./Divider";
import { Grid } from "./Grid";
import { Item } from "./Item";

type InfoSectionComponent = {
  ({
    title,
    icon,
    children,
  }: {
    title: string;
    icon: ReactNode;
    children: ReactNode;
  }): ReactElement;

  Grid: typeof Grid;
  Item: typeof Item;
  Divider: typeof Divider;
};

export const InfoSection: InfoSectionComponent = ({
  title,
  icon,
  children,
}) => (
  <div>
    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
      {icon}
      {title}
    </h3>

    {children}
  </div>
);

InfoSection.Grid = Grid;
InfoSection.Item = Item;
InfoSection.Divider = Divider;