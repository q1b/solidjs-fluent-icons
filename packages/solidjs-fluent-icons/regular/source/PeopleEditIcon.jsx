import { splitProps } from "solid-js";
function PeopleEditIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 5.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM6.75 2.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM10 10a2 2 0 012 1.94l-1.42 1.42a2.96 2.96 0 00.42-1.28V12a1 1 0 00-1-1H3.5a1 1 0 00-1 1v.16l.06.33c.07.27.2.64.45 1C3.49 14.2 4.5 15 6.75 15c1.56 0 2.53-.39 3.14-.86-.21.3-.37.65-.46 1.02l-.1.42a7.2 7.2 0 01-2.58.42c-2.51 0-3.87-.92-4.57-1.93a3.95 3.95 0 01-.68-1.99V12c0-1.1.9-2 2-2H10zm7-3.5A2.49 2.49 0 0114.5 9 2.5 2.5 0 1117 6.5zm-4 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm2.8 3.05l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z"/>
    </svg>);
}
export default PeopleEditIcon;
