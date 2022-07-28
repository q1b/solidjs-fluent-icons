import { splitProps } from "solid-js";
function PenIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.92 2.87a2.97 2.97 0 014.2 4.21l-.66.67.33.34a2 2 0 010 2.82l-.94.94a.5.5 0 01-.7-.7l.94-.94a1 1 0 000-1.42l-.34-.33-7.98 7.98c-.34.34-.77.57-1.24.68l-3.92.87a.5.5 0 01-.6-.6l.88-3.95c.1-.45.33-.86.66-1.2l9.37-9.37z"/>
    </svg>);
}
export default PenIcon;
