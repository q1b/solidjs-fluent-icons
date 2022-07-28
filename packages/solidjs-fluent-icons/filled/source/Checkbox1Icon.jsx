import { splitProps } from "solid-js";
function Checkbox1Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8c.77 0 1.47-.29 2-.76v-.83a1.5 1.5 0 01-1.4-2.61l2-1.5c.12-.1.26-.16.4-.21V6a3 3 0 00-3-3H6zm7.85 4.85l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 4.65-4.64a.5.5 0 01.7.7zm3.87 4.2a.5.5 0 01.28.45v5a.5.5 0 01-1 0v-4l-1.2.9a.5.5 0 01-.6-.8l2-1.5a.5.5 0 01.52-.05z"/>
    </svg>);
}
export default Checkbox1Icon;
