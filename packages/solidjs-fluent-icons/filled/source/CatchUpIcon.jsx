import { splitProps } from "solid-js";
function CatchUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.67 7.14c.1-.2.38-.19.46.02l2.33 6.2a1.75 1.75 0 003.23.14l1.22-2.6a.25.25 0 01.23-.15h1.06a1.5 1.5 0 100-1.5h-1.06c-.68 0-1.3.4-1.59 1l-1.22 2.6c-.1.2-.38.2-.46-.01l-2.33-6.2A1.75 1.75 0 006.3 6.5L5.1 9.1a.25.25 0 01-.22.15H3.8a1.5 1.5 0 100 1.5h1.07c.67 0 1.29-.4 1.58-1l1.22-2.6z"/>
    </svg>);
}
export default CatchUpIcon;
