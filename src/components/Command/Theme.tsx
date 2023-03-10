interface ThemeProps {
  command?: string;
  args?: string[];
}

type Theme = "dark" | "light";
const AVAILABLE_THEMES = ["dark", "light"];

const Theme = ({ command, args = [] }: ThemeProps) => {
  const firstArg = args[0];

  if (firstArg === "help") {
    return (
      <p>
        <div>Select theme by following command</div>
      </p>
    );
  }

  // Support theme
  if (AVAILABLE_THEMES.includes(firstArg)) {
    selectTheme(firstArg);
    return (
      <div>
        Selected <span className="text-purple-500">{firstArg}</span> theme
      </div>
    );
  }

  // Unsupported argument
  if (firstArg) {
    return (
      <div>
        <div>
          Unknown command "<span className="text-red-500">{firstArg}</span>" for "
          <span className="text-blue-500">{command}</span>"
        </div>
        <HelpText />
      </div>
    );
  }

  return <HelpText />;
};

export default Theme;

const HelpText = () => (
  <div>
    Select theme by following command: <span>theme </span>
    {` <theme>`}
    <ol className="list-decimal">
      {AVAILABLE_THEMES.map((theme) => (
        <li key={theme} className={theme === "dark" ? "text-stone-400" : "text-indigo-400"}>
          {theme}
        </li>
      ))}
    </ol>
  </div>
);

const selectTheme = (theme: string) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else if (theme === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};
