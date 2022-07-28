import { splitProps } from "solid-js";
function MailReadMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.74 2.07a.5.5 0 01.52 0l6.03 3.71.2.14-6.49 4-6.48-4c.06-.05.12-.1.2-.14l6.02-3.7zm7.24 4.72l.02.27v5.44a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 012 12.5V7.06c0-.1 0-.18.02-.27l6.72 4.14c.16.1.36.1.52 0l6.72-4.14zM4.5 16c.46.6 1.18 1 2 1H14a4 4 0 004-4V8.06c0-.52-.27-1-.71-1.28l-.34-.2c.03.15.05.32.05.48V13a3 3 0 01-3 3H4.5z"/>
    </svg>);
}
export default MailReadMultipleIcon;
