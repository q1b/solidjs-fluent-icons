import { splitProps } from "solid-js";
function ChatVideoIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 10a8 8 0 10-16 0v.35l.03.38c.1 1.01.38 1.99.83 2.89l.06.12-.9 3.64-.02.08v.08c.03.3.31.52.62.45l3.65-.91.12.06A8 8 0 0018 10zM6 8a1 1 0 011-1h3a1 1 0 011 1v4a1 1 0 01-1 1H7a1 1 0 01-1-1V8zm7.15-.15a.5.5 0 01.85.36v3.58a.5.5 0 01-.85.36L12 11V9l1.15-1.15z"/>
    </svg>);
}
export default ChatVideoIcon;
