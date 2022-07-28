import { splitProps } from "solid-js";
function ArrowEnterIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 17a.5.5 0 010-1H14a2 2 0 002-2V6a2 2 0 00-2-2H7.5a.5.5 0 010-1H14a3 3 0 013 3v8a3 3 0 01-3 3H7.5zm.15-10.85c.2-.2.5-.2.7 0l3.5 3.5c.2.2.2.5 0 .7l-3.5 3.5a.5.5 0 01-.7-.7l2.64-2.65H1.5a.5.5 0 010-1h8.8L7.64 6.85a.5.5 0 010-.7z"/>
    </svg>);
}
export default ArrowEnterIcon;
