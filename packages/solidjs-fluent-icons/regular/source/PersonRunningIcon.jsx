import { splitProps } from "solid-js";
function PersonRunningIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.5 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.33.62A2.5 2.5 0 1011 4.5H8A2.5 2.5 0 005.5 7v1.75c0 .69.4 1.28.97 1.57L5.8 11H2.75a1.75 1.75 0 100 3.5h2.94c.63 0 1.25-.2 1.76-.59l1-.75L10 14.71v1.54a1.75 1.75 0 103.5 0V13a.5.5 0 00-.15-.35L11.71 11l.79-.8.1.1c.44.45 1.05.7 1.68.7h2.97a1.75 1.75 0 100-3.5h-1.54l-.88-.88zm-1.05.36l1.37 1.37c.09.1.22.15.35.15h1.75a.75.75 0 010 1.5h-2.97c-.37 0-.72-.15-.98-.4l-.45-.45a.5.5 0 00-.7 0l-1.5 1.5a.5.5 0 000 .7l1.85 1.86v3.04a.75.75 0 01-1.5 0V14.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.65-.05l-1.35 1.01c-.33.25-.74.39-1.16.39H2.75a.75.75 0 010-1.5H6a.5.5 0 00.35-.15l1.44-1.44C8.5 10.2 9 9.53 9 8.75V8h1a.5.5 0 000-1H8.5a.5.5 0 00-.5.5v1.25a.75.75 0 01-1.5 0V7c0-.83.67-1.5 1.5-1.5h3.2a2.5 2.5 0 002.58 1.48z"/>
    </svg>);
}
export default PersonRunningIcon;
