import { splitProps } from "solid-js";
function PenOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l5.4 5.4-4 4c-.33.33-.56.74-.66 1.2l-.88 3.94a.5.5 0 00.6.6l3.92-.87c.47-.1.9-.34 1.24-.68l3.98-3.98 5.4 5.4a.5.5 0 00.7-.71l-15-15zm12.9 6.3l-2.59 2.6-4.2-4.21 3.96-3.97a2.97 2.97 0 014.2 4.21l-.66.67.33.34a2 2 0 010 2.82l-.94.94a.5.5 0 01-.7-.7l.94-.94a1 1 0 000-1.42l-.34-.33z"/>
    </svg>);
}
export default PenOffIcon;
