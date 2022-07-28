import { splitProps } from "solid-js";
function TextColumnTwoIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 5.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h4.5c.41 0 .75-.34.75-.75zm-8 0A.75.75 0 008.25 5h-4.5a.75.75 0 000 1.5h4.5c.41 0 .75-.34.75-.75zm8 3a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h4.5c.41 0 .75-.34.75-.75zm-8 0A.75.75 0 008.25 8h-4.5a.75.75 0 000 1.5h4.5c.41 0 .75-.34.75-.75zm8 3a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h4.5c.41 0 .75-.34.75-.75zm-8 0a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h4.5c.41 0 .75-.34.75-.75zm8 3a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h4.5c.41 0 .75-.34.75-.75zm-8 0a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h4.5c.41 0 .75-.34.75-.75z"/>
    </svg>);
}
export default TextColumnTwoIcon;
