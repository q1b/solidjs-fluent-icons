import { splitProps } from "solid-js";
function TextColumnOneIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15 5.75a.75.75 0 00-.75-.75h-8.5a.75.75 0 000 1.5h8.5c.41 0 .75-.34.75-.75zm0 3a.75.75 0 00-.75-.75h-8.5a.75.75 0 000 1.5h8.5c.41 0 .75-.34.75-.75zm0 3a.75.75 0 00-.75-.75h-8.5a.75.75 0 000 1.5h8.5c.41 0 .75-.34.75-.75zm0 3a.75.75 0 00-.75-.75h-8.5a.75.75 0 000 1.5h8.5c.41 0 .75-.34.75-.75z"/>
    </svg>);
}
export default TextColumnOneIcon;
