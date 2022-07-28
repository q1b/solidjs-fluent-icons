import { splitProps } from "solid-js";
function TaskListSquareAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v3.6A5.5 5.5 0 009.6 17H6a3 3 0 01-3-3V6zm6.35.4a.5.5 0 00-.7 0L7.23 7.8l-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02L9.34 7.1a.5.5 0 000-.7zm0 5.7a.5.5 0 00-.7-.7l-1.42 1.4-.4-.35a.5.5 0 00-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75zM11 7a.5.5 0 000 1h2.5a.5.5 0 000-1H11zm8 7.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-4-2V14h1.5a.5.5 0 010 1H15v1.5a.5.5 0 01-1 0V15h-1.5a.5.5 0 010-1H14v-1.5a.5.5 0 011 0z"/>
    </svg>);
}
export default TaskListSquareAddIcon;
