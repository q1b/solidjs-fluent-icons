import { splitProps } from "solid-js";
function MailOpenPersonIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.74 2.07a.5.5 0 01.52 0l6.77 4.06a2 2 0 01.7.71L10 10.94l-7.73-4.1a2 2 0 01.7-.7l6.77-4.07zm3.14 8.47l-2.65 1.4a.5.5 0 01-.46 0L2 7.83v5.67A2.5 2.5 0 004.5 16h6.55a2.5 2.5 0 012.22-1.99 2.99 2.99 0 01-.4-3.47zM17.5 12a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z"/>
    </svg>);
}
export default MailOpenPersonIcon;
