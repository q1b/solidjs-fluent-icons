import { splitProps } from "solid-js";
function TaskListSquareSettingsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.35 6.4c.2.2.2.5 0 .7L7.6 8.85a.5.5 0 01-.69.02l-.75-.69a.5.5 0 11.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zm0 5.7a.5.5 0 00-.7-.7l-1.42 1.4-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75zM11 7a.5.5 0 000 1h2.5a.5.5 0 000-1H11zM3 6a3 3 0 013-3h8a3 3 0 013 3v3.6a5.5 5.5 0 00-1-.4V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 01-3-3V6zm7.63 7.92a2 2 0 001.43-2.48l-.15-.56c.25-.2.53-.36.82-.5l.34.36a2 2 0 002.9 0l.33-.34c.3.14.58.31.83.52l-.12.42a2 2 0 001.45 2.52l.35.08a4.6 4.6 0 01.01 1.02l-.46.12a2 2 0 00-1.43 2.47l.16.56c-.26.2-.53.36-.82.5l-.34-.36a2 2 0 00-2.91 0l-.32.35c-.3-.14-.58-.31-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.34-.08a4.62 4.62 0 01-.01-1.02l.45-.12zm4.87.58a1 1 0 10-2 0 1 1 0 002 0z"/>
    </svg>);
}
export default TaskListSquareSettingsIcon;
