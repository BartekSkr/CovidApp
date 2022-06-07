export interface DefaultProps {
  icon?: JSX.Element;
  title?: string;
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}