export type IRoadMap = {
  id: number;
  active: boolean;
  title: string;
  lists: {
    active: boolean;
    text: string;
  }[];
};
