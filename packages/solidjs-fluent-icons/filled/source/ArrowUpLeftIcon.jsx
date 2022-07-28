import { splitProps } from "solid-js";
function ArrowUpLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12 3.75a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0V5.56l11.22 11.22a.75.75 0 001.06-1.06L5.56 4.5h5.69c.41 0 .75-.34.75-.75z"/>
    </svg>);
}
export default ArrowUpLeftIcon;
