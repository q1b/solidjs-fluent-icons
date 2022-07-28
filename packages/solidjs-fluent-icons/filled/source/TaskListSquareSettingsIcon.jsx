import { splitProps } from "solid-js";
function TaskListSquareSettingsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h3.6A5.5 5.5 0 0117 9.6V6a3 3 0 00-3-3H6zm3.35 3.4c.2.2.2.5 0 .7L7.6 8.85a.5.5 0 01-.69.02l-.75-.69a.5.5 0 11.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zm-.7 5a.5.5 0 01.7.7L7.6 13.85a.5.5 0 01-.69.02l-.75-.69a.5.5 0 01.68-.73l.4.36 1.4-1.41zM11 8a.5.5 0 010-1h2.5a.5.5 0 010 1H11zm-.37 5.92a2 2 0 001.43-2.48l-.15-.56c.25-.2.53-.36.82-.5l.34.36a2 2 0 002.9 0l.33-.34c.3.14.58.31.83.52l-.12.42a2 2 0 001.45 2.52l.35.08a4.6 4.6 0 01.01 1.02l-.46.12a2 2 0 00-1.43 2.47l.16.56c-.26.2-.53.36-.82.5l-.34-.36a2 2 0 00-2.91 0l-.32.35c-.3-.14-.58-.31-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.34-.08a4.62 4.62 0 01-.01-1.02l.45-.12zm4.87.58a1 1 0 10-2 0 1 1 0 002 0z"/>
    </svg>);
}
export default TaskListSquareSettingsIcon;
