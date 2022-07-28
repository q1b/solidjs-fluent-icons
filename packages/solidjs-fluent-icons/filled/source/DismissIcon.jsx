import { splitProps } from "solid-js";
function DismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.9 4.05l.07-.08a.75.75 0 01.98-.07l.08.07L10 8.94l4.97-4.97a.75.75 0 01.98-.07l.08.07c.27.27.3.68.07.98l-.07.08L11.06 10l4.97 4.97c.27.27.3.68.07.98l-.07.08a.75.75 0 01-.98.07l-.08-.07L10 11.06l-4.97 4.97a.75.75 0 01-.98.07l-.08-.07a.75.75 0 01-.07-.98l.07-.08L8.94 10 3.97 5.03a.75.75 0 01-.07-.98l.07-.08-.07.08z"/>
    </svg>);
}
export default DismissIcon;
