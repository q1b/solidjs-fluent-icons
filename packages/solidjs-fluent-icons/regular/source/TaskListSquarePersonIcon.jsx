import { splitProps } from "solid-js";
function TaskListSquarePersonIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.35 7.1a.5.5 0 00-.7-.7L7.23 7.8l-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1zm0 4.3c.2.2.2.5 0 .7L7.6 13.85a.5.5 0 01-.69.02l-.75-.69a.5.5 0 01.68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0zM11 12a.5.5 0 000 1h1.67a3 3 0 01-.17-1H11zm-5 4h5.05a2.51 2.51 0 00-.01 1H6a3 3 0 01-3-3V6a3 3 0 013-3h8a3 3 0 013 3v3.4c-.3-.17-.64-.3-1-.36V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8c0 1.1.9 2 2 2zm4.5-8.5c0-.28.22-.5.5-.5h2.5a.5.5 0 010 1H11a.5.5 0 01-.5-.5zm7 4.5a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z"/>
    </svg>);
}
export default TaskListSquarePersonIcon;
