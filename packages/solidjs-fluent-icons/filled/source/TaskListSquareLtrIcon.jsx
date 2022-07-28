import { splitProps } from "solid-js";
function TaskListSquareLtrIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm6.35 1.1a.5.5 0 00-.7-.7L7.23 7.8l-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1zm0 4.3a.5.5 0 00-.7 0l-1.42 1.4-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75a.5.5 0 000-.7zM11 12a.5.5 0 000 1h2.5a.5.5 0 000-1H11zm-.5-4.5c0 .28.22.5.5.5h2.5a.5.5 0 000-1H11a.5.5 0 00-.5.5z"/>
    </svg>);
}
export default TaskListSquareLtrIcon;
